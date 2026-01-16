
import React from 'react';
import { Target, History, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ScrollReveal } from '../components/ScrollReveal';

export const CompanyPage: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      id: 'precision',
      title: 'Präzision',
      desc: 'Genauigkeit ist kein Zufall, sondern das Ergebnis jahrelanger Erfahrung und modernster Messtechnik. Wir tolerieren keine Abweichungen.',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'partnership',
      title: 'Partnerschaft',
      desc: 'Wir verkaufen nicht nur Maschinen, wir begleiten unsere Kunden auf dem Weg zum Erfolg. Ihr Wachstum ist unser Antrieb.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'consistency',
      title: 'Beständigkeit',
      desc: 'Langfristige Lösungen und robuste Maschinenbaukunst sind unser Markenzeichen. Wir bauen für Generationen.',
      icon: History,
      image: 'https://images.pexels.com/photos/7480241/pexels-photo-7480241.jpeg'
    }
  ];

  return (
    <div className="pt-48 pb-24 min-h-screen bg-gray-50 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        
        {/* Intro */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="lg:w-1/2">
            <ScrollReveal>
              <div className="inline-block px-4 py-1.5 mb-6 border border-red-500 text-red-500 text-xs font-bold tracking-widest uppercase bg-white dark:bg-slate-900 rounded-full">
                Since 1984
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tight dark:text-white leading-tight">
                {t.company.title}
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                {t.company.desc}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">40+</h3>
                    <p className="text-xs uppercase tracking-widest text-gray-500">{t.stats.experience}</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">5000+</h3>
                    <p className="text-xs uppercase tracking-widest text-gray-500">{t.stats.machines}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:w-1/2 relative">
             <ScrollReveal delay={200}>
               <div className="absolute inset-0 bg-red-600 rounded-3xl transform rotate-3 opacity-20"></div>
               <img 
                 src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                 alt="Factory Floor" 
                 className="relative rounded-3xl shadow-2xl z-10 w-full h-auto object-cover transition-all duration-700"
               />
             </ScrollReveal>
          </div>
        </div>

      </div>

      {/* NEW SECTION: World Map & Proven Performance */}
      <section className="bg-white dark:bg-slate-950 py-32 mb-32 relative overflow-hidden border-y border-gray-100 dark:border-white/5 transition-colors duration-500">
        
        {/* Background Gradients & Grid */}
        <div className="absolute inset-0 pointer-events-none">
            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            {/* Radial Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100/40 via-white/0 to-white/0 dark:from-indigo-900/10 dark:via-slate-950/0 dark:to-slate-950/0"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Schematic Map Representation */}
            <ScrollReveal>
              <div className="relative w-full aspect-square max-w-[600px] mx-auto group">
                 {/* Glowing Orb effect behind */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-red-600/5 dark:bg-red-600/10 blur-[80px] rounded-full transition-all duration-1000 group-hover:bg-red-600/10 dark:group-hover:bg-red-600/20"></div>
                 
                 {/* Map Image with Filters: 
                     brightness-0 makes it black (for light mode). 
                     dark:invert makes the black white (for dark mode).
                 */}
                 <img 
                   src="https://i.ibb.co/LzZbBNkz/Screenshot-2026-01-16-183626-removebg-preview-Photoroom.png" 
                   alt="Global Network" 
                   className="w-full h-full object-contain animate-slow-zoom brightness-0 dark:invert opacity-60 dark:opacity-80 transition-all duration-500"
                 />
                 
                 {/* Decorative Overlay dots */}
                 <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-slate-900 dark:bg-white rounded-full animate-ping"></div>
                 <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
                 <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-slate-900 dark:bg-white rounded-full opacity-60"></div>
              </div>
            </ScrollReveal>

            {/* Right: Content & Stats */}
            <ScrollReveal delay={200}>
              <div className="text-slate-900 dark:text-white">
                <div className="flex items-center gap-3 mb-8">
                   <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center backdrop-blur-sm">
                      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                   </div>
                   <span className="text-red-600 font-bold text-xs tracking-[0.2em] uppercase">{t.proven.tag}</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight uppercase tracking-tight text-slate-900 dark:text-white whitespace-pre-line">
                  {t.proven.title}
                </h2>
                
                {/* Description without border */}
                <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-12">
                  {t.proven.desc}
                </p>

                {/* Stats Grid - Removed border-t and pt-8 */}
                <div className="grid grid-cols-2 gap-12 mt-8">
                  <div className="group">
                    <div className="text-5xl font-bold mb-3 group-hover:text-red-600 transition-colors duration-300">4X</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest leading-relaxed whitespace-pre-line">
                      {t.proven.stat_roi}
                    </div>
                  </div>
                  <div className="group">
                    <div className="text-5xl font-bold mb-3 group-hover:text-red-600 transition-colors duration-300">45</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest leading-relaxed whitespace-pre-line">
                      {t.proven.stat_countries}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-12">
                   {t.proven.tags.map((tag, i) => (
                     <span key={i} className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-300 hover:border-red-600 hover:text-red-600 dark:hover:text-white transition-colors bg-gray-50 dark:bg-white/5 cursor-default">
                       {tag}
                     </span>
                   ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        
        {/* Redesigned Values Section */}
        <div className="mb-32">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-tight dark:text-white">{t.company.values}</h2>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[550px]">
              {values.map((val, index) => (
                <div 
                  key={val.id} 
                  className="group relative flex-1 hover:flex-[2.5] transition-all duration-700 ease-in-out rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl shadow-slate-900/10 dark:shadow-none"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-slate-900">
                    <img 
                      src={val.image} 
                      alt={val.title} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-in-out" 
                    />
                  </div>
                  
                  {/* Gradient Overlay - Darker at bottom for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
                  
                  {/* Content Container */}
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                    
                    {/* Icon & Title (Moves up on hover) */}
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out will-change-transform">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 text-white border border-white/20">
                        <val.icon className="w-6 h-6" />
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{val.title}</h3>
                      
                      {/* Description (Reveals on hover) */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out">
                        <div className="overflow-hidden">
                          <div className="pt-4 border-t border-white/20 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                             <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                               {val.desc}
                             </p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  
                  {/* Arrow Indicator (Hides on hover) */}
                  <div className="absolute top-8 right-8 text-white/50 group-hover:text-white transition-colors duration-500">
                     <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Timeline (Simplified) */}
        <div className="relative py-12">
           <ScrollReveal>
             <h2 className="text-3xl font-bold mb-16 text-center uppercase tracking-tight dark:text-white">{t.company.history}</h2>
           </ScrollReveal>
           <div className="absolute left-1/2 -translate-x-1/2 top-32 bottom-0 w-px bg-gray-200 dark:bg-slate-800"></div>
           
           <div className="space-y-12 relative z-10">
              <ScrollReveal delay={100}>
                <div className="flex items-center justify-between w-full">
                  <div className="w-5/12 text-right pr-8">
                      <h3 className="text-2xl font-bold text-red-600">1984</h3>
                      <p className="text-slate-900 dark:text-white font-bold">Gründung</p>
                      <p className="text-gray-500 text-sm mt-2">Start in einer kleinen Garage in Zürich.</p>
                  </div>
                  <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-white dark:border-slate-950 shadow-md"></div>
                  <div className="w-5/12 pl-8"></div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="flex items-center justify-between w-full">
                  <div className="w-5/12 pr-8"></div>
                  <div className="w-4 h-4 bg-white dark:bg-slate-800 border-4 border-slate-200 dark:border-slate-700 rounded-full"></div>
                  <div className="w-5/12 pl-8">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">2005</h3>
                      <p className="text-slate-900 dark:text-white font-bold">Expansion DACH</p>
                      <p className="text-gray-500 text-sm mt-2">Eröffnung neuer Standorte in Deutschland und Österreich.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex items-center justify-between w-full">
                  <div className="w-5/12 text-right pr-8">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">2023</h3>
                      <p className="text-slate-900 dark:text-white font-bold">Digital Innovation Award</p>
                      <p className="text-gray-500 text-sm mt-2">Auszeichnung für unsere KI-gestützte Wartungssoftware.</p>
                  </div>
                  <div className="w-4 h-4 bg-white dark:bg-slate-800 border-4 border-slate-200 dark:border-slate-700 rounded-full"></div>
                  <div className="w-5/12 pl-8"></div>
                </div>
              </ScrollReveal>
           </div>
        </div>

      </div>
    </div>
  );
};
