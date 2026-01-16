
import React, { useState } from 'react';
import { Settings, Wrench, ShieldCheck, ArrowRight, ChevronRight, RefreshCw, Cpu, Activity, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ScrollReveal } from './ScrollReveal';

// Map icons to keys
const IconMap = {
  settings: Settings,
  wrench: Wrench,
  'shield-check': ShieldCheck,
  'refresh-cw': RefreshCw,
  cpu: Cpu,
  activity: Activity,
  school: GraduationCap
};

// Internal data mapping for the interactive layout
const SERVICE_CONFIG = [
  {
    id: 's1',
    link: '/services/maintenance',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    iconKey: 'settings',
    fallbackTitle: 'Präventive Wartung',
    fallbackDesc: 'Maximieren Sie die Laufzeit Ihrer Maschinen durch regelmäßige, professionelle Wartung und 24/7 Support.',
    tags: ['Verfügbarkeit', 'Kostenreduktion', '24/7 Support']
  },
  {
    id: 's2',
    link: '/services/automation',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1200',
    iconKey: 'cpu',
    fallbackTitle: 'Ind. Automatisierung',
    fallbackDesc: 'Integrierte Robotiklösungen und Palettenwechselsysteme zur massiven Steigerung Ihrer Produktivität.',
    tags: ['Produktivität', 'Robotik', 'Skalierbarkeit']
  },
  {
    id: 's4',
    link: '/services', 
    image: 'https://images.unsplash.com/photo-1580983552077-8d0733568285?auto=format&fit=crop&q=80&w=1200',
    iconKey: 'refresh-cw',
    fallbackTitle: 'Retrofit & Modernisierung',
    fallbackDesc: 'Bringen Sie Ihre bestehenden Anlagen auf den neuesten Stand der Technik mit Steuerungs-Upgrades.',
    tags: ['Modernisierung', 'Effizienz', 'Lebenszyklus']
  },
  {
    id: 's3',
    link: '/services', 
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200',
    iconKey: 'school',
    fallbackTitle: 'Schulung & Training',
    fallbackDesc: 'Zertifizierte Schulungen für Ihr Personal an den neuesten Siemens, Heidenhain und Fanuc Steuerungen.',
    tags: ['Qualifikation', 'Zertifikate', 'Praxiswissen']
  }
];

export const Services: React.FC = () => {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState('s1'); // First item open by default

  // Combine translations with config
  const services = SERVICE_CONFIG.map(config => {
    // Try to get translation, fallback to hardcoded string if key doesn't exist in t.services
    // @ts-ignore
    const title = t.services[`${config.id}_title`] || config.fallbackTitle;
    // @ts-ignore
    const desc = t.services[`${config.id}_desc`] || config.fallbackDesc;
    
    return {
      ...config,
      title,
      desc,
      icon: config.iconKey
    };
  });

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight dark:text-white">
              {t.services.title}
            </h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mb-8"></div>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              Wir begleiten Sie über den gesamten Lebenszyklus Ihrer Maschinen. 
              Wählen Sie einen Bereich, um mehr über unsere Dienstleistungen zu erfahren.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[600px] items-start">
          
          {/* Left Column: Navigation List (Accordion) */}
          <ScrollReveal className="lg:col-span-5 flex flex-col gap-4 h-full">
            {services.map((service) => {
              const Icon = IconMap[service.icon as keyof typeof IconMap];
              const isActive = activeId === service.id;

              return (
                <div 
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  className={`
                    w-full rounded-2xl transition-all duration-500 border cursor-pointer overflow-hidden group flex flex-col
                    ${isActive 
                      ? 'flex-grow bg-slate-50 dark:bg-slate-900 border-red-600/30 dark:border-red-900/30 shadow-md' 
                      : 'flex-none bg-white dark:bg-slate-950 border-gray-100 dark:border-slate-800 hover:border-red-200 dark:hover:border-slate-700'
                    }
                  `}
                >
                  {/* Header Part (Always Visible) */}
                  <div className="px-6 py-4 md:px-8 md:py-4 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-5">
                      <div className={`
                        w-12 h-12 rounded-xl flex items-center justify-center transition-colors shrink-0
                        ${isActive 
                          ? 'bg-red-600 text-white shadow-red-500/20 shadow-lg' 
                          : 'bg-gray-50 dark:bg-slate-800 text-slate-500 dark:text-gray-400 group-hover:text-red-600 group-hover:bg-red-50 dark:group-hover:bg-slate-800'
                        }
                      `}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className={`font-bold uppercase tracking-widest text-sm md:text-base transition-colors ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-gray-200'}`}>
                        {service.title}
                      </h3>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform duration-500 ease-out ${isActive ? 'rotate-90 text-red-600' : 'text-gray-300'}`} />
                  </div>
                  
                  {/* Expanded Content Part */}
                  <div className={`
                    grid transition-[grid-template-rows] duration-500 ease-out flex-1
                    ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                  `}>
                    <div className="overflow-hidden flex flex-col justify-center">
                      <div className="px-6 pb-8 md:px-8 md:pb-10">
                        <div className="pl-16 md:pl-[4.5rem]">
                            <p className="text-gray-500 dark:text-gray-400 text-base leading-loose mb-6">
                              {service.desc}
                            </p>
                            
                            {/* Tags Section */}
                            <div className="flex flex-wrap gap-2 mb-8">
                              {service.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-gray-50 dark:bg-slate-800/50">
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <Link 
                              to={service.link}
                              className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white bg-slate-900 dark:bg-slate-700 hover:bg-red-600 dark:hover:bg-red-600 px-8 py-4 rounded-xl transition-all shadow-md group/btn"
                            >
                              Details ansehen
                              <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollReveal>

          {/* Right Column: Content Preview (Image Only) */}
          <div className="lg:col-span-7 hidden lg:block h-full">
             <div className="h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none border border-gray-100 dark:border-slate-800 bg-slate-900 relative">
                {services.map((service) => (
                  <img 
                    key={service.id}
                    src={service.image} 
                    alt={service.title} 
                    className={`
                      absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out
                      ${activeId === service.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                    `}
                  />
                ))}
                
                {/* Subtle Overlay to ensure depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none z-20"></div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
