import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToStats = () => {
    const el = document.getElementById('stats-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-50">
          <source src="https://www.pexels.com/download/video/19791092/" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.3)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-3xl">
          <ScrollReveal>
            <div className="inline-block px-4 py-1.5 mb-6 border border-red-500 text-red-500 text-xs font-bold tracking-widest uppercase bg-black/50 backdrop-blur rounded-full">
              EST. 1984
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all flex items-center gap-2 group rounded-full shadow-lg hover:shadow-red-900/50">
                {t.hero.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="border border-white hover:bg-white hover:text-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all rounded-full hover:shadow-lg">
                {t.nav.contact}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        onClick={scrollToStats}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer flex flex-col items-center gap-2 z-20 group"
      >
        <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase group-hover:text-red-500 transition-colors">Scroll</span>
        <div className="w-[30px] h-[50px] border-2 border-white group-hover:border-red-500 transition-colors rounded-full flex justify-center p-2 box-border">
          <div className="w-1 h-2 bg-white group-hover:bg-red-500 transition-colors rounded-full animate-scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};