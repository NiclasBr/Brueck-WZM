import React, { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { PARTNERS } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const PartnerTrack: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-24 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-900 overflow-hidden relative group transition-colors duration-500">
      {/* Grid Background - Matching Hero Style */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-6 mb-16 flex justify-between items-end gap-6 relative z-10">
        <div className="max-w-2xl">
          <ScrollReveal>
            <div className="inline-block px-3 py-1 mb-4 border border-gray-200 dark:border-slate-800 text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              Portfolio
            </div>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">Starke Partner & Marken</h2>
          </ScrollReveal>
        </div>
        
        <ScrollReveal width="auto" delay={200}>
          <button 
            onClick={() => setIsPaused(!isPaused)}
            className="w-12 h-12 border border-gray-300 dark:border-slate-700 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 hover:bg-slate-900 hover:border-slate-900 dark:hover:bg-white dark:hover:text-slate-900 transition-all shadow-sm group/btn relative z-20"
          >
            {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
          </button>
        </ScrollReveal>
      </div>

      <div className="relative w-full overflow-hidden z-10">
        <div className="absolute inset-y-0 left-0 w-32 md:w-96 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-96 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 z-10 pointer-events-none"></div>
        
        <div className={`flex gap-32 items-center py-8 w-max animate-infinite-scroll ${isPaused ? 'paused' : ''}`}>
           {/* Duplicate list 3 times to ensure smooth looping */}
           {[...Array(3)].map((_, i) => (
             <React.Fragment key={i}>
                {PARTNERS.map((partner, index) => (
                  <span 
                    key={index} 
                    className="text-3xl font-black text-slate-300 dark:text-slate-700 hover:text-red-600 transition-all tracking-tighter uppercase whitespace-nowrap"
                  >
                    {partner}
                  </span>
                ))}
             </React.Fragment>
           ))}
        </div>
      </div>
    </section>
  );
};