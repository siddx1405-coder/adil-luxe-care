import { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { portfolioItems } from '../salonData';

export default function Portfolio({ lang }) {
  const isAr = lang === 'ar';
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(portfolioItems.map((item) => item.category))];

  // English category name -> Arabic name, taken straight from salonData.js
  const arabicCategoryNames = Object.fromEntries(
    portfolioItems.map((item) => [item.category, item.arabicCategory])
  );

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-12 bg-pink-50/60 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center space-x-1 text-pink-500 font-bold text-xs uppercase tracking-widest">
            <Sparkles size={14} />
            <span>{isAr ? 'معرض الأعمال' : 'Our Work'}</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-pink-900">
            {isAr ? 'معرض التصاميم والأظافر ✨' : 'Luxe Nail Lookbook ✨'}
          </h2>
          <p className="text-xs md:text-sm text-pink-700 max-w-md mx-auto">
            {isAr
              ? 'تصفحي أرقى وأحدث تصاميم الأظافر الفاخرة المصنوعة بكل حب'
              : 'Browse our latest bespoke gel extensions, 3D art, and luxury manicures.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => {
            const displayCat = cat === 'All' ? (isAr ? 'الكل' : 'All') : isAr ? arabicCategoryNames[cat] : cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${activeCategory === cat
                  ? 'bg-pink-500 text-white shadow-md'
                  : 'bg-white text-pink-700 border border-pink-200 hover:bg-pink-100'
                  }`}
              >
                {displayCat}
              </button>
            );
          })}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-white border border-pink-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-pink-100">
                <img
                  src={item.image}
                  alt={isAr ? item.arabicTitle : item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-3 bg-white text-start">
                <span className="text-[10px] font-bold uppercase tracking-wider text-pink-500">
                  {isAr ? item.arabicCategory : item.category}
                </span>
                <h3 className="text-xs font-bold text-pink-900 truncate">
                  {isAr ? item.arabicTitle : item.title}
                </h3>
              </div>
              <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 p-1.5 rounded-full text-pink-500 shadow-md">
                <Heart size={14} fill="currentColor" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}