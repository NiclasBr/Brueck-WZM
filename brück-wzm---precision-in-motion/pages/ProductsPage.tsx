
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Send, Filter, X, Check } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { ScrollReveal } from '../components/ScrollReveal';
import { useUI } from '../contexts/UIContext';

export const ProductsPage: React.FC = () => {
  const { t } = useLanguage();
  const { openModal } = useUI();
  const { category: categoryParam } = useParams<{ category: string }>();

  // Filter States
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Mobile filter toggle

  // Initialize filters based on URL param
  useEffect(() => {
    if (categoryParam) {
      // Map URL params to systemTypes
      const validCategories = ['milling', 'turning', 'automation'];
      if (validCategories.includes(categoryParam)) {
         setSelectedCategories([categoryParam]);
      }
    } else {
      setSelectedCategories([]);
    }
  }, [categoryParam]);

  // Derived Filter Options
  const categories = [
    { id: 'milling', label: 'Frästechnologie (Milling)' },
    { id: 'turning', label: 'Drehzentren (Turning)' },
    { id: 'automation', label: 'Automation' },
  ];

  const statuses = [
    { id: 'available', label: 'Verfügbar (Available)' },
    { id: 'sold', label: 'Verkauft (Sold)' },
  ];

  const features = [
    { id: '5-Axis', label: '5-Axis' },
    { id: 'Control', label: 'Smart Control' }, // Matches "Celos Control", "SmoothAi"
    { id: 'Fiber', label: 'Fiber Laser' },
  ];

  const filteredProducts = PRODUCTS.filter(p => {
    // 1. Category Filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(p.systemType)) {
      return false;
    }

    // 2. Status Filter
    if (selectedStatus.length > 0) {
      const pStatus = p.status || 'available'; 
      if (!selectedStatus.includes(pStatus)) return false;
    }

    // 3. Feature Filter
    if (selectedFeatures.length > 0) {
      const allText = [...p.specs, ...(p.features || [])].join(' ').toLowerCase();
      const hasMatch = selectedFeatures.some(f => allText.includes(f.toLowerCase()));
      if (!hasMatch) return false;
    }

    return true;
  });

  const toggleFilter = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setter(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };

  return (
    <div className="pt-48 pb-24 min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight dark:text-white">
              {categoryParam ? categories.find(c => c.id === categoryParam)?.label || t.nav.products : t.nav.products}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl">{t.products.desc}</p>
          </ScrollReveal>
          
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden flex items-center gap-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 px-6 py-3 rounded-xl font-bold uppercase text-sm shadow-sm"
          >
            <Filter className="w-5 h-5" /> Filter
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* Sidebar Filters */}
          <aside className={`
            fixed inset-y-0 left-0 z-40 w-80 bg-white dark:bg-slate-900 shadow-2xl transform transition-transform duration-300 lg:translate-x-0 lg:static lg:w-72 lg:shadow-none lg:bg-transparent lg:dark:bg-transparent lg:block
            ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <div className="h-full overflow-y-auto p-8 lg:p-0 lg:overflow-visible">
              <div className="flex items-center justify-between lg:hidden mb-10">
                <h3 className="font-bold text-2xl dark:text-white">Filter</h3>
                <button onClick={() => setIsFilterOpen(false)}><X className="w-8 h-8 dark:text-white" /></button>
              </div>

              {/* Category Filter */}
              <div className="mb-10">
                <h4 className="font-bold uppercase tracking-widest text-base mb-6 text-slate-900 dark:text-white">Kategorie</h4>
                <div className="space-y-4">
                  {categories.map(cat => (
                    <label key={cat.id} className="flex items-center gap-4 cursor-pointer group">
                      <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${selectedCategories.includes(cat.id) ? 'bg-red-600 border-red-600 text-white' : 'bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700'}`}>
                         {selectedCategories.includes(cat.id) && <Check className="w-4 h-4" />}
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={selectedCategories.includes(cat.id)} 
                        onChange={() => toggleFilter(setSelectedCategories, cat.id)} 
                      />
                      <span className={`text-base group-hover:text-red-600 transition-colors ${selectedCategories.includes(cat.id) ? 'font-bold text-slate-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                        {cat.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div className="mb-10">
                <h4 className="font-bold uppercase tracking-widest text-base mb-6 text-slate-900 dark:text-white">Status</h4>
                <div className="space-y-4">
                  {statuses.map(st => (
                    <label key={st.id} className="flex items-center gap-4 cursor-pointer group">
                      <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${selectedStatus.includes(st.id) ? 'bg-red-600 border-red-600 text-white' : 'bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700'}`}>
                         {selectedStatus.includes(st.id) && <Check className="w-4 h-4" />}
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={selectedStatus.includes(st.id)} 
                        onChange={() => toggleFilter(setSelectedStatus, st.id)} 
                      />
                      <span className={`text-base group-hover:text-red-600 transition-colors ${selectedStatus.includes(st.id) ? 'font-bold text-slate-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                        {st.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Characteristics Filter */}
              <div className="mb-10">
                <h4 className="font-bold uppercase tracking-widest text-base mb-6 text-slate-900 dark:text-white">Eigenschaften</h4>
                <div className="space-y-4">
                  {features.map(feat => (
                    <label key={feat.id} className="flex items-center gap-4 cursor-pointer group">
                      <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${selectedFeatures.includes(feat.id) ? 'bg-red-600 border-red-600 text-white' : 'bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700'}`}>
                         {selectedFeatures.includes(feat.id) && <Check className="w-4 h-4" />}
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={selectedFeatures.includes(feat.id)} 
                        onChange={() => toggleFilter(setSelectedFeatures, feat.id)} 
                      />
                      <span className={`text-base group-hover:text-red-600 transition-colors ${selectedFeatures.includes(feat.id) ? 'font-bold text-slate-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                        {feat.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategories.length > 0 || selectedStatus.length > 0 || selectedFeatures.length > 0) && (
                <button 
                  onClick={() => { setSelectedCategories([]); setSelectedStatus([]); setSelectedFeatures([]); }}
                  className="text-sm font-bold text-red-600 uppercase tracking-widest hover:text-red-700"
                >
                  Filter zurücksetzen
                </button>
              )}

            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            {filteredProducts.length === 0 ? (
               <div className="text-center py-24 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none">
                 <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">Keine Maschinen gefunden, die den Kriterien entsprechen.</p>
                 <button 
                    onClick={() => { setSelectedCategories([]); setSelectedStatus([]); setSelectedFeatures([]); }}
                    className="text-red-600 font-bold uppercase text-sm tracking-widest hover:text-red-700"
                 >
                   Alle Filter löschen
                 </button>
               </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProducts.map((p, index) => (
                  <ScrollReveal key={p.id} delay={index * 50} className="h-full">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg shadow-slate-200/60 dark:shadow-none hover:shadow-xl hover:shadow-slate-300/60 dark:hover:shadow-black/50 hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-slate-800 group flex flex-col h-full">
                      <Link 
                        to={`/products/${p.id}`}
                        className="relative h-64 p-8 bg-gray-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden cursor-pointer"
                      >
                        {p.status === 'sold' && (
                            <div className="absolute top-6 right-6 bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest z-10">
                              {t.products.sold}
                            </div>
                        )}
                        <img src={p.image} alt={p.name} className={`w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 ${p.status === 'sold' ? 'grayscale opacity-70' : ''}`} />
                      </Link>
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-4">
                           <span className="text-red-600 text-sm font-bold uppercase tracking-widest">{p.category}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-6 dark:text-white line-clamp-1">{p.name}</h3>
                        <div className="flex flex-wrap gap-3 mb-10">
                          {p.specs.slice(0, 2).map((s, i) => (
                            <span key={i} className="text-sm bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-lg border border-gray-100 dark:border-slate-700 font-medium">{s}</span>
                          ))}
                        </div>
                        <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-gray-100 dark:border-slate-800 pt-8 gap-4">
                          <Link to={`/products/${p.id}`} className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-red-600 dark:text-white dark:hover:text-red-600 transition-colors">
                            {t.products.details} <ArrowRight className="w-5 h-5" />
                          </Link>
                          <button 
                            onClick={() => openModal({ productId: p.id, productName: p.name })}
                            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-red-600/20"
                          >
                            {t.products.inquiry}
                            <Send className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
      
      {/* Mobile Filter Overlay Backdrop */}
      {isFilterOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsFilterOpen(false)}
        />
      )}
    </div>
  );
};
