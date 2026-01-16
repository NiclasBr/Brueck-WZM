
import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

export const TeamPage: React.FC = () => {
  const { t } = useLanguage();

  const team = [
    { name: 'Dr. Thomas Brück', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400', desc: 'Leitet das Unternehmen seit der Gründung 1984 mit Weitblick.' },
    { name: 'Sarah Weber', role: 'Head of Engineering', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400', desc: 'Verantwortlich für unsere innovativen CNC-Lösungen.' },
    { name: 'Markus Lang', role: 'Service Director', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400', desc: 'Koordiniert unsere weltweiten Serviceteams.' },
    { name: 'Julia Steiner', role: 'Sales Manager', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400', desc: 'Ihre Ansprechpartnerin für individuelle Maschinenkonzepte.' },
  ];

  return (
    <div className="pt-48 pb-24 min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight dark:text-white">
              {t.nav_sub.comp_team}
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Die Menschen hinter der Präzision. Unser Team aus Experten arbeitet täglich daran, die Grenzen des Machbaren zu verschieben.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <ScrollReveal key={index} delay={index * 100} className="h-full">
              <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-800 group h-full flex flex-col">
                <div className="h-80 overflow-hidden relative">
                  <div className="absolute inset-0 bg-red-600/10 group-hover:bg-red-600/0 transition-colors z-10"></div>
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                  <div className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">{member.role}</div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{member.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};
