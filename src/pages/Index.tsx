import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">Envariax</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">Products</a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors font-medium">Blog</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Get Started
            </Button>
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