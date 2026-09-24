import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const TITLES = {
  en: 'Adil Luxe Care | Nail & Beauty Salon in Doha – Home Service 24/7',
  ar: 'أديل لوكس كير | صالون أظافر وتجميل في الدوحة – خدمة منزلية 24/7',
};

export default function App() {
  const [lang, setLang] = useState('en');

  // Tell the browser (and Tailwind's rtl: / logical classes) which language and
  // reading direction the page is in. Setting `dir` on <html> is what makes the
  // whole layout flip right-to-left for Arabic.
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = TITLES[lang];
  }, [lang]);

  return (
    <div className="min-h-screen bg-pink-50/30 text-pink-950">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Portfolio lang={lang} />
        <Services lang={lang} />
        <BookingForm lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
