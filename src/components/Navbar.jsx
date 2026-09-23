import React, { useState } from 'react';
import { Globe, Phone, Menu, X } from 'lucide-react';
import { salonInfo } from '../salonData';

export default function Navbar({ lang, setLang }) {
  const isAr = lang === 'ar';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: isAr ? 'الرئيسية' : 'Home', href: '#' },
    { name: isAr ? 'الخدمات' : 'Services', href: '#services' },
    { name: isAr ? 'معرض الأعمال' : 'Portfolio', href: '#portfolio' },
    { name: isAr ? 'احجزي الآن' : 'Book Appointment', href: '#booking' }
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-pink-100/95 backdrop-blur-md border-b border-pink-200 px-4 py-2.5 shadow-sm transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#"
          onClick={(e) => handleScroll(e, '#')}
          className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
        >
          <img
            src={salonInfo.logo}
            alt="Adil Luxe Care Logo"
            className="w-10 h-10 rounded-full border-2 border-pink-300 shadow-sm object-cover"
          />
          <div>
            <h1 className="font-bold text-base md:text-xl text-pink-800 tracking-wide leading-tight">
              {isAr ? salonInfo.arabicName : salonInfo.name}
            </h1>
            <p className="text-[11px] md:text-xs text-pink-600 font-medium">
              ✨ {isAr ? salonInfo.arabicSubtitle : salonInfo.subtitle}
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-xs md:text-sm font-bold text-pink-900 hover:text-pink-600 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Controls & Mobile Menu Toggle */}
        <div className="flex items-center space-x-2 md:space-x-4 rtl:space-x-reverse">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(isAr ? 'en' : 'ar')}
            className="flex items-center space-x-1 rtl:space-x-reverse bg-white border border-pink-300 hover:bg-pink-200 text-pink-800 text-xs md:text-sm font-semibold py-1.5 px-3 rounded-full transition-all shadow-sm cursor-pointer"
          >
            <Globe size={16} className="text-pink-600" />
            <span>{isAr ? 'English' : 'العربية'}</span>
          </button>

          {/* Quick Call Button */}
          <a
            href={`tel:${salonInfo.whatsapp}`}
            className="hidden sm:flex items-center space-x-1 rtl:space-x-reverse bg-pink-500 hover:bg-pink-600 text-white text-xs md:text-sm font-semibold py-1.5 px-3 rounded-full shadow-md transition-all"
          >
            <Phone size={14} />
            <span>{salonInfo.phoneDisplay}</span>
          </a>

          {/* Hamburger Menu Toggle (Mobile & Tablet) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-pink-800 hover:text-pink-600 focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 border-b border-pink-200 px-4 pt-3 pb-4 space-y-2 mt-2 rounded-2xl shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block py-2 px-3 text-xs md:text-sm font-bold text-pink-900 hover:bg-pink-100 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}