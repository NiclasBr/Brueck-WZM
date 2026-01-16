
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, ArrowRight, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useUI } from '../contexts/UIContext';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { ScrollReveal } from './ScrollReveal';

export const ProductSlider: React.FC = () => {
  const { t } = useLanguage();
  const { openModal } = useUI();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const totalDuration = 5000;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            setCurrentSlide((prev) => (prev + 1) % PRODUCTS.length);
            return 0;
          }
          return oldProgress + (100 / (totalDuration / 50));
        });
      }, 50);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const changeSlide = (dir: number) => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentSlide((prev) => (prev + dir + PRODUCTS.length) % PRODUCTS.length);
  };

  const handleInquiry = (p: Product) => {
    openModal({ productId: p.id, productName: p.name });
  };

  const circumference = 2 * Math.PI * 23;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-950 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
          <div className="max-w-xl">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-4 uppercase tracking-tight dark:text-white">{t.products.title}</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-md">{t.products.desc}</p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={200} width="auto">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="relative w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform group"
              >
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 50 50">
                  <circle className="text-gray-200 dark:text-slate-800 stroke-current" strokeWidth="3" fill="transparent" r="23" cx="25" cy="25"/>
                  <circle 
                    className="text-red-600 stroke-current transition-[stroke-dashoffset] duration-75 linear" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    fill="transparent" 
                    r="23" cx="25" cy="25"
                    strokeDasharray={circumference} 
                    strokeDashoffset={strokeDashoffset}
                    transform="rotate(-90 25 25)"
                  />
                </svg>
                <div className="rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                  {isPlaying ? <Pause className="w-5 h-5 text-slate-900 dark:text-white" /> : <Play className="w-5 h-5 text-slate-900 dark:text-white" />}
                </div>
              </button>
              
              <div className="flex gap-2">
                <button onClick={() => changeSlide(-1)} className="w-12 h-12 border border-gray-300 dark:border-slate-700 flex items-center justify-center bg-white dark:bg-slate-900 hover:bg-red-600 hover:border-red-600 hover:text-white dark:hover:bg-red-600 dark:text-white transition-all rounded-full shadow-sm">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => changeSlide(1)} className="w-12 h-12 border border-gray-300 dark:border-slate-700 flex items-center justify-center bg-white dark:bg-slate-900 hover:bg-red-600 hover:border-red-600 hover:text-white dark:hover:bg-red-600 dark:text-white transition-all rounded-full shadow-sm">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <ScrollReveal delay={300}>
          <div className="relative h-[650px] md:h-[520px] w-full">
            {PRODUCTS.map((p: Product, index: number) => {
              let positionClass = '';
              if (index === currentSlide) positionClass = 'scale-100 translate-x-0 opacity-100 z-20';
              else if (index === (currentSlide - 1 + PRODUCTS.length) % PRODUCTS.length) positionClass = 'scale-90 -translate-x-full opacity-0 z-10';
              else positionClass = 'scale-90 translate-x-full opacity-0 z-10';

              return (
                <div 
                  key={p.id}
                  className={`absolute top-0 left-0 w-full h-full flex flex-col md:flex-row bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-lg shadow-slate-200/60 dark:shadow-none rounded-3xl overflow-hidden transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) ${positionClass}`}
                >
                  {/* Image Section */}
                  <Link 
                    to={`/products/${p.id}`}
                    className="w-full md:w-3/5 h-64 md:h-full relative overflow-hidden bg-white dark:bg-slate-800 flex items-center justify-center p-8 group cursor-pointer"
                  >
                     {p.status === 'sold' && (
                       <div className="absolute top-8 right-8 flex items-center gap-2 bg-white/95 dark:bg-slate-800/95 px-4 py-2 rounded-full shadow-lg border border-red-100 dark:border-red-900 z-30">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest">{t.products.sold}</span>
                       </div>
                     )}
                     <img 
                      src={p.image} 
                      alt={p.name} 
                      className={`w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110 ${p.status === 'sold' ? 'grayscale opacity-80' : ''}`} 
                     />
                  </Link>

                  {/* Details Section */}
                  <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center relative border-l border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <div className="absolute top-8 left-8 w-12 h-1.5 bg-red-600 rounded-full"></div>
                    <span className="text-gray-400 text-xs font-mono mb-2 mt-4 md:mt-0 uppercase tracking-widest">
                      {String(p.id).padStart(2, '0')} // {p.category}
                    </span>
                    <h3 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">{p.name}</h3>
                    <ul className="space-y-4 mb-8">
                      {p.specs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-slate-800 pb-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full shrink-0"></div>
                          {spec}
                        </li>
                      ))}
                    </ul>

                    <Link to={`/products/${p.id}`} className="text-left text-xs font-bold uppercase tracking-[0.2em] hover:text-red-600 dark:text-white dark:hover:text-red-600 transition-colors flex items-center gap-3 group/btn mb-10">
                      {t.products.details}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                    </Link>

                    <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12">
                      <button 
                        onClick={() => handleInquiry(p)}
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md hover:shadow-red-600/30 flex items-center justify-center gap-2"
                      >
                        {t.products.inquiry}
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
        <div className="mt-8 text-center md:text-left">
            <Link to="/products" className="inline-block text-xs font-bold uppercase tracking-widest border-b border-black dark:border-white dark:text-white pb-1 hover:text-red-600 hover:border-red-600 transition-all">
                {t.products.viewAll}
            </Link>
        </div>
      </div>
    </section>
  );
};
