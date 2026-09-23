import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, Send, Check } from 'lucide-react';
import { salonInfo, serviceCategories } from '../salonData';

export default function BookingForm({ lang }) {
  const isAr = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'salon',
    selectedServices: [], // Store multiple selected services
    date: '',
    timeSlot: '1:30 PM',
    address: '',
    notes: ''
  });

  // Toggle selection for multiple services
  const handleServiceToggle = (service) => {
    const isSelected = formData.selectedServices.some((s) => s.name === service.name);
    if (isSelected) {
      setFormData({
        ...formData,
        selectedServices: formData.selectedServices.filter((s) => s.name !== service.name)
      });
    } else {
      setFormData({
        ...formData,
        selectedServices: [...formData.selectedServices, service]
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.selectedServices.length === 0) {
      alert(isAr ? 'الرجاء اختيار خدمة واحدة على الأقل' : 'Please select at least one service.');
      return;
    }

    // Format list of services for WhatsApp
    const serviceListText = formData.selectedServices
      .map((s) => `• ${isAr ? s.arabicName : s.name} (${s.price} ${isAr ? 'ر.ق' : 'QR'})`)
      .join('%0A');

    const message =
      `✨ *NEW BOOKING REQUEST* ✨%0A%0A` +
      `👤 *Name:* ${formData.name}%0A` +
      `📞 *Phone:* ${formData.phone}%0A` +
      `💅 *Selected Services:*%0A${serviceListText}%0A%0A` +
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

  // Updated custom time slots list
  const timeOptions = [
    { value: '1:30 PM', en: '1:30 PM Afternoon', ar: '1:30 ظهراً' },
    { value: '3:30 PM', en: '3:30 PM Afternoon', ar: '3:30 عصراً' },
    { value: '4:30 PM', en: '4:30 PM Afternoon', ar: '4:30 عصراً' },
    { value: '7:30 PM', en: '7:30 PM Evening', ar: '7:30 مساءً' },
    { value: '8:30 PM', en: '8:30 PM Evening', ar: '8:30 مساءً' },
    { value: '10:30 PM', en: '10:30 PM Night', ar: '10:30 مساءً' },
    { value: '11:30 PM', en: '11:30 PM Late Night', ar: '11:30 مساءً' },
    { value: '1:30 AM', en: '1:30 AM Late Night', ar: '1:30 صباحاً' }
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
              ? 'اختاري موعدكِ والخدمات المفضلة وسنتواصل معكِ فوراً عبر الواتساب'
              : 'Choose your preferred services, date, time, and whether you want salon or home service!'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Type Selection */}
          <div className="grid grid-cols-2 gap-3">
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

          {/* Multiple Services Selection Checklist */}
          <div>
            <label className="block text-xs font-bold text-pink-900 mb-2">
              {isAr ? 'اختر الخدمات (يمكنك اختيار أكثر من خدمة):' : 'Select Treatment(s) - Multiple Choice:'}
            </label>
            <div className="max-h-60 overflow-y-auto space-y-2 p-3 bg-pink-50/50 rounded-2xl border border-pink-200">
              {serviceCategories.map((cat) => (
                <div key={cat.name} className="space-y-1.5">
                  <span className="text-[11px] font-bold text-pink-600 block pt-1 px-1">
                    {isAr ? cat.arabicName : cat.name}
                  </span>
                  {cat.items.map((item) => {
                    const isChecked = formData.selectedServices.some((s) => s.name === item.name);
                    return (
                      <div
                        key={item.name}
                        onClick={() => handleServiceToggle(item)}
                        className={`flex items-center justify-between p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-pink-500 text-white border-pink-500 font-semibold shadow-xs'
                            : 'bg-white text-pink-900 border-pink-100 hover:border-pink-300'
                        }`}
                      >
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                              isChecked ? 'bg-white text-pink-600 border-white' : 'border-pink-300'
                            }`}
                          >
                            {isChecked && <Check size={12} strokeWidth={3} />}
                          </div>
                          <span>{isAr ? item.arabicName : item.name}</span>
                        </div>
                        <span className={isChecked ? 'text-pink-100 font-bold' : 'text-pink-600 font-bold'}>
                          {item.price} {isAr ? 'ر.ق' : 'QR'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            {formData.selectedServices.length > 0 && (
              <p className="text-[11px] text-pink-600 font-medium mt-1.5 px-1">
                {isAr
                  ? `تم اختيار ${formData.selectedServices.length} خدمة/خدمات`
                  : `Selected Services: ${formData.selectedServices.length}`}
              </p>
            )}
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