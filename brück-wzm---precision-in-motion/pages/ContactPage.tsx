
import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ScrollReveal } from '../components/ScrollReveal';

export const ContactPage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pt-40 pb-24 min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        <ScrollReveal>
          {/* 1. Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6">
            <div className="max-w-3xl">
              {/* Updated Badge Style to Pill (matching PartnerTrack/Hero) */}
              <div className="inline-block px-4 py-2 border border-gray-300 dark:border-slate-700 text-slate-600 dark:text-gray-300 text-xs font-bold tracking-[0.2em] uppercase rounded-full bg-white dark:bg-slate-900">
                {t.nav.contact}
              </div>
              {/* Removed Title as requested */}
            </div>
            
            {/* Removed the 'Benefits' block as requested */}
          </div>

          {/* 2. Main Content: Form & Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            
            {/* Form Column - Updated to use Standard Corporate Colors (White/Slate instead of Gray/Beige) */}
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col justify-center border border-gray-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
              <form className="space-y-8">
                
                <div className="space-y-3">
                  <label className="block text-base font-bold text-slate-900 dark:text-white pl-6">
                    {t.contact.name}
                  </label>
                  <input 
                    type="text" 
                    placeholder={t.contact.name === "Name" ? "Dr. Thomas Müller" : "Max Mustermann"}
                    className="w-full bg-gray-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-gray-400 rounded-3xl px-8 py-5 text-lg outline-none border border-gray-200 dark:border-slate-700 focus:border-red-600 dark:focus:border-red-600 transition-all shadow-sm focus:shadow-md"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-base font-bold text-slate-900 dark:text-white pl-6">
                    {t.contact.email}
                  </label>
                  <input 
                    type="email" 
                    placeholder="contact@company.com"
                    className="w-full bg-gray-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-gray-400 rounded-3xl px-8 py-5 text-lg outline-none border border-gray-200 dark:border-slate-700 focus:border-red-600 dark:focus:border-red-600 transition-all shadow-sm focus:shadow-md"
                  />
                </div>

                <div className="space-y-3">
                   <label className="block text-base font-bold text-slate-900 dark:text-white pl-6">
                    {t.contact.projectInfo}
                   </label>
                   <textarea 
                     rows={5}
                     placeholder={language === 'de' ? "Wir interessieren uns für die 5-Achs Automatisierung..." : "We are looking for automation solutions..."}
                     className="w-full bg-gray-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-gray-400 rounded-[2rem] px-8 py-5 text-lg outline-none border border-gray-200 dark:border-slate-700 focus:border-red-600 dark:focus:border-red-600 transition-all resize-none shadow-sm focus:shadow-md"
                   ></textarea>
                </div>

                <div className="pt-6">
                   <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-5 rounded-full font-bold text-base uppercase tracking-widest hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition-all shadow-lg flex items-center gap-4">
                     {t.contact.send}
                     <ArrowRight className="w-5 h-5" />
                   </button>
                </div>

              </form>
            </div>

            {/* Image Column */}
            <div className="h-[600px] lg:h-auto rounded-[2.5rem] overflow-hidden relative group shadow-2xl shadow-slate-200/50 dark:shadow-none">
              <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <img 
                src="https://images.pexels.com/photos/10406128/pexels-photo-10406128.jpeg" 
                alt="Brück WZM Production" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
          </div>

          {/* 3. Bottom Info Cards - Updated Colors, Reduced Font Size, Clickable Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Address */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Industriestraße+1+8000+Zürich" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 flex items-center gap-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-slate-800"
            >
               <div className="w-14 h-14 rounded-full border border-gray-200 dark:border-slate-700 flex items-center justify-center shrink-0 text-slate-900 dark:text-white group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                 <MapPin className="w-6 h-6" />
               </div>
               <div>
                 <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1 group-hover:text-red-600 transition-colors">
                   {t.contact.addressCard}
                 </div>
                 <div className="font-bold text-slate-900 dark:text-white leading-snug text-lg">
                   Industriestraße 1,<br />8000 Zürich
                 </div>
               </div>
            </a>

            {/* Email */}
            <a 
              href="mailto:info@brueck-wzm.ch"
              className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 flex items-center gap-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-slate-800"
            >
               <div className="w-14 h-14 rounded-full border border-gray-200 dark:border-slate-700 flex items-center justify-center shrink-0 text-slate-900 dark:text-white group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                 <Mail className="w-6 h-6" />
               </div>
               <div>
                 <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1 group-hover:text-red-600 transition-colors">
                   {t.contact.emailCard}
                 </div>
                 <div className="font-bold text-slate-900 dark:text-white leading-snug text-lg break-all">
                   info@brueck-wzm.ch
                 </div>
               </div>
            </a>

            {/* Phone */}
            <a 
              href="tel:+41441234567"
              className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 flex items-center gap-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-slate-800"
            >
               <div className="w-14 h-14 rounded-full border border-gray-200 dark:border-slate-700 flex items-center justify-center shrink-0 text-slate-900 dark:text-white group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                 <Phone className="w-6 h-6" />
               </div>
               <div>
                 <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1 group-hover:text-red-600 transition-colors">
                   {t.contact.phoneCard}
                 </div>
                 <div className="font-bold text-slate-900 dark:text-white leading-snug text-lg">
                   +41 44 123 45 67
                 </div>
               </div>
            </a>

          </div>

        </ScrollReveal>

      </div>
    </div>
  );
};
