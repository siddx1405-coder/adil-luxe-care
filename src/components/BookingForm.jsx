import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, Send } from 'lucide-react';
import { salonInfo, serviceCategories } from '../salonData';

export default function BookingForm({ lang }) {
  const isAr = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'salon',
    serviceName: serviceCategories[0].items[0].name,
    date: '',
    timeSlot: '1:30 PM',
    address: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message =
      `✨ *NEW BOOKING REQUEST* ✨%0A%0A` +
      `👤 *Name:* ${formData.name}%0A` +
      `📞 *Phone:* ${formData.phone}%0A` +
      `💅 *Service:* ${formData.serviceName}%0A` +
      `📍 *Location Type:* ${
        formData.serviceType === 'home' ? 'Home Service (+50 QR fee)' : 'Salon Visit'
      }%0A` +
      (formData.serviceType === 'home' ? `🏠 *Address:* ${formData.address}%0A` : '') +
      `📅 *Date:* ${formData.date}%0A` +
      `⏰ *Time Slot:* ${formData.timeSlot}%0A` +
      `📝 *Notes:* ${formData.notes || 'None'}`;

    const cleanWhatsapp = salonInfo.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanWhatsapp}?text=${message}`, '_blank');
  };

  const timeOptions = [
    { value: '1:30 AM - 2:00 AM', en: '1:30 AM - 2:00 AM (Late Night)', ar: '1:30 صباحاً - 2:00 صباحاً (متأخر)' },
    { value: '10:00 AM', en: '10:00 AM Morning', ar: '10:00 صباحاً' },
    { value: '1:30 PM', en: '1:30 PM Afternoon', ar: '1:30 ظهراً' },
    { value: '5:00 PM', en: '5:00 PM Evening', ar: '5:00 مساءً' },
    { value: '9:00 PM', en: '9:00 PM Night', ar: '9:00 مساءً' },
    { value: '11:30 PM', en: '11:30 PM Late Night', ar: '11:30 مساءً' }
  ];

  return (
    <section id="booking" className="py-12 bg-pink-100/50 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 md:p-10 border border-pink-200 shadow-xl">
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center space-x-1 rtl:space-x-reverse text-pink-500 font-bold text-xs uppercase tracking-widest">
            <Sparkles size={14} />
            <span>{isAr ? 'حجز موعد' : 'Reservation'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-pink-900">
            {isAr ? 'احجزي موعدكِ الفاخر ✨' : 'Book Your Beauty Session ✨'}
          </h2>
          <p className="text-xs md:text-sm text-pink-700">
            {isAr
              ? 'اختاري موعدكِ والمكان المفضل وسنتواصل معكِ فوراً عبر الواتساب'
              : 'Choose your date, preferred service, and whether you want salon or home service!'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Service Type Selection */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, serviceType: 'salon' })}
              className={`p-3 rounded-2xl border text-xs md:text-sm font-bold flex flex-col items-center justify-center space-y-1 transition-all cursor-pointer ${
                formData.serviceType === 'salon'
                  ? 'bg-pink-500 text-white border-pink-500 shadow-md'
                  : 'bg-pink-50 text-pink-800 border-pink-200 hover:bg-pink-100'
              }`}
            >
              <MapPin size={18} />
              <span>{isAr ? 'في الصالون' : 'Salon Visit'}</span>
            </button>

            <button
              type="button"
              onClick={() => setFormData({ ...formData, serviceType: 'home' })}
              className={`p-3 rounded-2xl border text-xs md:text-sm font-bold flex flex-col items-center justify-center space-y-1 transition-all cursor-pointer ${
                formData.serviceType === 'home'
                  ? 'bg-pink-500 text-white border-pink-500 shadow-md'
                  : 'bg-pink-50 text-pink-800 border-pink-200 hover:bg-pink-100'
              }`}
            >
              <Sparkles size={18} />
              <span>{isAr ? 'خدمة منازل (+50 ر.ق)' : 'Home Service (+50 QR)'}</span>
            </button>
          </div>

          {/* Name & Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-pink-900 mb-1">
                {isAr ? 'الاسم الكامل' : 'Your Name'}
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={isAr ? 'مثال: سارة المنصوري' : 'e.g. Sarah Mansoor'}
                className="w-full px-4 py-2.5 rounded-xl border border-pink-200 text-xs md:text-sm focus:outline-none focus:border-pink-500 bg-pink-50/30"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-pink-900 mb-1">
                {isAr ? 'رقم الهاتف / واتساب' : 'Phone / WhatsApp'}
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+974 ..."
                className="w-full px-4 py-2.5 rounded-xl border border-pink-200 text-xs md:text-sm focus:outline-none focus:border-pink-500 bg-pink-50/30"
              />
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-xs font-bold text-pink-900 mb-1">
              {isAr ? 'اختر الخدمة' : 'Select Treatment'}
            </label>
            <select
              name="serviceName"
              value={formData.serviceName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-pink-200 text-xs md:text-sm focus:outline-none focus:border-pink-500 bg-pink-50/30"
            >
              {serviceCategories.flatMap((cat) =>
                cat.items.map((item) => (
                  <option key={item.name} value={item.name}>
                    {isAr ? item.arabicName : item.name} — {item.price} {isAr ? 'ر.ق' : 'QR'}
                  </option>
                ))
              )}
            </select>
          </div>

          {/* Date & Time Slot */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-pink-900 mb-1 flex items-center space-x-1 rtl:space-x-reverse">
                <Calendar size={14} className="text-pink-500" />
                <span>{isAr ? 'التاريخ' : 'Select Date'}</span>
              </label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-pink-200 text-xs md:text-sm focus:outline-none focus:border-pink-500 bg-pink-50/30"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-pink-900 mb-1 flex items-center space-x-1 rtl:space-x-reverse">
                <Clock size={14} className="text-pink-500" />
                <span>{isAr ? 'الوقت' : 'Time Slot'}</span>
              </label>
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-pink-200 text-xs md:text-sm focus:outline-none focus:border-pink-500 bg-pink-50/30"
              >
                {timeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {isAr ? opt.ar : opt.en}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Home Address Field (If Home Service selected) */}
          {formData.serviceType === 'home' && (
            <div>
              <label className="block text-xs font-bold text-pink-900 mb-1">
                {isAr ? 'عنوان المنزل في الدوحة' : 'Home Address (Doha)'}
              </label>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                placeholder={isAr ? 'المنطقة، الشارع، رقم المبنى' : 'Zone, Street, Building No.'}
                className="w-full px-4 py-2.5 rounded-xl border border-pink-200 text-xs md:text-sm focus:outline-none focus:border-pink-500 bg-pink-50/30"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg flex items-center justify-center space-x-2 rtl:space-x-reverse transition-all cursor-pointer"
          >
            <Send size={18} />
            <span>{isAr ? 'تأكيد الحجز عبر الواتساب' : 'Confirm via WhatsApp'}</span>
          </button>
        </form>
      </div>
    </section>
  );
}