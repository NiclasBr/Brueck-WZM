
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavItem {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
}

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  // Define navigation structure with translations
  const navItems: NavItem[] = [
    { 
      label: t.nav.products, 
      to: '/products',
      children: [
        { label: t.nav_sub.prod_milling, to: '/products/category/milling' },
        { label: t.nav_sub.prod_turning, to: '/products/category/turning' },
        { label: t.nav_sub.prod_automation, to: '/products/category/automation' },
        { label: t.nav_sub.prod_all, to: '/products' }, // Parent path match -> Overview link
      ]
    },
    { 
      label: t.nav.services, 
      to: '/services',
      // No children for services
    },
    { 
      label: t.nav.company, 
      to: '/company',
      children: [
        { label: t.nav_sub.comp_team, to: '/team' },
        { label: t.nav_sub.comp_news, to: '/blog' },
        { label: t.nav_sub.comp_overview, to: '/company' }, // Parent path match -> Overview link
      ]
    },
    { label: t.nav.contact, to: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth < 1024;
      const isHome = location.pathname === '/';
      
      const triggerPoint = isHome ? window.innerHeight - 100 : 50;
      
      if (scrollY > triggerPoint || isMobile) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsMenuOpen(false);
      }
    };

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [location.pathname]);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  // Styles
  const isHome = location.pathname === '/';
  
  // Dynamic Background and Border colors
  let bgClass = "";
  let borderClass = "";
  let textClass = "text-white";
  
  if (isScrolled) {
    bgClass = "bg-slate-900/80 dark:bg-slate-900/90";
    borderClass = "border-white/10"; // Visible subtle border for scrolled state
  } else if (isHome) {
    bgClass = "bg-white/10";
    borderClass = "border-white/20"; // Slightly stronger for home video bg
  } else {
    // Non-home, unscrolled
    bgClass = "bg-slate-900/80 dark:bg-slate-900/80";
    borderClass = "border-white/10 dark:border-white/20";
  }

  // Base layout classes with explicit borders (bottom and x-axis, no top)
  const baseClasses = "fixed top-0 z-50 transition-all duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1) left-1/2 -translate-x-1/2 flex items-center overflow-visible border-b border-x border-t-0 justify-between backdrop-blur-md";
  const shapeClasses = "rounded-b-[40px] rounded-t-none shadow-lg";
  const sizeClasses = isScrolled 
    ? "h-24 w-[95%] max-w-[340px] px-6" 
    : "h-24 w-[95%] md:w-full md:container px-6";

  const getNavbarClasses = () => {
    return `${baseClasses} ${shapeClasses} ${sizeClasses} ${bgClass} ${borderClass} ${textClass}`;
  };

  return (
    <nav className={getNavbarClasses()}>
      
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-4 shrink-0 relative z-20">
        <div className="flex items-center justify-center overflow-hidden bg-white rounded-xl transition-all duration-500 shrink-0 shadow-md w-[60px] h-[60px]">
          <img src="https://i.ibb.co/mCtxXjHn/logo.png" alt="BW" className="w-full h-full object-contain p-1.5" />
        </div>
        
        <div className={`overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out ${isScrolled ? 'max-w-0 opacity-0' : 'max-w-[240px] opacity-100'}`}>
          <span className="text-xl md:text-2xl font-bold tracking-widest uppercase text-white">Brück WZM</span>
        </div>
      </Link>

      {/* Desktop Navigation with Dropdowns */}
      <div className={`hidden lg:flex items-center justify-center gap-8 font-bold tracking-widest transition-all duration-1000 ease-in-out ${isScrolled ? 'opacity-0 max-w-0 pointer-events-none' : 'opacity-100 max-w-2xl flex-grow'}`}>
        {navItems.map((item, index) => (
          <div key={index} className="relative group">
            <Link 
              to={item.to} 
              className={`hover:text-red-500 transition-colors uppercase relative flex items-center gap-1 py-4 ${location.pathname.startsWith(item.to) && item.to !== '/' ? 'text-red-500' : 'text-current'}`}
            >
              {item.label}
              {item.children && <ChevronDown className="w-4 h-4 mt-[-2px] opacity-70 group-hover:opacity-100 transition-opacity" />}
              <span className={`absolute bottom-3 left-0 h-0.5 bg-red-600 transition-all ${location.pathname.startsWith(item.to) && item.to !== '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            {/* Dropdown Menu */}
            {item.children && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-slate-900 dark:bg-slate-800 border border-white/10 rounded-xl shadow-xl overflow-hidden min-w-[220px] py-2">
                  {item.children
                    .filter(child => child.to !== item.to) // HIDE overview links (same path as parent) in desktop dropdown
                    .map((child, cIdx) => (
                    <Link 
                      key={cIdx} 
                      to={child.to}
                      className="block px-6 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors uppercase tracking-widest whitespace-nowrap"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3 shrink-0 relative z-20">
          <div className={`h-8 w-px bg-white/20 transition-all duration-500 ${isScrolled ? 'block mx-0' : 'hidden sm:block mx-2'}`}></div>

          <button 
            onClick={toggleDarkMode} 
            className={`flex items-center justify-center hover:text-red-500 transition-colors rounded-full border backdrop-blur-sm shrink-0
              ${isScrolled 
                ? 'w-10 h-10 border-white/10 bg-transparent' 
                : 'w-10 h-10 border-white/20 bg-white/10 hover:bg-white/20'
              }`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button 
            onClick={toggleLanguage} 
            className={`flex items-center justify-center hover:text-red-500 transition-colors font-bold rounded-full border backdrop-blur-sm shrink-0
              ${isScrolled 
                ? 'h-10 px-3 border-white/10 bg-transparent' 
                : 'h-10 px-5 border-white/20 bg-white/10 hover:bg-white/20 shadow-sm'
              }`}
          >
             <span className="uppercase text-sm">{language}</span>
          </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex items-center justify-center rounded-full transition-colors border shrink-0
              ${isScrolled 
                ? 'w-10 h-10 border-white/10 bg-transparent hover:bg-white/10' 
                : 'lg:hidden w-10 h-10 border-white/20 bg-white/10 hover:bg-white/20 shadow-sm'
              }`}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
      </div>

      {/* Mobile/Compact Menu Accordion */}
      <div className={`absolute top-full left-0 mt-3 w-full bg-slate-900 dark:bg-slate-800 rounded-2xl shadow-2xl text-white border border-white/10 overflow-hidden transition-all duration-300 origin-top z-50 max-h-[80vh] overflow-y-auto ${isMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}>
        <div className="flex flex-col py-4 px-4">
           {navItems.map((item, index) => (
             <div key={index} className="border-b border-white/5 last:border-0">
               {item.children ? (
                 <>
                   <div 
                     onClick={() => toggleSubmenu(item.label)}
                     className="flex items-center justify-between py-4 w-full cursor-pointer hover:text-red-500 transition-colors"
                   >
                     <span className="uppercase font-bold tracking-widest text-base">{item.label}</span>
                     <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openSubmenu === item.label ? 'rotate-180 text-red-500' : ''}`} />
                   </div>
                   <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubmenu === item.label ? 'max-h-80 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                     <div className="flex flex-col gap-2 pl-4 border-l border-white/10 ml-1">
                       {/* Standard Sub-items */}
                       {item.children
                         .filter(child => child.to !== item.to)
                         .map((child, cIdx) => (
                         <Link 
                           key={cIdx} 
                           to={child.to} 
                           onClick={() => setIsMenuOpen(false)}
                           className="py-2 text-sm text-gray-400 hover:text-white uppercase tracking-wider flex items-center gap-2"
                         >
                           <ChevronRight className="w-3 h-3 text-red-500" />
                           {child.label}
                         </Link>
                       ))}
                       
                       {/* Overview Item (Red, Arrow, at the bottom) */}
                       {item.children
                         .filter(child => child.to === item.to)
                         .map((child, cIdx) => (
                           <Link 
                             key={`overview-${cIdx}`} 
                             to={child.to} 
                             onClick={() => setIsMenuOpen(false)}
                             className="py-2 text-sm text-red-500 hover:text-red-400 uppercase tracking-widest font-bold mt-2 flex items-center gap-2"
                           >
                             <ArrowRight className="w-4 h-4" />
                             {child.label}
                           </Link>
                       ))}
                     </div>
                   </div>
                 </>
               ) : (
                 <Link 
                   to={item.to} 
                   onClick={() => setIsMenuOpen(false)} 
                   className="flex items-center py-4 w-full uppercase font-bold tracking-widest text-base hover:text-red-500 transition-colors"
                 >
                   {item.label}
                 </Link>
               )}
             </div>
           ))}
        </div>
      </div>
    </nav>
  );
};
