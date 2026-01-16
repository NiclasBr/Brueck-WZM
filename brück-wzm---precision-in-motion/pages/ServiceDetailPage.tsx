
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ChevronRight, Home, CheckCircle2, Send, ArrowRight } from 'lucide-react';
import { SERVICE_DETAILS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { useUI } from '../contexts/UIContext';
import { ScrollReveal } from '../components/ScrollReveal';

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { t } = useLanguage();
  const { openModal } = useUI();

  const service = serviceId ? SERVICE_DETAILS[serviceId] : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const handleInquiry = () => {
    openModal({ productId: 0, productName: `Service: ${service.title}` });
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-500">
      
      {/* Hero Image Section */}
      <div className="relative h-[400px] w-full overflow-hidden mb-12 group">
        <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20 bg-gradient-to-t from-black/80 to-transparent">
          <div className="container mx-auto">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase tracking-tight">{service.title}</h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl">{service.subtitle}</p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        
        {/* Breadcrumbs */}
        <ScrollReveal>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-12 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-red-600 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <Link to="/services" className="hover:text-red-600 transition-colors">
              {t.nav.services}
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <span className="text-slate-900 dark:text-white font-medium">{service.title}</span>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
             <ScrollReveal delay={100}>
               <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white uppercase tracking-tight">Leistungsbeschreibung</h2>
               <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-10">
                 {service.description}
               </p>

               <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white uppercase tracking-tight">Leistungsumfang</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                 {service.features.map((feature, idx) => (
                   <div key={idx} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800 flex items-start gap-3 shadow-sm">
                     <CheckCircle2 className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                     <span className="text-slate-800 dark:text-gray-200 font-medium">{feature}</span>
                   </div>
                 ))}
               </div>
             </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
             {/* Benefits Box */}
             <ScrollReveal delay={200}>
               <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
                 <h3 className="text-xl font-bold mb-6 uppercase tracking-widest border-b border-white/20 pb-4">Ihre Vorteile</h3>
                 <div className="space-y-6">
                   {service.benefits.map((benefit, idx) => (
                     <div key={idx}>
                       <h4 className="font-bold text-red-500 mb-1">{benefit.title}</h4>
                       <p className="text-sm text-gray-300 leading-relaxed">{benefit.desc}</p>
                     </div>
                   ))}
                 </div>
               </div>
             </ScrollReveal>

             {/* CTA Box */}
             <ScrollReveal delay={300}>
               <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm">
                 <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Interesse geweckt?</h3>
                 <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                   Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch zu {service.title}.
                 </p>
                 <button 
                    onClick={handleInquiry}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-sm font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-red-900/30 flex items-center justify-center gap-2 mb-4"
                  >
                    Anfrage Senden
                    <Send className="w-4 h-4" />
                  </button>
                  <Link 
                    to="/contact"
                    className="w-full border border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white py-4 text-sm font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    Kontakt
                    <ArrowRight className="w-4 h-4" />
                  </Link>
               </div>
             </ScrollReveal>
          </div>

        </div>
      </div>
    </div>
  );
};
