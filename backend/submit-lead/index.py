import json
import os
import urllib.request
import urllib.parse
import psycopg2
from typing import Dict, Any

MAX_LEADS_PER_IP = 2

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Отправка заявки с формы в Telegram группу
    Args: event с данными формы (firstName, lastName, email, phone, countryCode, countryName, ipAddress)
          context с request_id
    Returns: HTTP ответ с результатом отправки
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    first_name = body_data.get('firstName', '')
    last_name = body_data.get('lastName', '')
    email = body_data.get('email', '')
    phone = body_data.get('phone', '')
    country_code = body_data.get('countryCode', '')
    country_name = body_data.get('countryName', '')
    ip_address = body_data.get('ipAddress', 'Unknown')
    is_spam = body_data.get('isSpam', False)
    spam_reason = body_data.get('spamReason', '')
    
    if not all([first_name, last_name, email, phone, country_name]):
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Missing required fields'})
        }
    
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN_NEW')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID_NEW')
    database_url = os.environ.get('DATABASE_URL')
    
    if not bot_token or not chat_id:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Telegram credentials not configured'})
        }
    
    if not database_url:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Database not configured'})
        }
    
    conn = None
    lead_number = 0
    
    try:
        conn = psycopg2.connect(database_url)
        cur = conn.cursor()
        
        cur.execute("""
            SELECT ip_address FROM ip_blacklist 
            WHERE ip_address = %s
        """, (ip_address,))
        
        blacklisted = cur.fetchone()
        
        if blacklisted:
            cur.execute("""
                UPDATE ip_blacklist 
                SET attempts_count = attempts_count + 1 
                WHERE ip_address = %s
            """, (ip_address,))
            conn.commit()
            cur.close()
            if conn:
                conn.close()
            return {
                'statusCode': 403,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Access denied'})
            }
        
        if is_spam and ip_address != 'Unknown':
            cur.execute("""
                INSERT INTO ip_blacklist (ip_address, reason, attempts_count)
                VALUES (%s, %s, 1)
                ON CONFLICT (ip_address) 
                DO UPDATE SET attempts_count = ip_blacklist.attempts_count + 1
            """, (ip_address, spam_reason))
            conn.commit()
            cur.close()
            if conn:
                conn.close()
            return {
                'statusCode': 403,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Spam detected'})
            }
        
        cur.execute("""
            SELECT COUNT(*) FROM leads 
            WHERE ip_address = %s
        """, (ip_address,))
        
        ip_count = cur.fetchone()[0]
        
        if ip_count >= MAX_LEADS_PER_IP:
            cur.close()
            if conn:
                conn.close()
            return {
                'statusCode': 429,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Too many requests from this IP address'})
            }
        
        cur.execute("""
            SELECT id FROM leads 
            WHERE country_code = %s AND phone = %s
            LIMIT 1
        """, (country_code, phone))
        
        existing_lead = cur.fetchone()
        
        if existing_lead:
            cur.close()
            if conn:
                conn.close()
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'This phone number has already been registered'})
            }
        
        cur.execute("""
            INSERT INTO leads (first_name, last_name, email, phone, country_code, country_name, ip_address)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
            RETURNING id
        """, (first_name, last_name, email, phone, country_code, country_name, ip_address))
        
        lead_number = cur.fetchone()[0]
        conn.commit()
        cur.close()
        
    except Exception as e:
        if conn:
            conn.rollback()
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Database error: {str(e)}'})
        }
    finally:
        if conn:
            conn.close()
    
    lead_id_formatted = str(lead_number).zfill(5)
    
    full_name = f"{first_name} {last_name}"
    phone_formatted = f"{country_code}{phone}"
    
    message = f"""LEAD!
Name: {first_name}
Last name: {last_name}
SUMMA: {full_name}
Email: {email}
Phone number: +{phone_formatted.lstrip('+')}
Country: {country_name}
Platform: mexvorin.io
IP Address: {ip_address}"""
    
    telegram_url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    data = urllib.parse.urlencode({
        'chat_id': chat_id,
        'text': message
    }).encode('utf-8')
    
    req = urllib.request.Request(telegram_url, data=data)
    
    try:
        with urllib.request.urlopen(req) as response:
            response_data = response.read()
            
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'success': True, 'message': 'Lead submitted successfully'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Failed to send message: {str(e)}'})
        }