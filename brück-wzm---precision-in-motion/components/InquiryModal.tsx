import React from 'react';
import { X, Send, Package } from 'lucide-react';
import { useUI } from '../contexts/UIContext';
import { useLanguage } from '../contexts/LanguageContext';

export const InquiryModal: React.FC = () => {
  const { isModalOpen, modalData, closeModal } = useUI();
  const { t } = useLanguage();

  if (!isModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      alert("Inquiry sent successfully!");
      closeModal();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={closeModal}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-slate-800">
          <h3 className="text-xl font-bold uppercase tracking-tight dark:text-white">
            {t.contact.modalTitle}
          </h3>
          <button 
            onClick={closeModal}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors text-gray-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product Reference */}
        {modalData && (
          <div className="bg-gray-50 dark:bg-slate-800/50 px-6 py-4 flex items-center gap-3 border-b border-gray-100 dark:border-slate-800">
            <div className="p-2 bg-red-100 dark:bg-red-900/20 text-red-600 rounded-lg">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">{t.contact.productRef}</p>
              <p className="font-bold text-slate-900 dark:text-white">{modalData.productName} <span className="text-gray-400 font-mono text-xs">(ID: {modalData.productId})</span></p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
              {t.contact.name}
            </label>
            <input 
              required 
              type="text" 
              className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-red-500 dark:focus:border-red-500 transition-colors dark:text-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
              {t.contact.email}
            </label>
            <input 
              required 
              type="email" 
              className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-red-500 dark:focus:border-red-500 transition-colors dark:text-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
              {t.contact.message}
            </label>
            <textarea 
              required 
              rows={4} 
              className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-red-500 dark:focus:border-red-500 transition-colors dark:text-white"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all rounded-xl shadow-lg hover:shadow-red-900/50 flex items-center justify-center gap-2 mt-4"
          >
            {t.contact.send}
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};