import { useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { serviceCategories } from '../salonData';

export default function Services({ lang }) {
  const isAr = lang === 'ar';
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-12 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center space-x-1 text-pink-500 font-bold text-xs uppercase tracking-widest">
            <Sparkles size={14} />
            <span>{isAr ? 'قائمة الخدمات والأسعار' : 'Pricelist & Treatments'}</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-pink-900">
            {isAr ? 'الخدمات والأسعار ✨' : 'Services & Pricing ✨'}
          </h2>
          <p className="text-xs md:text-sm text-pink-700">
            {isAr
              ? 'تصفحي جميع خدمات الأظافر، المساج، والرموش بأسعارنا الشفافة'
              : 'Explore our full menu of nail care, massage, lash extensions, and spa options.'}
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-3 mb-6 no-scrollbar justify-start sm:justify-center">
          {serviceCategories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(idx)}
              aria-pressed={activeTab === idx}
              className={`whitespace-nowrap px-4 py-2 rounded-2xl text-xs md:text-sm font-bold transition-all cursor-pointer ${activeTab === idx
                ? 'bg-pink-500 text-white shadow-md'
                : 'bg-pink-50 text-pink-800 border border-pink-200 hover:bg-pink-100'
                }`}
            >
              {isAr ? cat.arabicName : cat.name}
            </button>
          ))}
        </div>

        {/* Service Items List */}
        <div className="bg-pink-50/50 rounded-3xl p-6 border border-pink-200 shadow-sm">
          <h3 className="text-lg font-bold text-pink-900 mb-4 border-b border-pink-200 pb-2">
            {isAr ? serviceCategories[activeTab].arabicName : serviceCategories[activeTab].name}
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {serviceCategories[activeTab].items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between p-3 rounded-2xl bg-white border border-pink-100 shadow-xs hover:border-pink-300 transition-all"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-pink-400 shrink-0" />
                  <span className="text-xs md:text-sm font-semibold text-pink-950">
                    {isAr ? item.arabicName : item.name}
                  </span>
                </div>
                <span className="text-xs md:text-sm font-black text-pink-600 bg-pink-100 px-3 py-1 rounded-full shrink-0">
                  {item.price} {isAr ? 'ر.ق' : 'QR'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}