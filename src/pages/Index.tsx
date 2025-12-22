import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation, languages } from "@/useTranslation";
import type { LanguageCode } from "@/translations";

const Index = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [formStartTime, setFormStartTime] = useState<number | null>(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });
  const [selectedOffice, setSelectedOffice] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>("en");
  const { t } = useTranslation(selectedLanguage);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    countryCode: "US",
    code: "+1",
    name: "United States",
  });
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearchQuery, setCountrySearchQuery] = useState("");

  const countries = [
    { countryCode: "US", code: "+1", name: "United States" },
    { countryCode: "CA", code: "+1", name: "Canada" },
    { countryCode: "MX", code: "+52", name: "Mexico" },
    { countryCode: "JM", code: "+1876", name: "Jamaica" },
    { countryCode: "TT", code: "+1868", name: "Trinidad and Tobago" },
    { countryCode: "BR", code: "+55", name: "Brazil" },
    { countryCode: "AR", code: "+54", name: "Argentina" },
    { countryCode: "CL", code: "+56", name: "Chile" },
    { countryCode: "GB", code: "+44", name: "United Kingdom" },
    { countryCode: "IE", code: "+353", name: "Ireland" },
    { countryCode: "FR", code: "+33", name: "France" },
    { countryCode: "DE", code: "+49", name: "Germany" },
    { countryCode: "ES", code: "+34", name: "Spain" },
    { countryCode: "IT", code: "+39", name: "Italy" },
    { countryCode: "NL", code: "+31", name: "Netherlands" },
    { countryCode: "BE", code: "+32", name: "Belgium" },
    { countryCode: "CH", code: "+41", name: "Switzerland" },
    { countryCode: "AT", code: "+43", name: "Austria" },
    { countryCode: "NO", code: "+47", name: "Norway" },
    { countryCode: "SE", code: "+46", name: "Sweden" },
    { countryCode: "DK", code: "+45", name: "Denmark" },
    { countryCode: "FI", code: "+358", name: "Finland" },
    { countryCode: "PL", code: "+48", name: "Poland" },
    { countryCode: "RU", code: "+7", name: "Russia" },
    { countryCode: "JP", code: "+81", name: "Japan" },
    { countryCode: "KR", code: "+82", name: "South Korea" },
    { countryCode: "CN", code: "+86", name: "China" },
    { countryCode: "IN", code: "+91", name: "India" },
    { countryCode: "AU", code: "+61", name: "Australia" },
    { countryCode: "NZ", code: "+64", name: "New Zealand" },
    { countryCode: "SG", code: "+65", name: "Singapore" },
    { countryCode: "MY", code: "+60", name: "Malaysia" },
    { countryCode: "TH", code: "+66", name: "Thailand" },
    { countryCode: "PH", code: "+63", name: "Philippines" },
    { countryCode: "ID", code: "+62", name: "Indonesia" },
    { countryCode: "VN", code: "+84", name: "Vietnam" },
    { countryCode: "AE", code: "+971", name: "United Arab Emirates" },
    { countryCode: "SA", code: "+966", name: "Saudi Arabia" },
    { countryCode: "ZA", code: "+27", name: "South Africa" },
  ];

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(countrySearchQuery.toLowerCase()) ||
      country.code.includes(countrySearchQuery),
  );

  const offices = [
    {
      name: "Global Headquarters",
      city: "Washington, DC, USA",
      address: "Easy Offices, 1200 G Street, NW, Suite 800, 20005",
      hours: "Mon-Fri: 9AM-6PM EST",
      staff: "250+ Staff",
      phone: "+1 (469) 868 4562",
      coordinates: { lat: 38.8977, lng: -77.0365 },
    },
    {
      name: "Ireland Office",
      city: "Dublin, Ireland",
      address: "Lis Cara Business Centre, Fitzwilliam Square, Dublin 2",
      hours: "Mon-Fri: 9AM-6PM GMT",
      staff: "150+ Staff",
      phone: "+353 1 231 4600",
      coordinates: { lat: 53.3376, lng: -6.2522 },
    },
    {
      name: "United Kingdom Office",
      city: "London, United Kingdom",
      address:
        "The London Office, 167-169 Great Portland Street, 5th Floor, London W1W 5PF",
      hours: "Mon-Fri: 9AM-6PM GMT",
      staff: "100+ Staff",
      phone: "+44 (0) 20 7183 3787",
      coordinates: { lat: 51.5224, lng: -0.142 },
    },
    {
      name: "Germany Office",
      city: "Berlin, Germany",
      address: "Alexanderstraße 3-7, 10117 Berlin",
      hours: "Mon-Fri: 9AM-6PM CET",
      staff: "100+ Staff",
      phone: "+49 30 7001 4820",
      coordinates: { lat: 52.5228, lng: 13.4124 },
    },
    {
      name: "France Office",
      city: "Paris, France",
      address:
        "Business Centre 10 Rue de la Paix, 10 Rue de la Paix, 75002 Paris",
      hours: "Mon-Fri: 9AM-6PM CET",
      staff: "75+ Staff",
      phone: "+33 1 45 67 89 10",
      coordinates: { lat: 48.8692, lng: 2.3317 },
    },
    {
      name: "Spain Office",
      city: "Barcelona, Spain",
      address: "Vivendi Business Center, C/ de París 45-47, 08029 Barcelona",
      hours: "Mon-Fri: 9AM-6PM CET",
      staff: "80+ Staff",
      phone: "+34 931 602 555",
      coordinates: { lat: 41.3936, lng: 2.1464 },
    },
    {
      name: "Italy Office",
      city: "Rome, Italy",
      address: "Eur Business District, Viale Europa, 39, 00144 Rome",
      hours: "Mon-Fri: 9AM-6PM CET",
      staff: "70+ Staff",
      phone: "+39 06 594 7101",
      coordinates: { lat: 41.8338, lng: 12.4738 },
    },
    {
      name: "Netherlands Office",
      city: "Amsterdam, Netherlands",
      address: "ESC Amsterdam, Keizersgracht 62-64, 1015 CS Amsterdam",
      hours: "Mon-Fri: 9AM-6PM CET",
      staff: "60+ Staff",
      phone: "+31 (0)20 520 7000",
      coordinates: { lat: 52.3738, lng: 4.891 },
    },
    {
      name: "Norway Office",
      city: "Oslo, Norway",
      address: "Regus C.J. Hambros Plass 2C, C.J. Hambros Plass 2C, 0164 Oslo",
      hours: "Mon-Fri: 9AM-6PM CET",
      staff: "40+ Staff",
      phone: "+47 22 99 60 00",
      coordinates: { lat: 59.9127, lng: 10.7461 },
    },
    {
      name: "Switzerland Office",
      city: "Zurich, Switzerland",
      address:
        "Regus Business Center Zurich Bahnhofstrasse, Bahnhofstrasse 98/100, 8001 Zürich",
      hours: "Mon-Fri: 9AM-6PM CET",
      staff: "35+ Staff",
      phone: "+064 562 70 70",
      coordinates: { lat: 47.3769, lng: 8.5417 },
    },
    {
      name: "Austria Office",
      city: "Vienna, Austria",
      address: "Green Business Center Wien GmbH, Liebenstraße 122, 1110 Wien",
      hours: "Mon-Fri: 9AM-6PM CET",
      staff: "60+ Staff",
      phone: "+0800 400 41",
      coordinates: { lat: 48.2082, lng: 16.3738 },
    },
    {
      name: "Malaysia Office",
      city: "Kuala Lumpur, Malaysia",
      address:
        "Plaza Sentral Business Centre, Level 15, Block 1B, Plaza Sentral, Jalan Stesen Sentral 5, 50470 Kuala Lumpur",
      hours: "Mon-Fri: 9AM-6PM MYT",
      staff: "120+ Staff",
      phone: "+60 3 9236 1111",
      coordinates: { lat: 3.1337, lng: 101.6869 },
    },
    {
      name: "Japan Office",
      city: "Tokyo, Japan",
      address:
        "Business Development Center TOKYO, 2-7-2 Marunouchi, Chiyoda-ku, Tokyo 100-7020",
      hours: "Mon-Fri: 9AM-6PM JST",
      staff: "90+ Staff",
      phone: "+81-3-6269-9981",
      coordinates: { lat: 35.6812, lng: 139.7671 },
    },
    {
      name: "Korea Office",
      city: "Seoul, South Korea",
      address: "The Offices Seoul – Yeouido District, Yeouido District",
      hours: "Mon-Fri: 9AM-6PM KST",
      staff: "65+ Staff",
      phone: "+82 2 3784 5000",
      coordinates: { lat: 37.5219, lng: 126.9245 },
    },
    {
      name: "India Office",
      city: "New Delhi, India",
      address: "World Trade Center, Babar Road, Connaught Place, New Delhi",
      hours: "Mon-Fri: 9AM-6PM IST",
      staff: "85+ Staff",
      phone: "+91 11 41307979",
      coordinates: { lat: 28.6289, lng: 77.2065 },
    },
    {
      name: "Australia Office",
      city: "Melbourne, Australia",
      address:
        "Melbourne Business Centre, Ground Floor 470 St Kilda Road, Melbourne VIC 3004",
      hours: "Mon-Fri: 9AM-6PM AEDT",
      staff: "55+ Staff",
      phone: "+1800 181 182",
      coordinates: { lat: -37.8497, lng: 144.9789 },
    },
    {
      name: "Canada Office",
      city: "Toronto, Canada",
      address:
        "The Professional Centre – Business Centre, 120 Adelaide St W, Suite 2500, Toronto ON M5H 1T1",
      hours: "Mon-Fri: 9AM-6PM EST",
      staff: "45+ Staff",
      phone: "+1 416 367-1055",
      coordinates: { lat: 43.6532, lng: -79.3832 },
    },
    {
      name: "Russia Office",
      city: "Moscow, Russia",
      address: "Moscow, Presnenskaya embankment st., 6, DC Moscow City",
      hours: "Mon-Fri: 9AM-6PM MSK",
      staff: "50+ Staff",
      phone: "+495 748 50 52",
      coordinates: { lat: 55.749, lng: 37.5388 },
    },
  ];

  useEffect(() => {
    const getOrCreateEndTime = () => {
      const stored = localStorage.getItem("zyverium_offer_end");
      if (stored) {
        return parseInt(stored);
      }
      const endTime = Date.now() + 7 * 24 * 60 * 60 * 1000;
      localStorage.setItem("zyverium_offer_end", endTime.toString());
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

  useEffect(() => {
    const detectCountryByIP = async () => {
      const apis = [
        {
          url: "https://ipapi.co/json/",
          getCode: (data: any) => data.country_code,
        },
        {
          url: "https://get.geojs.io/v1/ip/country.json",
          getCode: (data: any) => data.country,
        },
        {
          url: "https://api.country.is/",
          getCode: (data: any) => data.country,
        },
      ];

      for (const api of apis) {
        try {
          const response = await fetch(api.url, {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          });

          if (!response.ok) {
            console.log(`API ${api.url} failed with status ${response.status}`);
            continue;
          }

          const data = await response.json();
          const detectedCountryCode = api.getCode(data);

          if (!detectedCountryCode) {
            console.log(`No country code from ${api.url}`);
            continue;
          }

          const matchedCountry = countries.find(
            (country) =>
              country.countryCode.toLowerCase() ===
              detectedCountryCode.toLowerCase(),
          );

          if (matchedCountry) {
            console.log(
              `✅ Detected country: ${matchedCountry.name} (${matchedCountry.countryCode})`,
            );
            setSelectedCountry(matchedCountry);
            return;
          } else {
            console.log(`Country code ${detectedCountryCode} not in our list`);
          }
        } catch (error) {
          console.log(`Failed to fetch from ${api.url}:`, error);
          continue;
        }
      }

      console.log("⚠️ All geolocation APIs failed, using default US");
    };

    detectCountryByIP();
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById("join-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToFAQ = () => {
    const faqSection = document.getElementById("faq");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
  };

  const isFormValid =
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    email.trim() !== "" &&
    phone.trim() !== "";

  const handleJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid || isFormSubmitted) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Get IP from Cloudflare header (most reliable)
      const userIp = "Not available";
      
      // Use selected country data
      const detectedCountryCode = selectedCountry.countryCode;
      const detectedCountryName = selectedCountry.name;

      let isSpam = false;
      let spamReason = "";

      if (honeypot !== "") {
        console.log("Bot detected via honeypot");
        isSpam = true;
        spamReason = "Honeypot field filled";
      }

      if (formStartTime) {
        const timeTaken = Date.now() - formStartTime;
        if (timeTaken < 3000) {
          console.log("Form submitted too quickly:", timeTaken, "ms");
          isSpam = true;
          spamReason = spamReason ? `${spamReason}, Fast submission (${timeTaken}ms)` : `Fast submission (${timeTaken}ms)`;
        }
      }

      const payload = {
        firstName,
        lastName,
        email,
        phone,
        experience: "Not specified",
        message: "",
        countryCode: detectedCountryCode,
        countryName: detectedCountryName,
        ipAddress: userIp,
        honeypot,
        isSpam,
        spamReason,
      };
      
      console.log("=== VERSION 2025-12-22-20:45 ===");
      console.log("Sending to backend:", payload);
      console.log("selectedCountry:", selectedCountry);
      
      const response = await fetch(
        "https://functions.poehali.dev/cd2bcaff-b8c8-4c3e-b0e7-6ad1796e1cf4?v=2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setIsFormSubmitted(true);
        setSubmitMessage(t.hero.successMessage);
      } else {
        if (response.status === 429) {
          setSubmitMessage("Too many requests. Please try again later.");
        } else if (data.error && data.error.includes("already been registered")) {
          setSubmitMessage(t.hero.duplicatePhoneError);
        } else {
          setSubmitMessage(data.error || t.hero.errorMessage);
        }
      }
    } catch (error) {
      setSubmitMessage(t.hero.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn.poehali.dev/files/204f6091-1497-458b-9605-6b56e10eecb0.png"
                alt="Mexvorin Logo"
                className="w-7 h-7 md:w-8 md:h-8 object-contain"
              />
              <span className="text-lg md:text-xl font-bold text-gray-900">
                Mexvorin
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {t.nav.home}
              </a>
              <button
                onClick={scrollToFAQ}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {t.nav.faq}
              </button>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <img
                    src={`https://flagcdn.com/24x18/${languages.find((l) => l.code === selectedLanguage)?.countryCode.toLowerCase()}.png`}
                    alt={
                      languages.find((l) => l.code === selectedLanguage)?.name
                    }
                    className="w-5 h-4 md:w-6 md:h-4 object-cover rounded"
                  />
                  <span className="font-medium text-sm md:text-base hidden sm:inline">
                    {languages.find((l) => l.code === selectedLanguage)?.name}
                  </span>
                  <Icon
                    name="ChevronDown"
                    size={14}
                    className="md:w-4 md:h-4"
                  />
                </button>

                {isLangDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden max-h-96 overflow-y-auto z-50">
                    {languages.map((lang, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedLanguage(lang.code as LanguageCode);
                          setIsLangDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors text-left"
                      >
                        <img
                          src={`https://flagcdn.com/24x18/${lang.countryCode.toLowerCase()}.png`}
                          alt={lang.name}
                          className="w-6 h-4 object-cover rounded"
                        />
                        <span className="font-medium text-gray-900">
                          {lang.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Button
                onClick={scrollToForm}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 md:px-6 py-2 rounded-lg text-sm md:text-base whitespace-nowrap"
              >
                {t.nav.getStarted}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 animate-fade-in">
              <div
                className="text-4xl font-bold tracking-wider"
                style={{ color: "#4A90E2" }}
              >
                Mexvorin
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                {t.hero.title}
              </h1>
              <div className="text-5xl font-bold" style={{ color: "#4A90E2" }}>
                {t.hero.volume}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.hero.description}
              </p>
              <Card className="bg-white/90 border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon
                      name="Star"
                      className="fill-yellow-400 text-yellow-400"
                      size={24}
                    />
                    <Icon
                      name="Star"
                      className="fill-yellow-400 text-yellow-400"
                      size={24}
                    />
                    <Icon
                      name="Star"
                      className="fill-yellow-400 text-yellow-400"
                      size={24}
                    />
                    <Icon
                      name="Star"
                      className="fill-yellow-400 text-yellow-400"
                      size={24}
                    />
                    <Icon
                      name="Star"
                      className="fill-yellow-400 text-yellow-400"
                      size={24}
                    />
                    <span
                      className="text-xl font-bold ml-2"
                      style={{ color: "#4A90E2" }}
                    >
                      {t.hero.rating}
                    </span>
                  </div>
                  <p className="text-center text-sm text-gray-600">
                    {t.hero.reviews}
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card
              id="join-form"
              className="bg-white/95 backdrop-blur-sm border-none shadow-2xl"
            >
              <CardContent className="p-8">
                {isFormSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                      <Icon name="Check" size={48} className="text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">
                      {t.hero.successMessage}
                    </h2>
                    <p className="text-gray-600 text-center">
                      We will contact you soon
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-center mb-6">
                      {t.hero.formTitle}
                    </h2>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div
                          className="text-3xl font-bold"
                          style={{ color: "#4A90E2" }}
                        >
                          1200
                        </div>
                        <div className="text-sm text-gray-600">
                          {t.hero.trustedMembers}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div
                          className="text-3xl font-bold"
                          style={{ color: "#4A90E2" }}
                        >
                          700
                        </div>
                        <div className="text-sm text-gray-600">
                          {t.hero.activeInvestors}
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleJoinSubmit} className="space-y-4">
                      <input
                        type="text"
                        name="website"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                      />
                      <Input
                        placeholder={t.hero.firstName}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        onFocus={() => {
                          if (!formStartTime) {
                            setFormStartTime(Date.now());
                          }
                        }}
                        required
                        className="h-14 bg-gray-50 border-gray-200"
                      />
                      <Input
                        placeholder={t.hero.lastName}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="h-14 bg-gray-50 border-gray-200"
                      />
                      <Input
                        type="email"
                        placeholder={t.hero.email}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-14 bg-gray-50 border-gray-200"
                      />
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          {t.hero.phone}
                        </label>
                        <div className="flex gap-2">
                          <div className="relative">
                            <button
                              type="button"
                              onClick={() =>
                                setIsCountryDropdownOpen(!isCountryDropdownOpen)
                              }
                              className="flex items-center gap-2 px-3 h-14 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors"
                            >
                              <img
                                src={`https://flagcdn.com/24x18/${selectedCountry.countryCode.toLowerCase()}.png`}
                                alt={selectedCountry.name}
                                className="w-6 h-4 object-cover rounded"
                              />
                              <span className="text-sm font-medium">
                                {selectedCountry.code}
                              </span>
                              <Icon
                                name="ChevronDown"
                                size={16}
                                className="text-gray-500"
                              />
                            </button>

                            {isCountryDropdownOpen && (
                              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                                <div className="p-3 border-b border-gray-200">
                                  <Input
                                    placeholder="Search countries..."
                                    value={countrySearchQuery}
                                    onChange={(e) =>
                                      setCountrySearchQuery(e.target.value)
                                    }
                                    className="h-10 bg-gray-50 border-gray-200"
                                  />
                                </div>
                                <div className="max-h-64 overflow-y-auto">
                                  {filteredCountries.map((country, index) => (
                                    <button
                                      key={index}
                                      type="button"
                                      onClick={() => {
                                        setSelectedCountry(country);
                                        setIsCountryDropdownOpen(false);
                                        setCountrySearchQuery("");
                                      }}
                                      className="w-full flex items-center justify-between px-4 py-3 hover:bg-blue-50 transition-colors text-left"
                                    >
                                      <div className="flex items-center gap-3">
                                        <img
                                          src={`https://flagcdn.com/24x18/${country.countryCode.toLowerCase()}.png`}
                                          alt={country.name}
                                          className="w-6 h-4 object-cover rounded"
                                        />
                                        <span className="text-sm font-medium text-gray-900">
                                          {country.name}
                                        </span>
                                      </div>
                                      <span className="text-sm text-gray-500 font-medium">
                                        {country.code}
                                      </span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                          <Input
                            type="tel"
                            placeholder="(201) 555-0123"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="h-14 bg-gray-50 border-gray-200 flex-1"
                          />
                        </div>
                      </div>
                      {submitMessage && !submitMessage.includes("✅") && (
                        <div className="p-4 rounded-lg text-center font-medium bg-red-50 text-red-700 border border-red-200">
                          {submitMessage}
                        </div>
                      )}
                      <Button
                        type="submit"
                        disabled={isSubmitting || !isFormValid}
                        className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 hover:opacity-90 border-none disabled:opacity-50"
                      >
                        {isSubmitting ? t.hero.submitting : t.hero.submit}
                      </Button>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2
            className="text-4xl lg:text-5xl font-bold text-center mb-6"
            style={{ color: "#5B6B8C" }}
          >
            {t.whyChoose.title}
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            {t.whyChoose.description}
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
                        {t.whyChoose.feature1Title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t.whyChoose.feature1Desc}
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
                        {t.whyChoose.feature2Title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t.whyChoose.feature2Desc}
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
                        {t.whyChoose.feature3Title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t.whyChoose.feature3Desc}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button
                size="lg"
                onClick={scrollToForm}
                className="mt-6 bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-50"
              >
                <Icon name="Play" size={18} className="mr-2" />
                {t.whyChoose.startTrading}
              </Button>
            </div>

            <div className="lg:sticky lg:top-32">
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                          <div className="absolute inset-0 w-2.5 h-2.5 bg-white rounded-full animate-ping opacity-75" />
                        </div>
                        <span className="font-bold text-white text-lg">
                          Live Trading Dashboard
                        </span>
                      </div>
                      <div className="px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold flex items-center gap-1.5">
                        <Icon name="TrendingUp" size={16} />
                        +122%
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6">
                    <div className="relative h-64 bg-gradient-to-b from-gray-50 to-white rounded-xl p-4 border border-gray-100">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 400 200"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id="chartGradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#10B981"
                              stopOpacity="0.4"
                            />
                            <stop
                              offset="100%"
                              stopColor="#10B981"
                              stopOpacity="0.02"
                            />
                          </linearGradient>
                          <filter id="glow">
                            <feGaussianBlur
                              stdDeviation="2"
                              result="coloredBlur"
                            />
                            <feMerge>
                              <feMergeNode in="coloredBlur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        </defs>

                        <path
                          d="M 0 180 L 20 175 L 40 170 L 60 168 L 80 160 L 100 155 L 120 145 L 140 140 L 160 130 L 180 120 L 200 110 L 220 100 L 240 85 L 260 75 L 280 65 L 300 55 L 320 48 L 340 42 L 360 38 L 380 35 L 400 32 L 400 200 L 0 200 Z"
                          fill="url(#chartGradient)"
                        />

                        <path
                          d="M 0 180 L 20 175 L 40 170 L 60 168 L 80 160 L 100 155 L 120 145 L 140 140 L 160 130 L 180 120 L 200 110 L 220 100 L 240 85 L 260 75 L 280 65 L 300 55 L 320 48 L 340 42 L 360 38 L 380 35 L 400 32"
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          filter="url(#glow)"
                        >
                          <animate
                            attributeName="stroke-dasharray"
                            from="0,1000"
                            to="1000,0"
                            dur="2s"
                            fill="freeze"
                          />
                        </path>

                        <circle cx="400" cy="32" r="5" fill="#10B981">
                          <animate
                            attributeName="r"
                            values="5;7;5"
                            dur="1.5s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="1;0.7;1"
                            dur="1.5s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        <circle
                          cx="400"
                          cy="32"
                          r="8"
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="2"
                          opacity="0.5"
                        >
                          <animate
                            attributeName="r"
                            values="8;12;8"
                            dur="1.5s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="0.5;0;0.5"
                            dur="1.5s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      </svg>

                      <div className="absolute top-4 left-4 px-3 py-1.5 bg-blue-500 text-white text-xs font-bold rounded-md shadow-lg">
                        BTC
                      </div>
                      <div className="absolute top-4 right-4 px-3 py-1.5 bg-yellow-400 text-gray-900 text-xs font-bold rounded-md shadow-lg">
                        HOLD
                      </div>

                      <div className="absolute bottom-4 left-4 text-xs text-gray-500 font-mono">
                        00:00
                      </div>
                      <div className="absolute bottom-4 right-4 text-xs text-gray-500 font-mono">
                        24:00
                      </div>
                    </div>

                    <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                          <Icon
                            name="CheckCircle2"
                            size={20}
                            className="text-white"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900">
                            {t.liveTrading.executedTrade}
                          </div>
                          <div className="text-sm text-gray-600">
                            2m {t.liveTrading.ago}
                          </div>
                        </div>
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
              <Icon name="Eye" size={18} style={{ color: "#4A90E2" }} />
              <span
                className="text-sm font-semibold"
                style={{ color: "#4A90E2" }}
              >
                {t.liveTrading.badge}
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#5B6B8C" }}
            >
              {t.liveTrading.title}
            </h2>
            <p className="text-lg text-gray-600">{t.liveTrading.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src="https://cdn.poehali.dev/projects/dec2b247-100c-4952-8c09-827ed14bdcb9/files/deeaeda7-1d69-4f4f-8ea0-8811be3c7906.jpg"
                    alt="Ethan Morales - Mexvorin Chief Quantitative Architect"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      Ethan Morales
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Chief Quantitative Architect
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full">
                      <Icon
                        name="Sparkles"
                        size={14}
                        className="text-green-600"
                      />
                      <span className="text-xs font-semibold text-green-700">
                        AI Market Systems Engineer | Verified
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded">
                  <p className="text-gray-700 italic leading-relaxed">
                    Mexvorin completely redefined how I interpret market flow.
                    Its predictive intelligence reacts in microseconds -
                    transforming volatility into calculated precision and
                    measurable growth.
                  </p>
                </div>

                <Button
                  onClick={scrollToForm}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                >
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
                    alt="Amelia Kwon - Mexvorin Director of Global Asset Strategies"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      Amelia Kwon
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Director of Global Asset Strategies
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full">
                      <Icon
                        name="Sparkles"
                        size={14}
                        className="text-green-600"
                      />
                      <span className="text-xs font-semibold text-green-700">
                        Data-Driven Investment Analyst | Verified
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded">
                  <p className="text-gray-700 italic leading-relaxed">
                    No platform matches the consistency of Mexvorin. Every
                    trade executes with algorithmic intent, fluid precision, and
                    a level of stability that reshapes high-speed investing.
                  </p>
                </div>

                <Button
                  onClick={scrollToForm}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                >
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
              <Icon name="Star" size={18} style={{ color: "#4A90E2" }} />
              <span
                className="text-sm font-semibold"
                style={{ color: "#4A90E2" }}
              >
                {t.features.badge}
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "#5B6B8C" }}
            >
              {t.features.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.features.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                  <Icon name="Shield" size={36} style={{ color: "#4A90E2" }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {t.features.feature1Title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  {t.features.feature1Desc}
                </p>
                <Button
                  variant="outline"
                  className="w-full text-blue-600 border-blue-200 hover:bg-blue-50"
                >
                  {t.features.learnMore}
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                  <Icon name="Rocket" size={36} style={{ color: "#4A90E2" }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {t.features.feature2Title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  {t.features.feature2Desc}
                </p>
                <Button
                  variant="outline"
                  className="w-full text-blue-600 border-blue-200 hover:bg-blue-50"
                >
                  {t.features.learnMore}
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              {t.features.ctaText}
            </p>
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-lg font-semibold"
            >
              {t.features.getStartedNow}
              <Icon name="Rocket" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#5B6B8C" }}
            >
              {t.activeTraders.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.activeTraders.description}
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
                      <Icon
                        name="CheckCircle2"
                        size={16}
                        className="text-blue-500"
                      />
                    </div>
                    <p className="text-xs text-gray-500">Daegu, South Korea</p>
                    <p className="text-xs text-gray-400">Nov 3, 2025</p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Mexvorin finally gave automation the control it was missing.
                  Execution feels seamless, and the AI reacts faster than any
                  manual setup I've ever used.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-1">
                    {t.activeTraders.totalEarnings}
                  </div>
                  <div className="text-3xl font-bold text-green-600">
                    $16 420
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    52% ({t.activeTraders.pastLevel})
                  </div>
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
                <Button
                  onClick={scrollToForm}
                  variant="outline"
                  className="w-full text-blue-600 border-blue-200"
                >
                  {t.activeTraders.viewProfile}
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
                      <Icon
                        name="CheckCircle2"
                        size={16}
                        className="text-blue-500"
                      />
                    </div>
                    <p className="text-xs text-gray-500">Valencia, Spain</p>
                    <p className="text-xs text-gray-400">Oct 27, 2025</p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <Icon name="Star" size={14} className="text-gray-300" />
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Precision and prediction - that's what Mexvorin delivers. Its
                  algorithms catch shifts before the charts even reflect them.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-1">
                    {t.activeTraders.totalEarnings}
                  </div>
                  <div className="text-3xl font-bold text-green-600">
                    $23 580
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    85% ({t.activeTraders.pastLevel})
                  </div>
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
                <Button
                  onClick={scrollToForm}
                  variant="outline"
                  className="w-full text-blue-600 border-blue-200"
                >
                  {t.activeTraders.viewProfile}
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
                      <Icon
                        name="CheckCircle2"
                        size={16}
                        className="text-blue-500"
                      />
                    </div>
                    <p className="text-xs text-gray-500">Trondheim, Norway</p>
                    <p className="text-xs text-gray-400">Oct 18, 2025</p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <Icon
                      name="StarHalf"
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Smooth interface, near-zero delay, and intelligence that grows
                  with me. Mexvorin understands both the data and the trader
                  behind it.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-1">
                    {t.activeTraders.totalEarnings}
                  </div>
                  <div className="text-3xl font-bold text-green-600">
                    $15 370
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    73% (in past level)
                  </div>
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
                <Button
                  onClick={scrollToForm}
                  variant="outline"
                  className="w-full text-blue-600 border-blue-200"
                >
                  {t.activeTraders.viewProfile}
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
                      <Icon
                        name="CheckCircle2"
                        size={16}
                        className="text-blue-500"
                      />
                    </div>
                    <p className="text-xs text-gray-500">Marseille, France</p>
                    <p className="text-xs text-gray-400">Oct 3, 2025</p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <Icon
                      name="StarHalf"
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  The automation feels effortless, and the results speak for
                  themselves. Mexvorin helped me stabilize my portfolio week
                  after week.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-1">
                    {t.activeTraders.totalEarnings}
                  </div>
                  <div className="text-3xl font-bold text-green-600">
                    $10 280
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    68% ({t.activeTraders.pastLevel})
                  </div>
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
                <Button
                  onClick={scrollToForm}
                  variant="outline"
                  className="w-full text-blue-600 border-blue-200"
                >
                  {t.activeTraders.viewProfile}
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
                      <Icon
                        name="CheckCircle2"
                        size={16}
                        className="text-blue-500"
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      Leeds, United Kingdom
                    </p>
                    <p className="text-xs text-gray-400">Sep 29, 2025</p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Professional design, instant execution, and accuracy that
                  feels surgical. Mexvorin is built for traders who demand
                  reliability.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-1">
                    {t.activeTraders.totalEarnings}
                  </div>
                  <div className="text-3xl font-bold text-green-600">
                    $12 190
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    81% (in past level)
                  </div>
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
                <Button
                  onClick={scrollToForm}
                  variant="outline"
                  className="w-full text-blue-600 border-blue-200"
                >
                  {t.activeTraders.viewProfile}
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
                      <Icon
                        name="CheckCircle2"
                        size={16}
                        className="text-blue-500"
                      />
                    </div>
                    <p className="text-xs text-gray-500">Milan, Italy</p>
                    <p className="text-xs text-gray-400">Sep 20, 2025</p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <Icon
                      name="StarHalf"
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Finally, a platform that merges data transparency with real
                  performance. Mexvorin delivers measurable consistency and
                  absolute trust.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-4">
                  <div className="text-xs text-gray-500 mb-1">
                    {t.activeTraders.totalEarnings}
                  </div>
                  <div className="text-3xl font-bold text-green-600">
                    $14 530
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    80% ({t.activeTraders.pastLevel})
                  </div>
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
                <Button
                  onClick={scrollToForm}
                  variant="outline"
                  className="w-full text-blue-600 border-blue-200"
                >
                  {t.activeTraders.viewProfile}
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              {t.activeTraders.joinText}
            </p>
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-lg font-semibold"
            >
              {t.activeTraders.joinNow}
              <Icon name="Rocket" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <Icon name="Shield" size={18} style={{ color: "#4A90E2" }} />
              <span
                className="text-sm font-semibold"
                style={{ color: "#4A90E2" }}
              >
                {t.security.badge}
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "#5B6B8C" }}
            >
              {t.security.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.security.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Lock" size={32} style={{ color: "#4A90E2" }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quantum-Grade Encryption Framework
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Every Olutrixon operation runs under next-generation AES-XS20
                  encryption, delivering absolute confidentiality, zero
                  exposure, and unbreakable transaction integrity.
                </p>
                <div className="px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700">
                  AES-XS20
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <Icon
                    name="Snowflake"
                    size={32}
                    style={{ color: "#4A90E2" }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Distributed Cold Vault Infrastructure
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Over 97.8% of user assets are secured in multi-layer offline
                  storage - geographically segmented and fully isolated from
                  online access points.
                </p>
                <div className="px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700">
                  97.8% OFFLINE
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <Icon
                    name="ShieldCheck"
                    size={32}
                    style={{ color: "#4A90E2" }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Multi-Layer Bio-Identity Verification
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Olutrixon integrates biometric validation, adaptive 2FA, and
                  behavioral signature tracking, ensuring airtight account
                  protection on every login and transaction.
                </p>
                <div className="px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700">
                  2FA + BIO-ID
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <Icon
                    name="ShieldAlert"
                    size={32}
                    style={{ color: "#4A90E2" }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Autonomous AI Security Grid
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Powered by self-learning defense nodes, Olutrixon anticipates
                  and neutralizes threats in real time - maintaining 99.999%
                  uptime across all environments through predictive resilience
                  algorithms.
                </p>
                <div className="px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700">
                  99.999% UPTIME
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <Icon
                    name="FileCheck"
                    size={32}
                    style={{ color: "#4A90E2" }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Independent Cyber Assurance & Compliance
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  External security audits by global cybersecurity authorities
                  ensure full transparency and compliance with SOC-2, ISO/IEC
                  27001, and GDPR-grade data integrity standards.
                </p>
                <div className="px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700">
                  VERIFIED & CERTIFIED
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Wallet" size={32} style={{ color: "#4A90E2" }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Global Asset Protection Reserve
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Olutrixon upholds a $210 million protection fund designed to
                  safeguard investors from volatility disruptions, systemic
                  anomalies, or unforeseen macroeconomic shocks.
                </p>
                <div className="px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700">
                  $210M RESERVE
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h3
              className="text-3xl font-bold text-center mb-10"
              style={{ color: "#5B6B8C" }}
            >
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
                  <Icon
                    name="CheckCircle2"
                    size={24}
                    className="text-blue-500"
                  />
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
                  <Icon
                    name="CheckCircle2"
                    size={24}
                    className="text-blue-500"
                  />
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
                  <Icon
                    name="CheckCircle2"
                    size={24}
                    className="text-blue-500"
                  />
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    GC
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">
                      GDPR Compliant
                    </div>
                    <div className="text-sm text-gray-500">Certified</div>
                  </div>
                  <Icon
                    name="CheckCircle2"
                    size={24}
                    className="text-blue-500"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Start trading with unmatched security and intelligence
            </p>
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-lg font-semibold"
            >
              {t.security.getStartedSecurely}
              <Icon name="Shield" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-blue-300 rounded-full mb-6">
              <Icon name="Clock" size={18} style={{ color: "#4A90E2" }} />
              <span
                className="text-sm font-semibold"
                style={{ color: "#4A90E2" }}
              >
                {t.timer.badge}
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "#5B6B8C" }}
            >
              {t.timer.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.timer.description}
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 mb-10">
            <Card className="bg-white border-none shadow-xl w-28 h-28 flex items-center justify-center">
              <CardContent className="p-0 text-center">
                <div
                  className="text-5xl font-bold"
                  style={{ color: "#4A90E2" }}
                >
                  {timeLeft.days.toString().padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-500 uppercase mt-2">
                  {t.timer.days}
                </div>
              </CardContent>
            </Card>
            <div className="text-3xl font-bold text-gray-400">:</div>
            <Card className="bg-white border-none shadow-xl w-28 h-28 flex items-center justify-center">
              <CardContent className="p-0 text-center">
                <div
                  className="text-5xl font-bold"
                  style={{ color: "#4A90E2" }}
                >
                  {timeLeft.hours.toString().padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-500 uppercase mt-2">
                  {t.timer.hours}
                </div>
              </CardContent>
            </Card>
            <div className="text-3xl font-bold text-gray-400">:</div>
            <Card className="bg-white border-none shadow-xl w-28 h-28 flex items-center justify-center">
              <CardContent className="p-0 text-center">
                <div
                  className="text-5xl font-bold"
                  style={{ color: "#4A90E2" }}
                >
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-500 uppercase mt-2">
                  {t.timer.minutes}
                </div>
              </CardContent>
            </Card>
            <div className="text-3xl font-bold text-gray-400">:</div>
            <Card className="bg-white border-none shadow-xl w-28 h-28 flex items-center justify-center">
              <CardContent className="p-0 text-center">
                <div
                  className="text-5xl font-bold"
                  style={{ color: "#4A90E2" }}
                >
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-500 uppercase mt-2">
                  {t.timer.seconds}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 text-lg font-semibold mb-4"
            >
              <Icon name="Zap" size={20} className="mr-2" />
              {t.timer.claimBonus}
            </Button>
            <div className="flex items-center justify-center gap-2 text-orange-600">
              <Icon name="AlertTriangle" size={18} />
              <span className="text-sm font-semibold">
                {t.timer.spotsRemaining}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <Icon name="HelpCircle" size={18} style={{ color: "#4A90E2" }} />
              <span
                className="text-sm font-semibold"
                style={{ color: "#4A90E2" }}
              >
                {t.faq.badge}
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#5B6B8C" }}
            >
              {t.faq.title}
            </h2>
            <p className="text-lg text-gray-600">{t.faq.description}</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-2"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span
                      className="text-lg font-bold"
                      style={{ color: "#4A90E2" }}
                    >
                      01
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900 text-left">
                    {t.faq.q1}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 pr-4 pb-4 text-gray-600 leading-relaxed">
                {t.faq.a1}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-2"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span
                      className="text-lg font-bold"
                      style={{ color: "#4A90E2" }}
                    >
                      02
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900 text-left">
                    {t.faq.q2}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 pr-4 pb-4 text-gray-600 leading-relaxed">
                {t.faq.a2}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-2"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span
                      className="text-lg font-bold"
                      style={{ color: "#4A90E2" }}
                    >
                      03
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900 text-left">
                    {t.faq.q3}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 pr-4 pb-4">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 flex-shrink-0">
                      <img
                        src="https://cdn.poehali.dev/files/204f6091-1497-458b-9605-6b56e10eecb0.png"
                        alt="ISO 27001 Badge"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-gray-600 leading-relaxed">
                      <p className="mb-3">
                        Mexvorin operates under strict financial regulations and maintains the highest security standards. Your investments are protected by industry-leading encryption and compliance protocols.
                      </p>
                      <p>
                        We follow data protection practices and respect user privacy rights. Our approach includes encryption, access controls, and regular security reviews.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-white p-6 rounded-xl border-2 border-gray-100">
                    <img
                      src="https://cdn.poehali.dev/files/photo_2025-12-22_21-50-25.jpg?v=2"
                      alt="ISO 27001:2005 Certificate - Haltrovex"
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-start gap-3">
                      <Icon name="ShieldCheck" size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                      <div className="text-sm text-gray-700">
                        <p className="font-semibold mb-1">Data Protection and Privacy Policy</p>
                        <p className="text-gray-600">
                          This certificate is valid for 3 years and is subject to satisfactory assessments of the management system as per the standard. Regular audits ensure continuous compliance and security standards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-2"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span
                      className="text-lg font-bold"
                      style={{ color: "#4A90E2" }}
                    >
                      04
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900 text-left">
                    {t.faq.q4}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 pr-4 pb-4 text-gray-600 leading-relaxed">
                {t.faq.a4}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-200 rounded-full mb-6">
              <Icon name="Globe" size={18} style={{ color: "#4A90E2" }} />
              <span
                className="text-sm font-semibold"
                style={{ color: "#4A90E2" }}
              >
                GLOBAL TRADING NETWORK
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#5B6B8C" }}
            >
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
                      <Icon
                        name="MapPin"
                        size={20}
                        style={{ color: "#4A90E2" }}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {offices[selectedOffice].name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {offices[selectedOffice].city}
                      </p>
                      <p className="text-xs text-gray-500">
                        {offices[selectedOffice].address}
                      </p>
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
                    ? "bg-blue-50 border-2 border-blue-400"
                    : "bg-white border border-gray-200 hover:border-blue-300"
                }`}
                onClick={() => setSelectedOffice(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        selectedOffice === index ? "bg-blue-500" : "bg-blue-100"
                      }`}
                    >
                      <Icon
                        name="MapPin"
                        size={20}
                        className={
                          selectedOffice === index
                            ? "text-white"
                            : "text-blue-600"
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">
                        {office.name}
                      </h3>
                      <p className="text-sm text-gray-500">{office.city}</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <p className="text-gray-600 leading-relaxed">
                      {office.address}
                    </p>
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

      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">💎</span>
                <span className="text-2xl font-bold">Mexvorin</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {t.footer.description}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.footer.home}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.footer.advantages}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.footer.testimonials}
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.footer.faq}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.footer.aboutUs}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.footer.contact}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">
                {t.footer.resources}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.footer.privacy}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.footer.terms}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">
                {t.footer.contactTitle}
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="Headphones"
                      size={20}
                      className="text-blue-400"
                    />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">
                      {t.footer.support}
                    </div>
                    <div className="text-white font-medium">
                      {t.footer.support247}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Globe" size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">
                      {t.footer.coverage}
                    </div>
                    <div className="text-white font-medium">
                      {t.footer.countries}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;