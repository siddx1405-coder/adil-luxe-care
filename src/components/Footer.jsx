import React from 'react';
import { MapPin, Phone, Clock, Globe, ShieldCheck } from 'lucide-react';
import { salonInfo } from '../salonData';

export default function Footer({ lang }) {
  const isAr = lang === 'ar';

  return (
    <footer className="bg-pink-900 text-pink-100 pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-pink-800">
        {/* Brand & CR details */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src={salonInfo.logo}
              alt="Adil Luxe Care Logo"
              className="w-12 h-12 rounded-full border-2 border-pink-400 object-cover"
            />
            <span className="font-extrabold text-lg text-white">
              {isAr ? salonInfo.arabicName : salonInfo.name}
            </span>
          </div>
          <p className="text-xs text-pink-200 leading-relaxed">
            {isAr
              ? 'صالون أظافر وتجميل فاخر يقدم أفضل الخدمات بأساليب عصرية وراحة تامة.'
              : 'Luxury boutique salon and spa services in Doha, Qatar. Dedicated to bringing you high-end nail care and wellness treatments.'}
          </p>
          <div className="pt-2 text-[11px] text-pink-300 space-y-1">
            <p className="flex items-center space-x-1 rtl:space-x-reverse">
              <ShieldCheck size={14} className="text-pink-400" />
              <span>
                {isAr ? 'السجل التجاري:' : 'C.R. No.:'} {salonInfo.crNo}
              </span>
            </p>
            <p className="ltr:ml-5 rtl:mr-5">
              {isAr ? 'صندوق البريد:' : 'P.O. Box:'} {salonInfo.poBox}
            </p>
          </div>
        </div>

        {/* Location & Hours */}
        <div className="space-y-3">
          <h4 className="font-bold text-sm text-white uppercase tracking-wider">
            {isAr ? 'العنوان والساعات' : 'Location & Hours'}
          </h4>
          <ul className="space-y-2 text-xs text-pink-200">
            <li>
              {/* Clickable Location Link -> Google Maps */}
              <a
                href={salonInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2 rtl:space-x-reverse hover:text-white transition-colors cursor-pointer group"
              >
                <MapPin size={16} className="text-pink-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="underline underline-offset-2">
                  {isAr ? salonInfo.arabicLocation : salonInfo.location}
                </span>
              </a>
            </li>
            <li className="flex items-center space-x-2 rtl:space-x-reverse">
              <Clock size={16} className="text-pink-400 shrink-0" />
              <span>{isAr ? salonInfo.hoursAr : salonInfo.hours}</span>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="space-y-3">
          <h4 className="font-bold text-sm text-white uppercase tracking-wider">
            {isAr ? 'تواصل معنا' : 'Connect With Us'}
          </h4>
          <div className="space-y-2 text-xs text-pink-200">
            <a
              href={`https://wa.me/${salonInfo.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 rtl:space-x-reverse hover:text-white transition-colors"
            >
              <Phone size={16} className="text-pink-400" />
              <span>{salonInfo.phoneDisplay}</span>
            </a>
            <a
              href={salonInfo.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 rtl:space-x-reverse hover:text-white transition-colors pt-1"
            >
              <Globe size={16} className="text-pink-400" />
              <span>{isAr ? 'فيسبوك أديل لوكس كير' : 'Adil Luxe Care Facebook'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright & Credit Link */}
      <div className="max-w-6xl mx-auto pt-6 text-center text-[11px] text-pink-300/80 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>
          © {new Date().getFullYear()} {isAr ? salonInfo.arabicName : 'Adil Luxe Care Beauty Service'}. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
        </p>
        <p className="flex items-center space-x-1 rtl:space-x-reverse">
          <span>{isAr ? 'صُمم بواسطة' : 'Made by'}</span>
          <a
            href="https://www.xenosysweb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-pink-300 hover:text-white underline underline-offset-2 transition-colors mx-1"
          >
            Xenosysweb
          </a>
        </p>
      </div>
    </footer>
  );
}