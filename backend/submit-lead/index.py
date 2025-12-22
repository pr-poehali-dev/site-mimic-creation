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
    headers = event.get('headers', {})
    
    print(f"Received form data: {json.dumps(body_data, ensure_ascii=False)}")
    
    first_name = body_data.get('firstName', '')
    last_name = body_data.get('lastName', '')
    email = body_data.get('email', '')
    phone = body_data.get('phone', '')
    experience = body_data.get('experience', 'Not specified')
    message = body_data.get('message', '')
    country_code = body_data.get('countryCode', '')
    country_name = body_data.get('countryName', 'Not specified')
    
    # Get IP from headers (Cloudflare/Yandex Cloud provides this)
    ip_address = (
        headers.get('cf-connecting-ip') or 
        headers.get('x-forwarded-for', '').split(',')[0].strip() or
        headers.get('x-real-ip') or
        body_data.get('ipAddress', 'Unknown')
    )
    
    is_spam = body_data.get('isSpam', False)
    spam_reason = body_data.get('spamReason', '')
    
    if not all([first_name, last_name, email, phone]):
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
    
    print(f"Bot token exists: {bool(bot_token)}, Chat ID exists: {bool(chat_id)}")
    
    if not bot_token or not chat_id:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Telegram credentials not configured'})
        }
    
    lead_id_formatted = '00000'
    
    full_name = f"{first_name} {last_name}"
    phone_formatted = f"{country_code}{phone}"
    
    telegram_message = f"""🚀 НОВАЯ ЗАЯВКА с MEXVORIN.IO

👤 Имя: {first_name}
👤 Фамилия: {last_name}
📧 Email: {email}
📱 Телефон: +{phone_formatted.lstrip('+')}
🌍 Страна: {country_name} ({country_code})
🌐 IP: {ip_address}
💬 Сообщение: {message if message else 'Hero form submission'}
🆔 Заявка: #{lead_id_formatted}"""
    
    telegram_url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    data = urllib.parse.urlencode({
        'chat_id': chat_id,
        'text': telegram_message
    }).encode('utf-8')
    
    req = urllib.request.Request(telegram_url, data=data)
    
    try:
        print(f"Sending to Telegram: chat_id={chat_id}")
        with urllib.request.urlopen(req) as response:
            response_data = response.read()
            print(f"Telegram response: {response_data.decode('utf-8')}")
            
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
        print(f"Telegram error: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Failed to send message: {str(e)}'})
        }