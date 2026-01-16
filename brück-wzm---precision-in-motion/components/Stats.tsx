import React, { useEffect, useRef, useState } from 'react';
import { Factory, Users, Globe, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

const Counter = ({ end, suffix = '' }: { end: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const stepTime = Math.abs(Math.floor(duration / end));
          
          const timer = setInterval(() => {
            start += Math.ceil(end / 50); // Increment
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 30);
          
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref} className="font-mono tracking-tighter">{count}{suffix}</span>;
};

export const Stats: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Factory, value: 5400, suffix: '+', label: t.stats.machines },
    { icon: Users, value: 120, suffix: '', label: t.stats.clients },
    { icon: Globe, value: 45, suffix: '', label: t.stats.countries },
    { icon: Award, value: 30, suffix: '', label: t.stats.experience },
  ];

  return (
    <section id="stats-section" className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 shadow-sm relative z-20 rounded-b-3xl transition-colors duration-500">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 dark:divide-slate-800">
        {stats.map((stat, idx) => (
          <ScrollReveal 
            key={idx} 
            delay={idx * 100}
            className={`p-10 md:p-16 text-center group hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-300 ${idx === 0 ? 'rounded-bl-3xl' : ''} ${idx === 3 ? 'rounded-br-3xl' : ''}`}
          >
            <div className="flex justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300">
              <stat.icon className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
              <Counter end={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 group-hover:text-red-600 transition-colors">
              {stat.label}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};