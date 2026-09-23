import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className={`min-h-screen bg-pink-50/30 text-pink-950 ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Portfolio lang={lang} />
      <Services lang={lang} />
      <BookingForm lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}