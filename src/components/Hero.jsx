import { Heart, Sparkles, Calendar, Clock, MapPin } from 'lucide-react';
import { salonInfo } from '../salonData';

export default function Hero({ lang }) {
  const isAr = lang === 'ar';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-100 via-pink-50 to-pink-100 py-12 md:py-16 px-4">
      {/* Faded Logo Watermark Background */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-5 pointer-events-none scale-125 md:scale-110 filter blur-[1px]"
        style={{ backgroundImage: `url(${salonInfo.logo})` }}
      />

      {/* Decorative Floating Hearts Background */}
      <div className="absolute top-6 left-6 text-pink-300 opacity-40 animate-bounce">
        <Heart size={32} fill="currentColor" />
      </div>
      <div className="absolute bottom-8 right-8 text-pink-300 opacity-30 animate-pulse">
        <Heart size={48} fill="currentColor" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Column: Text & CTA */}
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 bg-pink-200/80 text-pink-800 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full border border-pink-300 shadow-sm">
            <Sparkles size={14} className="text-pink-600" />
            <span>{isAr ? 'خدمة فاخرة على مدار 24 ساعة' : 'Luxury Beauty & Spa Services • 24/7'}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-pink-900 leading-tight">
            {isAr ? (
              <>
                دللي نفسك مع <span className="text-pink-600">أديل لوكس كير</span> ✨
              </>
            ) : (
              <>
                Pamper Yourself with <span className="text-pink-600">Adil Luxe Care</span> ✨
              </>
            )}
          </h1>

          <p className="text-sm md:text-base text-pink-700/90 leading-relaxed max-w-lg">
            {isAr
              ? 'أفضل خدمات التجميل والأظافر والتدليك في الدوحة. متوفرة في صالوننا الفاخر أو في راحتك بالمنزل.'
              : 'Premium nail artistry, relaxing massages, spa treatments, and eyelash extensions in Doha. Visit our salon or book a private home service today.'}
          </p>

          {/* Quick Details Badges */}
          <div className="flex flex-wrap gap-2 pt-1 text-xs text-pink-800 font-medium">
            <div className="flex items-center space-x-1 bg-white/80 px-3 py-1.5 rounded-lg border border-pink-200 shadow-xs">
              <Clock size={14} className="text-pink-500" />
              <span>{isAr ? salonInfo.hoursAr : salonInfo.hours}</span>
            </div>

            {/* Clickable Location Badge -> Google Maps */}
            <a
              href={salonInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-white/80 hover:bg-pink-200/60 transition-colors px-3 py-1.5 rounded-lg border border-pink-200 shadow-xs cursor-pointer"
            >
              <MapPin size={14} className="text-pink-500" />
              <span className="underline underline-offset-2">
                {isAr ? 'الدوحة، قطر (افتح الخريطة)' : 'Doha, Qatar (Open Map)'}
              </span>
            </a>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#booking"
              className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <Calendar size={18} />
              <span>{isAr ? 'احجزي الآن' : 'Book Appointment'}</span>
            </a>
            <a
              href="#services"
              className="flex items-center space-x-2 bg-white hover:bg-pink-100 text-pink-700 font-bold px-6 py-3 rounded-full border border-pink-300 shadow-sm transition-all cursor-pointer"
            >
              <span>{isAr ? 'قائمة الخدمات' : 'View Menu'}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Featured Video Asset */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-xs md:max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-pink-200">
            <video
              src="/vid.mp4"
              poster="/img2.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-pink-300">
                ✨ {isAr ? 'تصاميم مميزة' : 'Featured Artistry'}
              </p>
              <p className="text-sm font-semibold">
                {isAr ? 'فن الأظافر الثلاثي الأبعاد باللؤلؤ والزهور' : '3D Pearl & Blossom Gel Art'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}