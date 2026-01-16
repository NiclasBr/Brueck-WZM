import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Send, CheckCircle2, ChevronRight, Home } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { useUI } from '../contexts/UIContext';
import { ScrollReveal } from '../components/ScrollReveal';

export const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const { openModal } = useUI();
  
  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const handleInquiry = () => {
    openModal({ productId: product.id, productName: product.name });
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Breadcrumb Navigation */}
        <ScrollReveal>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-red-600 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <Link to="/products" className="hover:text-red-600 transition-colors">
              {t.nav.products}
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <span className="text-slate-900 dark:text-white font-medium">{product.name}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Left Column: Image */}
              <div className="relative h-[400px] lg:h-auto bg-gray-100 dark:bg-slate-800 flex items-center justify-center p-12 overflow-hidden group">
                 {product.status === 'sold' && (
                    <div className="absolute top-8 right-8 flex items-center gap-2 bg-white/95 dark:bg-slate-800/95 px-4 py-2 rounded-full shadow-lg border border-red-100 dark:border-red-900 z-30">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest">{t.products.sold}</span>
                    </div>
                 )}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <img 
                   src={product.image} 
                   alt={product.name} 
                   className={`w-full h-full object-contain transition-transform duration-700 hover:scale-105 ${product.status === 'sold' ? 'grayscale opacity-80' : ''}`} 
                 />
              </div>

              {/* Right Column: Details */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col">
                <div className="mb-8">
                  <span className="inline-block py-1 px-3 rounded bg-red-50 dark:bg-red-900/10 text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
                    {product.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    {product.name}
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">
                    {product.longDescription || product.description || "No description available."}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700">
                      <span className="block text-slate-900 dark:text-white font-bold">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                {product.features && product.features.length > 0 && (
                  <div className="mb-10">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-4">Highlights</h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action */}
                <div className="mt-auto pt-8 border-t border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handleInquiry}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-4 px-8 text-sm font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-red-900/30 flex items-center justify-center gap-2"
                  >
                    {t.products.inquiry}
                    <Send className="w-4 h-4" />
                  </button>
                  <Link 
                    to="/contact"
                    className="flex-1 border border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white py-4 px-8 text-sm font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    {t.nav.contact}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};