import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Index = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  
  const [timeLeft, setTimeLeft] = useState({ days: 1, hours: 23, minutes: 24, seconds: 35 });
  const [selectedOffice, setSelectedOffice] = useState(0);
  const [language, setLanguage] = useState('English');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const offices = [
    {
      name: 'Global Headquarters',
      city: 'Washington, DC, USA',
      address: 'Easy Offices, 1200 G Street, NW, Suite 800, 20005',
      hours: 'Mon-Fri: 9AM-6PM EST',
      staff: '250+ Staff',
      phone: '+1 (469) 868 4562',
      coordinates: { lat: 38.8977, lng: -77.0365 }
    },
    {
      name: 'Ireland Office',
      city: 'Dublin, Ireland',
      address: 'Lis Cara Business Centre, Fitzwilliam Square, Dublin 2',
      hours: 'Mon-Fri: 9AM-6PM GMT',
      staff: '150+ Staff',
      phone: '+353 1 231 4600',
      coordinates: { lat: 53.3376, lng: -6.2522 }
    },
    {
      name: 'United Kingdom Office',
      city: 'London, United Kingdom',
      address: 'The London Office, 167-169 Great Portland Street, 5th Floor, London W1W 5PF',
      hours: 'Mon-Fri: 9AM-6PM GMT',
      staff: '100+ Staff',
      phone: '+44 (0) 20 7183 3787',
      coordinates: { lat: 51.5224, lng: -0.1420 }
    },
    {
      name: 'Germany Office',
      city: 'Berlin, Germany',
      address: 'Alexanderstraße 3-7, 10117 Berlin',
      hours: 'Mon-Fri: 9AM-6PM CET',
      staff: '100+ Staff',
      phone: '+49 30 7001 4820',
      coordinates: { lat: 52.5228, lng: 13.4124 }
    },
    {
      name: 'France Office',
      city: 'Paris, France',
      address: 'Business Centre 10 Rue de la Paix, 10 Rue de la Paix, 75002 Paris',
      hours: 'Mon-Fri: 9AM-6PM CET',
      staff: '75+ Staff',
      phone: '+33 1 45 67 89 10',
      coordinates: { lat: 48.8692, lng: 2.3317 }
    },
    {
      name: 'Spain Office',
      city: 'Barcelona, Spain',
      address: 'Vivendi Business Center, C/ de París 45-47, 08029 Barcelona',
      hours: 'Mon-Fri: 9AM-6PM CET',
      staff: '80+ Staff',
      phone: '+34 931 602 555',
      coordinates: { lat: 41.3936, lng: 2.1464 }
    },
    {
      name: 'Italy Office',
      city: 'Rome, Italy',
      address: 'Eur Business District, Viale Europa, 39, 00144 Rome',
      hours: 'Mon-Fri: 9AM-6PM CET',
      staff: '70+ Staff',
      phone: '+39 06 594 7101',
      coordinates: { lat: 41.8338, lng: 12.4738 }
    },
    {
      name: 'Netherlands Office',
      city: 'Amsterdam, Netherlands',
      address: 'ESC Amsterdam, Keizersgracht 62-64, 1015 CS Amsterdam',
      hours: 'Mon-Fri: 9AM-6PM CET',
      staff: '60+ Staff',
      phone: '+31 (0)20 520 7000',
      coordinates: { lat: 52.3738, lng: 4.8910 }
    },
    {
      name: 'Norway Office',
      city: 'Oslo, Norway',
      address: 'Regus C.J. Hambros Plass 2C, C.J. Hambros Plass 2C, 0164 Oslo',
      hours: 'Mon-Fri: 9AM-6PM CET',
      staff: '40+ Staff',
      phone: '+47 22 99 60 00',
      coordinates: { lat: 59.9127, lng: 10.7461 }
    },
    {
      name: 'Switzerland Office',
      city: 'Zurich, Switzerland',
      address: 'Regus Business Center Zurich Bahnhofstrasse, Bahnhofstrasse 98/100, 8001 Zürich',
      hours: 'Mon-Fri: 9AM-6PM CET',
      staff: '35+ Staff',
      phone: '+064 562 70 70',
      coordinates: { lat: 47.3769, lng: 8.5417 }
    },
    {
      name: 'Austria Office',
      city: 'Vienna, Austria',
      address: 'Green Business Center Wien GmbH, Liebenstraße 122, 1110 Wien',
      hours: 'Mon-Fri: 9AM-6PM CET',
      staff: '60+ Staff',
      phone: '+0800 400 41',
      coordinates: { lat: 48.2082, lng: 16.3738 }
    },
    {
      name: 'Malaysia Office',
      city: 'Kuala Lumpur, Malaysia',
      address: 'Plaza Sentral Business Centre, Level 15, Block 1B, Plaza Sentral, Jalan Stesen Sentral 5, 50470 Kuala Lumpur',
      hours: 'Mon-Fri: 9AM-6PM MYT',
      staff: '120+ Staff',
      phone: '+60 3 9236 1111',
      coordinates: { lat: 3.1337, lng: 101.6869 }
    },
    {
      name: 'Japan Office',
      city: 'Tokyo, Japan',
      address: 'Business Development Center TOKYO, 2-7-2 Marunouchi, Chiyoda-ku, Tokyo 100-7020',
      hours: 'Mon-Fri: 9AM-6PM JST',
      staff: '90+ Staff',
      phone: '+81-3-6269-9981',
      coordinates: { lat: 35.6812, lng: 139.7671 }
    },
    {
      name: 'Korea Office',
      city: 'Seoul, South Korea',
      address: 'The Offices Seoul – Yeouido District, Yeouido District',
      hours: 'Mon-Fri: 9AM-6PM KST',
      staff: '65+ Staff',
      phone: '+82 2 3784 5000',
      coordinates: { lat: 37.5219, lng: 126.9245 }
    },
    {
      name: 'India Office',
      city: 'New Delhi, India',
      address: 'World Trade Center, Babar Road, Connaught Place, New Delhi',
      hours: 'Mon-Fri: 9AM-6PM IST',
      staff: '85+ Staff',
      phone: '+91 11 41307979',
      coordinates: { lat: 28.6289, lng: 77.2065 }
    },
    {
      name: 'Australia Office',
      city: 'Melbourne, Australia',
      address: 'Melbourne Business Centre, Ground Floor 470 St Kilda Road, Melbourne VIC 3004',
      hours: 'Mon-Fri: 9AM-6PM AEDT',
      staff: '55+ Staff',
      phone: '+1800 181 182',
      coordinates: { lat: -37.8497, lng: 144.9789 }
    },
    {
      name: 'Canada Office',
      city: 'Toronto, Canada',
      address: 'The Professional Centre – Business Centre, 120 Adelaide St W, Suite 2500, Toronto ON M5H 1T1',
      hours: 'Mon-Fri: 9AM-6PM EST',
      staff: '45+ Staff',
      phone: '+1 416 367-1055',
      coordinates: { lat: 43.6532, lng: -79.3832 }
    },
    {
      name: 'Russia Office',
      city: 'Moscow, Russia',
      address: 'Moscow, Presnenskaya embankment st., 6, DC Moscow City',
      hours: 'Mon-Fri: 9AM-6PM MSK',
      staff: '50+ Staff',
      phone: '+495 748 50 52',
      coordinates: { lat: 55.7490, lng: 37.5388 }
    }
  ];

  useEffect(() => {
    const getOrCreateEndTime = () => {
      const stored = localStorage.getItem('envariax_offer_end');
      if (stored) {
        return parseInt(stored);
      }
      const endTime = Date.now() + (1 * 24 * 60 * 60 * 1000) + (23 * 60 * 60 * 1000) + (24 * 60 * 1000) + (35 * 1000);
      localStorage.setItem('envariax_offer_end', endTime.toString());
      return endTime;
    };

    const endTime = getOrCreateEndTime();

    const timer = setInterval(() => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Join form submitted:', { firstName, lastName, email, phone });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Envariax</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">FAQ</a>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <span className="text-lg">{language === 'English' ? '🇺🇸' : '🇰🇷'}</span>
                  <span className="font-medium">{language}</span>
                  <Icon name="ChevronDown" size={16} />
                </button>
                
                {isLangDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                    <button
                      onClick={() => {
                        setLanguage('English');
                        setIsLangDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors text-left"
                    >
                      <span className="text-lg">🇺🇸</span>
                      <span className="font-medium text-gray-900">English</span>
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('한국어');
                        setIsLangDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors text-left"
                    >
                      <span className="text-lg">🇰🇷</span>
                      <span className="font-medium text-gray-900">한국어</span>
                    </button>
                  </div>
                )}
              </div>

              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 rounded-lg">
                GET STARTED
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 animate-fade-in">
              <div className="text-4xl font-bold tracking-wider" style={{ color: '#4A90E2' }}>
                ENVARIAX
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                Intelligent Trades Executed Globally
              </h1>
              <div className="text-5xl font-bold" style={{ color: '#4A90E2' }}>
                980M+
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Experience the evolution of digital wealth with Envariax — a next-generation, AI-driven trading platform engineered to anticipate, adapt, and optimize every decision in today's dynamic markets.
              </p>
              <Card className="bg-white/90 border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon name="Star" className="fill-yellow-400 text-yellow-400" size={24} />
                    <Icon name="Star" className="fill-yellow-400 text-yellow-400" size={24} />
                    <Icon name="Star" className="fill-yellow-400 text-yellow-400" size={24} />
                    <Icon name="Star" className="fill-yellow-400 text-yellow-400" size={24} />
                    <Icon name="Star" className="fill-yellow-400 text-yellow-400" size={24} />
                    <span className="text-xl font-bold ml-2" style={{ color: '#4A90E2' }}>4.9/5</span>
                  </div>
                  <p className="text-center text-sm text-gray-600">Based on 12,847 verified reviews</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm border-none shadow-2xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Join Exclusive Access</h2>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold" style={{ color: '#4A90E2' }}>1200</div>
                    <div className="text-sm text-gray-600">Trusted Members</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold" style={{ color: '#4A90E2' }}>700</div>
                    <div className="text-sm text-gray-600">Active Global Investors</div>
                  </div>
                </div>

                <form onSubmit={handleJoinSubmit} className="space-y-4">
                  <Input
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="h-14 bg-gray-50 border-gray-200"
                  />
                  <Input
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="h-14 bg-gray-50 border-gray-200"
                  />
                  <Input
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 bg-gray-50 border-gray-200"
                  />
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Phone</label>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-2 px-4 bg-gray-50 border border-gray-200 rounded-md">
                        <span className="text-lg">🇺🇸</span>
                        <span className="text-sm">+1</span>
                        <Icon name="ChevronDown" size={16} className="text-gray-500" />
                      </div>
                      <Input
                        type="tel"
                        placeholder="(201) 555-0123"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="h-14 bg-gray-50 border-gray-200 flex-1"
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 hover:opacity-90 border-none"
                  >
                    BEGIN NOW
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6" style={{ color: '#5B6B8C' }}>
            Why Traders Choose Envariax?
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Envariax equips forward-thinking investors with a unified ecosystem built on precision engineering — merging adaptive AI automation, military-grade protection, and expert-driven insights to deliver seamless performance across every financial frontier.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">
                        Predictive Intelligence That Sees Ahead
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Outsmart volatility through Envariax's self-evolving AI models, designed to read live data streams, forecast directional swings, and uncover high-value opportunities before they reach the spotlight. Anticipation becomes your edge — every decision powered by data that thinks forward.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">
                        Bulletproof Asset Protection
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Every signal, order, and transaction flows through layered encryption, isolated network protocols, and continuous AI surveillance, ensuring your capital stays protected under any market condition. With Envariax, digital security isn't an add-on — it's the foundation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">
                        Around-the-Clock Global Expertise
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Gain access to a worldwide network of multilingual professionals ready to assist at any moment. From strategic refinement to technical calibration, Envariax's support experts ensure your trading experience remains efficient, stable, and future-proof.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">
                        Lightning-Fast Execution Engine
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        When milliseconds define opportunity, Envariax delivers. Our ultra-responsive trading infrastructure executes orders instantly and synchronizes liquidity in real time — so you never miss a move when the market turns.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button 
                size="lg" 
                className="mt-6 bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-50"
              >
                <Icon name="Play" size={18} className="mr-2" />
                Start Trading
              </Button>
            </div>

            <div className="lg:sticky lg:top-32">
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-none shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="font-semibold text-gray-900">Live Trading Dashboard</span>
                    </div>
                    <div className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold flex items-center gap-1">
                      <Icon name="TrendingUp" size={16} />
                      +122%
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 mb-4 shadow-lg">
                    <div className="relative h-64">
                      <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 0 180 Q 50 160, 100 140 T 200 100 T 300 60 T 400 40"
                          fill="url(#chartGradient)"
                          stroke="#10B981"
                          strokeWidth="3"
                        />
                        <circle cx="400" cy="40" r="6" fill="#10B981" />
                      </svg>
                      <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded">
                        BTC
                      </div>
                      <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded">
                        HOLD
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Icon name="Check" size={20} className="text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">Executed <span className="font-bold">BTC/USDT</span> trade</div>
                        <div className="text-sm text-gray-500">2m ago</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-blue-200 rounded-full mb-6">
              <Icon name="Eye" size={18} style={{ color: '#4A90E2' }} />
              <span className="text-sm font-semibold" style={{ color: '#4A90E2' }}>EXPERT TRADERS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#5B6B8C' }}>
              Live Trading Stream
            </h2>
            <p className="text-lg text-gray-600">
              Real-Time Market Insights Powered by Adaptive AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src="https://cdn.poehali.dev/projects/dec2b247-100c-4952-8c09-827ed14bdcb9/files/deeaeda7-1d69-4f4f-8ea0-8811be3c7906.jpg"
                    alt="Ethan Morales"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">Ethan Morales</h3>
                    <p className="text-sm text-gray-600 mb-3">Chief Quantitative Architect</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full">
                      <Icon name="Sparkles" size={14} className="text-green-600" />
                      <span className="text-xs font-semibold text-green-700">AI Market Systems Engineer | Verified</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded">
                  <p className="text-gray-700 italic leading-relaxed">
                    Envariax completely redefined how I interpret market flow. Its predictive intelligence reacts in microseconds — transforming volatility into calculated precision and measurable growth.
                  </p>
                </div>

                <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Start Trading
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src="https://cdn.poehali.dev/projects/dec2b247-100c-4952-8c09-827ed14bdcb9/files/f00d8a1f-3001-4171-94a5-1ea939052c45.jpg"
                    alt="Amelia Kwon"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">Amelia Kwon</h3>
                    <p className="text-sm text-gray-600 mb-3">Director of Global Asset Strategies</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full">
                      <Icon name="Sparkles" size={14} className="text-green-600" />
                      <span className="text-xs font-semibold text-green-700">Data-Driven Investment Analyst | Verified</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded">
                  <p className="text-gray-700 italic leading-relaxed">
                    No platform matches the consistency of Envariax. Every trade executes with algorithmic intent, fluid precision, and a level of stability that reshapes high-speed investing.
                  </p>
                </div>

                <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Start Trading
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <Icon name="Star" size={18} style={{ color: '#4A90E2' }} />
              <span className="text-sm font-semibold" style={{ color: '#4A90E2' }}>TRUSTED PLATFORM</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#5B6B8C' }}>
              How Envariax Is Redefining the Future of Smart Trading?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Step beyond conventional trading boundaries — Envariax unveils a fully adaptive, AI-orchestrated financial environment built for precision, scalability, and complete control across every digital transaction. This isn't just progress — it's intelligent evolution at maximum velocity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                  <Icon name="MapPin" size={36} style={{ color: '#4A90E2' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  AI-Powered Market Cognition
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  At the core of Envariax lies a continuously evolving analytical engine — designed to interpret volatility patterns, forecast directional trends, and uncover emerging profit windows before they materialize. Trade with algorithmic precision powered by intelligence that learns, adapts, and sharpens with every market pulse.
                </p>
                <Button variant="outline" className="w-full text-blue-600 border-blue-200 hover:bg-blue-50">
                  Learn More
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                  <Icon name="Shield" size={36} style={{ color: '#4A90E2' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Fortified Multi-Layer Security Architecture
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  Your capital deserves resilience without compromise. Envariax integrates a multi-level cryptographic defense system enhanced with biometric validation and real-time threat monitoring. Its proactive defense layer identifies anomalies before they escalate — ensuring unwavering institutional-grade protection 24/7.
                </p>
                <Button variant="outline" className="w-full text-blue-600 border-blue-200 hover:bg-blue-50">
                  Learn More
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                  <Icon name="Rocket" size={36} style={{ color: '#4A90E2' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Ultra-Speed Execution Framework
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  In the world of trading, milliseconds define opportunity. Envariax operates on an ultra-responsive, low-latency infrastructure that synchronizes liquidity, accelerates execution, and ensures immediate order fulfillment. When timing meets intelligence, every move becomes a strategic advantage.
                </p>
                <Button variant="outline" className="w-full text-blue-600 border-blue-200 hover:bg-blue-50">
                  Learn More
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Ready to go beyond boundaries? Experience unmatched speed, accuracy, and reliability with Envariax — where autonomous intelligence drives every trade.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-lg font-semibold">
              GET STARTED NOW
              <Icon name="Rocket" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#5B6B8C' }}>
              Active Traders
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trade Smarter, Grow Steadier — Envariax AI empowers investors to achieve consistent performance through intelligent automation and adaptive precision analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://cdn.poehali.dev/projects/dec2b247-100c-4952-8c09-827ed14bdcb9/files/5ed4f10b-2895-4d73-9717-3cd0d34c8b17.jpg"
                    alt="Minseo Park"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-900">Minseo Park</h3>
                      <Icon name="CheckCircle2" size={16} className="text-blue-500" />
                    </div>
                    <p className="text-xs text-gray-500">Daegu, South Korea</p>
                    <p className="text-xs text-gray-400">Nov 3, 2025</p>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={14} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Envariax finally gave automation the control it was missing. Execution feels seamless, and the AI reacts faster than any manual setup I've ever used.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-1">TOTAL EARNINGS</div>
                  <div className="text-3xl font-bold text-green-600">$16 420</div>
                  <div className="text-xs text-gray-500 mt-2">52% (in past level)</div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="ThumbsUp" size={16} />
                    <span>218</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="MessageCircle" size={16} />
                    <span>14</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full text-blue-600 border-blue-200">
                  View Profile
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://cdn.poehali.dev/projects/dec2b247-100c-4952-8c09-827ed14bdcb9/files/9e92b089-0a8a-4ca8-b2bc-21a3292c0651.jpg"
                    alt="Camila Ortega"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-900">Camila Ortega</h3>
                      <Icon name="CheckCircle2" size={16} className="text-blue-500" />
                    </div>
                    <p className="text-xs text-gray-500">Valencia, Spain</p>
                    <p className="text-xs text-gray-400">Oct 27, 2025</p>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4].map(i => <Icon key={i} name="Star" size={14} className="fill-yellow-400 text-yellow-400" />)}
                    <Icon name="Star" size={14} className="text-gray-300" />
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Precision and prediction — that's what Envariax delivers. Its algorithms catch shifts before the charts even reflect them.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-1">TOTAL EARNINGS</div>
                  <div className="text-3xl font-bold text-green-600">$23 580</div>
                  <div className="text-xs text-gray-500 mt-2">85% (in past level)</div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="ThumbsUp" size={16} />
                    <span>97</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="MessageCircle" size={16} />
                    <span>9</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full text-blue-600 border-blue-200">
                  View Profile
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://cdn.poehali.dev/projects/dec2b247-100c-4952-8c09-827ed14bdcb9/files/deeaeda7-1d69-4f4f-8ea0-8811be3c7906.jpg"
                    alt="Henrik Larsen"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-900">Henrik Larsen</h3>
                      <Icon name="CheckCircle2" size={16} className="text-blue-500" />
                    </div>
                    <p className="text-xs text-gray-500">Trondheim, Norway</p>
                    <p className="text-xs text-gray-400">Oct 18, 2025</p>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4].map(i => <Icon key={i} name="Star" size={14} className="fill-yellow-400 text-yellow-400" />)}
                    <Icon name="StarHalf" size={14} className="fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Smooth interface, near-zero delay, and intelligence that grows with me. Envariax understands both the data and the trader behind it.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-1">TOTAL EARNINGS</div>
                  <div className="text-3xl font-bold text-green-600">$15 370</div>
                  <div className="text-xs text-gray-500 mt-2">73% (in past level)</div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="ThumbsUp" size={16} />
                    <span>311</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="MessageCircle" size={16} />
                    <span>12</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full text-blue-600 border-blue-200">
                  View Profile
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://cdn.poehali.dev/projects/dec2b247-100c-4952-8c09-827ed14bdcb9/files/040ea146-b403-4222-b0c1-58aaca9d1d17.jpg"
                    alt="Claire Dubois"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-900">Claire Dubois</h3>
                      <Icon name="CheckCircle2" size={16} className="text-blue-500" />
                    </div>
                    <p className="text-xs text-gray-500">Marseille, France</p>
                    <p className="text-xs text-gray-400">Oct 3, 2025</p>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4].map(i => <Icon key={i} name="Star" size={14} className="fill-yellow-400 text-yellow-400" />)}
                    <Icon name="StarHalf" size={14} className="fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  The automation feels effortless, and the results speak for themselves. Envariax helped me stabilize my portfolio week after week.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-1">TOTAL EARNINGS</div>
                  <div className="text-3xl font-bold text-green-600">$10 280</div>
                  <div className="text-xs text-gray-500 mt-2">68% (in past level)</div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="ThumbsUp" size={16} />
                    <span>126</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="MessageCircle" size={16} />
                    <span>16</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full text-blue-600 border-blue-200">
                  View Profile
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://cdn.poehali.dev/projects/dec2b247-100c-4952-8c09-827ed14bdcb9/files/e74f91e7-8490-4fdc-ac91-73a0857e2550.jpg"
                    alt="Daniel Hughes"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-900">Daniel Hughes</h3>
                      <Icon name="CheckCircle2" size={16} className="text-blue-500" />
                    </div>
                    <p className="text-xs text-gray-500">Leeds, United Kingdom</p>
                    <p className="text-xs text-gray-400">Sep 29, 2025</p>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={14} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Professional design, instant execution, and accuracy that feels surgical. Envariax is built for traders who demand reliability.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-1">TOTAL EARNINGS</div>
                  <div className="text-3xl font-bold text-green-600">$12 190</div>
                  <div className="text-xs text-gray-500 mt-2">81% (in past level)</div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="ThumbsUp" size={16} />
                    <span>766</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="MessageCircle" size={16} />
                    <span>10</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full text-blue-600 border-blue-200">
                  View Profile
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://cdn.poehali.dev/projects/dec2b247-100c-4952-8c09-827ed14bdcb9/files/f00d8a1f-3001-4171-94a5-1ea939052c45.jpg"
                    alt="Matteo Romano"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-900">Matteo Romano</h3>
                      <Icon name="CheckCircle2" size={16} className="text-blue-500" />
                    </div>
                    <p className="text-xs text-gray-500">Milan, Italy</p>
                    <p className="text-xs text-gray-400">Sep 20, 2025</p>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4].map(i => <Icon key={i} name="Star" size={14} className="fill-yellow-400 text-yellow-400" />)}
                    <Icon name="StarHalf" size={14} className="fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Finally, a platform that merges data transparency with real performance. Envariax delivers measurable consistency and absolute trust.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-1">TOTAL EARNINGS</div>
                  <div className="text-3xl font-bold text-green-600">$14 530</div>
                  <div className="text-xs text-gray-500 mt-2">80% (in past level)</div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="ThumbsUp" size={16} />
                    <span>1756</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="MessageCircle" size={16} />
                    <span>11</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full text-blue-600 border-blue-200">
                  View Profile
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Join thousands of investors worldwide who trust Envariax to automate, analyze, and elevate their digital success.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-lg font-semibold">
              JOIN NOW
              <Icon name="Rocket" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <Icon name="Shield" size={18} style={{ color: '#4A90E2' }} />
              <span className="text-sm font-semibold" style={{ color: '#4A90E2' }}>TRUSTED & CERTIFIED</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#5B6B8C' }}>
              Trusted by Professionals Across the Globe
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Over 66,000 active investors depend on Envariax for intelligent, ultra-secure, and performance-optimized trading — built on adaptive AI frameworks and fortified with institutional-grade protection for the modern digital economy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Lock" size={32} style={{ color: '#4A90E2' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quantum-Grade Encryption Framework
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Every Envariax operation runs under next-generation AES-XS20 encryption, delivering absolute confidentiality, zero exposure, and unbreakable transaction integrity.
                </p>
                <div className="px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700">
                  AES-XS20
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Snowflake" size={32} style={{ color: '#4A90E2' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Distributed Cold Vault Infrastructure
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Over 97.8% of user assets are secured in multi-layer offline storage — geographically segmented and fully isolated from online access points.
                </p>
                <div className="px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700">
                  97.8% OFFLINE
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <Icon name="ShieldCheck" size={32} style={{ color: '#4A90E2' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Multi-Layer Bio-Identity Verification
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Envariax integrates biometric validation, adaptive 2FA, and behavioral signature tracking, ensuring airtight account protection on every login and transaction.
                </p>
                <div className="px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700">
                  2FA + BIO-ID
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <Icon name="ShieldAlert" size={32} style={{ color: '#4A90E2' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Autonomous AI Security Grid
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Powered by self-learning defense nodes, Envariax anticipates and neutralizes threats in real time — maintaining 99.999% uptime across all environments through predictive resilience algorithms.
                </p>
                <div className="px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700">
                  99.999% UPTIME
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <Icon name="FileCheck" size={32} style={{ color: '#4A90E2' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Independent Cyber Assurance & Compliance
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  External security audits by global cybersecurity authorities ensure full transparency and compliance with SOC-2, ISO/IEC 27001, and GDPR-grade data integrity standards.
                </p>
                <div className="px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700">
                  VERIFIED & CERTIFIED
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Wallet" size={32} style={{ color: '#4A90E2' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Global Asset Protection Reserve
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Envariax upholds a $210 million protection fund designed to safeguard investors from volatility disruptions, systemic anomalies, or unforeseen macroeconomic shocks.
                </p>
                <div className="px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700">
                  $210M RESERVE
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-10" style={{ color: '#5B6B8C' }}>
              Industry Certifications & Compliance
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    S2
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">SOC 2 Type II</div>
                    <div className="text-sm text-gray-500">Certified</div>
                  </div>
                  <Icon name="CheckCircle2" size={24} className="text-blue-500" />
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    I2
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">ISO/IEC 27001</div>
                    <div className="text-sm text-gray-500">Certified</div>
                  </div>
                  <Icon name="CheckCircle2" size={24} className="text-blue-500" />
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    PD
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">PCI DSS</div>
                    <div className="text-sm text-gray-500">Certified</div>
                  </div>
                  <Icon name="CheckCircle2" size={24} className="text-blue-500" />
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    GC
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">GDPR Compliant</div>
                    <div className="text-sm text-gray-500">Certified</div>
                  </div>
                  <Icon name="CheckCircle2" size={24} className="text-blue-500" />
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Start trading with unmatched security and intelligence
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-lg font-semibold">
              GET STARTED SECURELY
              <Icon name="Shield" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-blue-300 rounded-full mb-6">
              <Icon name="Clock" size={18} style={{ color: '#4A90E2' }} />
              <span className="text-sm font-semibold" style={{ color: '#4A90E2' }}>LIMITED TIME OFFER</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#5B6B8C' }}>
              Join Before This Exclusive Offer Ends
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your Envariax trading journey with exclusive bonuses available only for new members
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 mb-10">
            <Card className="bg-white border-none shadow-xl w-28 h-28 flex items-center justify-center">
              <CardContent className="p-0 text-center">
                <div className="text-5xl font-bold" style={{ color: '#4A90E2' }}>
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-500 uppercase mt-2">Days</div>
              </CardContent>
            </Card>
            <div className="text-3xl font-bold text-gray-400">:</div>
            <Card className="bg-white border-none shadow-xl w-28 h-28 flex items-center justify-center">
              <CardContent className="p-0 text-center">
                <div className="text-5xl font-bold" style={{ color: '#4A90E2' }}>
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-500 uppercase mt-2">Hours</div>
              </CardContent>
            </Card>
            <div className="text-3xl font-bold text-gray-400">:</div>
            <Card className="bg-white border-none shadow-xl w-28 h-28 flex items-center justify-center">
              <CardContent className="p-0 text-center">
                <div className="text-5xl font-bold" style={{ color: '#4A90E2' }}>
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-500 uppercase mt-2">Minutes</div>
              </CardContent>
            </Card>
            <div className="text-3xl font-bold text-gray-400">:</div>
            <Card className="bg-white border-none shadow-xl w-28 h-28 flex items-center justify-center">
              <CardContent className="p-0 text-center">
                <div className="text-5xl font-bold" style={{ color: '#4A90E2' }}>
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-500 uppercase mt-2">Seconds</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 text-lg font-semibold mb-4">
              <Icon name="Zap" size={20} className="mr-2" />
              CLAIM YOUR BONUS NOW
            </Button>
            <div className="flex items-center justify-center gap-2 text-orange-600">
              <Icon name="AlertTriangle" size={18} />
              <span className="text-sm font-semibold">Only 47 spots remaining at this bonus level!</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <Icon name="HelpCircle" size={18} style={{ color: '#4A90E2' }} />
              <span className="text-sm font-semibold" style={{ color: '#4A90E2' }}>FREQUENTLY ASKED</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#5B6B8C' }}>
              FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about Envariax
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-2">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold" style={{ color: '#4A90E2' }}>01</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900 text-left">What Is Envariax and How Does It Work?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 pr-4 pb-4 text-gray-600 leading-relaxed">
                Envariax is an advanced AI-driven trading ecosystem built to automate, optimize, and simplify your entire investment process. It continuously monitors live market behavior, identifies high-probability opportunities, and executes trades with adaptive precision — even when you're offline. The platform evolves in real time, ensuring seamless performance and continuity 24/7.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-2">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold" style={{ color: '#4A90E2' }}>02</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900 text-left">Why Do Investors Choose Platform Over Other Systems?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 pr-4 pb-4 text-gray-600 leading-relaxed">
                Most platforms react — Envariax anticipates. Its neural intelligence blends predictive modeling, algorithmic learning, and adaptive automation to forecast movements before they happen. The result: faster execution, optimized entries, and measurable advantages in fast-changing markets.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-2">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold" style={{ color: '#4A90E2' }}>03</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900 text-left">How Does Envariax Protect My Data and Assets?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 pr-4 pb-4 text-gray-600 leading-relaxed">
                Security forms the backbone of Envariax's infrastructure. Every account is secured through AES-X520 encryption, multi-factor and biometric authentication, and segregated cold storage for the majority of holdings. AI-driven monitoring, independent audits, and international compliance frameworks guarantee full transparency and protection at every layer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-2">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold" style={{ color: '#4A90E2' }}>04</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900 text-left">Is Platform Suitable for Beginners?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 pr-4 pb-4 text-gray-600 leading-relaxed">
                Absolutely. Envariax was designed for every experience level. Step-by-step onboarding, interactive visual analytics, and adaptive AI tutorials guide newcomers with ease — while experienced traders unlock advanced automation and strategic customization to evolve naturally within one unified system.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-2">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold" style={{ color: '#4A90E2' }}>05</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900 text-left">Does Envariax Support Both Short- and Long-Term Strategies?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 pr-4 pb-4 text-gray-600 leading-relaxed">
                Yes. Flexibility is fundamental to Envariax. Whether your focus is on high-frequency scalping or structured portfolio growth, the platform automatically adjusts algorithms, risk parameters, and analytic depth to match your objectives — ensuring consistency and precision across all time horizons.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-2">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold" style={{ color: '#4A90E2' }}>06</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900 text-left">What Kind of Analytics Does Platform Provide?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 pr-4 pb-4 text-gray-600 leading-relaxed">
                The Envariax Insight Suite delivers full-spectrum analysis of your trading activity — including win rates, cumulative returns, exposure ratios, and performance efficiency. Its AI engine translates complex data into clear strategic insights, helping you refine decisions and scale intelligently with every trade.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-200 rounded-full mb-6">
              <Icon name="Globe" size={18} style={{ color: '#4A90E2' }} />
              <span className="text-sm font-semibold" style={{ color: '#4A90E2' }}>GLOBAL TRADING NETWORK</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#5B6B8C' }}>
              Global Presence
            </h2>
            <p className="text-lg text-gray-600">
              Operating in major financial centers worldwide
            </p>
          </div>

          <Card className="bg-white border-none shadow-xl mb-8 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96 bg-gray-100">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${offices[selectedOffice].coordinates.lat},${offices[selectedOffice].coordinates.lng}&zoom=13`}
                />
                <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} style={{ color: '#4A90E2' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{offices[selectedOffice].name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{offices[selectedOffice].city}</p>
                      <p className="text-xs text-gray-500">{offices[selectedOffice].address}</p>
                      <a 
                        href="#" 
                        className="text-xs text-blue-600 hover:underline mt-2 inline-block"
                        onClick={(e) => e.preventDefault()}
                      >
                        View larger map
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {offices.map((office, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  selectedOffice === index 
                    ? 'bg-blue-50 border-2 border-blue-400' 
                    : 'bg-white border border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedOffice(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      selectedOffice === index ? 'bg-blue-500' : 'bg-blue-100'
                    }`}>
                      <Icon 
                        name="MapPin" 
                        size={20} 
                        className={selectedOffice === index ? 'text-white' : 'text-blue-600'}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{office.name}</h3>
                      <p className="text-sm text-gray-500">{office.city}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-600 leading-relaxed">{office.address}</p>
                    <p className="text-gray-500">{office.hours}</p>
                    
                    <div className="flex items-center gap-4 pt-2 border-t border-gray-200">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Icon name="Users" size={14} />
                        <span className="text-xs">{office.staff}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Icon name="Phone" size={14} />
                        <span className="text-xs">{office.phone}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">Envariax</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We are a team of passionate technologists and innovators dedicated to building intelligent solutions that shape the future of business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://cdn.poehali.dev/projects/dec2b247-100c-4952-8c09-827ed14bdcb9/files/43302169-3196-4695-954d-fc73a982da8e.jpg"
              alt="Our Team"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower businesses with AI-driven solutions that enhance efficiency, innovation, and growth.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Eye" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the global leader in AI innovation, creating transformative technologies for tomorrow.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                  <p className="text-muted-foreground">
                    Innovation, integrity, excellence, and customer-centricity drive everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive AI and technology solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Brain',
                title: 'AI Consulting',
                description: 'Strategic guidance on implementing AI solutions that align with your business objectives.'
              },
              {
                icon: 'Code',
                title: 'Custom Development',
                description: 'Bespoke software solutions built with cutting-edge technologies and best practices.'
              },
              {
                icon: 'Database',
                title: 'Data Analytics',
                description: 'Transform raw data into actionable insights with advanced analytics and visualization.'
              },
              {
                icon: 'Cloud',
                title: 'Cloud Solutions',
                description: 'Scalable cloud infrastructure and migration services for modern businesses.'
              },
              {
                icon: 'Shield',
                title: 'Cybersecurity',
                description: 'Protect your digital assets with enterprise-grade security solutions.'
              },
              {
                icon: 'Zap',
                title: 'Automation',
                description: 'Streamline operations with intelligent process automation and workflows.'
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Products</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Innovative AI-powered products designed to revolutionize your workflow.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                icon: 'Cpu',
                title: 'AI Vision Platform',
                description: 'Advanced computer vision solutions for image recognition, object detection, and visual analytics.',
                features: ['Real-time Processing', 'Custom Models', 'API Integration']
              },
              {
                icon: 'MessageSquare',
                title: 'Intelligent Chatbot',
                description: 'Natural language processing powered conversational AI for customer engagement and support.',
                features: ['Multi-language', '24/7 Availability', 'Context Aware']
              }
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 bg-card border-border">
                <CardContent className="p-10">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={product.icon} size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, i) => (
                      <span key={i} className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Learn More
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Latest <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest trends, insights, and news in AI and technology.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'AI Trends',
                title: 'The Future of Generative AI in Enterprise',
                date: 'Nov 15, 2025',
                readTime: '5 min read'
              },
              {
                category: 'Case Study',
                title: 'How We Helped TechCorp Automate 80% of Operations',
                date: 'Nov 12, 2025',
                readTime: '8 min read'
              },
              {
                category: 'Technology',
                title: 'Machine Learning Best Practices for 2025',
                date: 'Nov 8, 2025',
                readTime: '6 min read'
              }
            ].map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/dec2b247-100c-4952-8c09-827ed14bdcb9/files/5b4be636-96f3-4eb3-adc6-990321941b07.jpg"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm font-semibold text-primary mb-2">{post.category}</div>
                  <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to transform your business with AI? Let's start a conversation.
            </p>
          </div>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-background resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Send Message
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold">Envariax</span>
              </div>
              <p className="text-background/70 leading-relaxed">
                Transforming businesses with cutting-edge AI solutions and digital innovation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-background/70 hover:text-background transition-colors">About Us</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Careers</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Partners</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#blog" className="text-background/70 hover:text-background transition-colors">Blog</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Documentation</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Connect</h4>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Icon name="Github" size={20} />
                </a>
              </div>
              <p className="text-background/70 text-sm">
                info@envariax.com<br />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70 text-sm">
            <p>&copy; 2025 Envariax. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;