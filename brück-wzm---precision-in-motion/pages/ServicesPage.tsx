
import React from 'react';
import { Settings, Wrench, ShieldCheck, ArrowRight, Activity, Cpu, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ScrollReveal } from '../components/ScrollReveal';

export const ServicesPage: React.FC = () => {
  const { t } = useLanguage();

  const featuredServices = [
    {
      id: "maintenance",
      title: "Präventive Wartung",
      desc: "Maximale Verfügbarkeit und Lebensdauer Ihrer Maschinen durch unsere vorausschauenden Wartungskonzepte und 24/7 Support.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
    },
    {
      id: "automation",
      title: "Industrielle Automatisierung",
      desc: "Steigern Sie Ihre Produktionskapazitäten mit unseren maßgeschneiderten Robotik- und Automatisierungslösungen.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  const servicesList = [
    {
      icon: Settings,
      title: t.services.s1_title,
      desc: t.services.s1_desc,
      detail: "Unsere präventive Wartung minimiert Ausfallzeiten durch frühzeitige Erkennung von Verschleiß."
    },
    {
      icon: Cpu,
      title: t.services.s2_title,
      desc: t.services.s2_desc,
      detail: "Vollautomatische Be- und Entladesysteme, die nahtlos in Ihre Produktionslinie integriert werden."
    },
    {
      icon: GraduationCap,
      title: t.services.s3_title,
      desc: t.services.s3_desc,
      detail: "Zertifizierte Schulungen für Siemens 840D sl, Heidenhain TNC 640 und Fanuc Steuerungen."
    },
    {
      icon: Wrench,
      title: "Reparatur",
      desc: "Schnelle Reaktionszeiten bei Maschinenausfällen.",
      detail: "Unser Serviceteam ist innerhalb von 24h vor Ort in der gesamten DACH-Region."
    },
    {
      icon: Activity,
      title: "Prozessoptimierung",
      desc: "Analyse und Verbesserung Ihrer Zykluszeiten.",
      detail: "Wir analysieren Ihre NC-Programme und Werkzeugwege für maximale Effizienz."
    },
    {
      icon: ShieldCheck,
      title: "Retrofit",
      desc: "Modernisierung bestehender Anlagen.",
      detail: "Bringen Sie Ihre alten Maschinen auf den neuesten Stand der Technik mit neuen Steuerungen."
    }
  ];

  return (
    <div className="pt-48 pb-24 min-h-screen bg-gray-50 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center max-w-2xl mx-auto">
           <ScrollReveal>
             <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight dark:text-white">{t.nav.services}</h1>
             <p className="text-gray-500 dark:text-gray-400 text-lg">
               Wir bieten mehr als nur Maschinen. Unser umfassendes Service-Portfolio garantiert Ihre Produktivität über den gesamten Lebenszyklus.
             </p>
           </ScrollReveal>
        </div>

        {/* Featured Interactive Cards */}
        <ScrollReveal className="mb-24">
          <div className="flex flex-col lg:flex-row gap-6 h-[600px] lg:h-[500px]">
            {featuredServices.map((service, index) => (
              <Link 
                to={`/services/${service.id}`}
                key={index} 
                className="group relative flex-1 hover:flex-[2.5] transition-all duration-700 ease-in-out rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl shadow-slate-900/10 dark:shadow-none"
              >
                {/* Background Image */}
                <div className="absolute inset-0 bg-slate-900">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out" 
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out will-change-transform">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{service.title}</h3>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out">
                      <div className="overflow-hidden">
                        <p className="text-gray-200 text-sm md:text-base max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pb-2">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-red-600 transition-all duration-500 shadow-lg">
                   <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100} className="h-full">
              <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-lg shadow-slate-200/60 dark:shadow-none hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full">
                <div className="w-14 h-14 bg-red-50 dark:bg-red-900/10 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{service.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <div className="pt-6 border-t border-gray-100 dark:border-slate-800 mt-auto">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{service.detail}</p>
                  <button className="text-red-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2 group/btn">
                    Mehr erfahren <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};
