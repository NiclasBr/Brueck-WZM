
import React from 'react';
import { MapPin, Phone, Mail, ArrowRight, Instagram, Linkedin, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-slate-950 text-white pt-24 pb-12 overflow-hidden border-t border-slate-900">
      
      {/* Background Decor Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none z-0 opacity-[0.03]">
          <h1 className="text-[18vw] font-black text-center text-white leading-none tracking-tighter whitespace-nowrap blur-[2px] select-none">
             PRECISION
          </h1>
      </div>
      
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 items-end">
          <div className="space-y-8">
            <div className="w-20 h-20 flex items-center justify-center bg-white rounded-2xl shadow-lg p-2">
               <img src="https://i.ibb.co/mCtxXjHn/logo.png" alt="BW" className="w-full h-full object-contain" />
            </div>
            <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed max-w-lg">
              {t.company.desc.split('.')[0]}.
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
             <h4 className="font-bold uppercase tracking-widest mb-4">Stay Connected</h4>
             <p className="text-gray-400 text-sm mb-6">Abonnieren Sie unseren Newsletter für Updates und Insights.</p>
             <div className="flex gap-2">
               <input 
                 type="email" 
                 placeholder="E-Mail Adresse" 
                 className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-600 transition-colors"
               />
               <button className="bg-red-600 hover:bg-red-700 text-white px-6 rounded-xl flex items-center justify-center transition-colors">
                 <ArrowRight className="w-5 h-5" />
               </button>
             </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16 mb-16">
          
          {/* Products */}
          <div>
            <h4 className="font-bold text-red-600 uppercase tracking-widest mb-8 text-sm">{t.nav.products}</h4>
            <ul className="space-y-4">
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-red-600 transition-all"></span> Milling</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-red-600 transition-all"></span> Turning</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-red-600 transition-all"></span> Automation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-red-600 uppercase tracking-widest mb-8 text-sm">{t.nav.company}</h4>
            <ul className="space-y-4">
              <li><Link to="/company" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-red-600 transition-all"></span> About Us</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-red-600 transition-all"></span> Team</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-red-600 transition-all"></span> News</Link></li>
            </ul>
          </div>

          {/* Legal / Services */}
          <div>
            <h4 className="font-bold text-red-600 uppercase tracking-widest mb-8 text-sm">{t.nav.services}</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-red-600 transition-all"></span> Maintenance</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-red-600 transition-all"></span> Support</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-red-600 transition-all"></span> Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-red-600 uppercase tracking-widest mb-8 text-sm">{t.nav.contact}</h4>
            <ul className="space-y-6 text-gray-400">
              <li className="flex items-start gap-4 group">
                <MapPin className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors mt-1" />
                <span className="text-sm leading-relaxed">{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                <span className="text-sm">+41 44 123 45 67</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                <span className="text-sm">info@brueck-wzm.ch</span>
              </li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
               <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all text-gray-400">
                 <Linkedin className="w-4 h-4" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all text-gray-400">
                 <Instagram className="w-4 h-4" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all text-gray-400">
                 <Facebook className="w-4 h-4" />
               </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-500 font-bold">
          <p>&copy; 2024 Brück WZM AG. {t.footer.rights}</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
