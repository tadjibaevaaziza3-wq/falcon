
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

// Social Icons Components
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`text-[#229ED9] ${className}`} xmlns="http://www.w3.org/2000/svg">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`text-[#25D366] ${className}`} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'uz' : 'ru');
  };

  return (
    <nav className="bg-white text-gray-800 sticky top-0 z-50 shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Bar (Desktop) */}
        <div className="hidden md:flex justify-between items-center py-2 text-xs text-gray-500 border-b border-gray-100">
          <div className="flex items-center space-x-4">
             <Link to="/contact" className="flex items-center gap-1 hover:text-falcon-600 transition-colors cursor-pointer"><Mail size={12} /> falcon_telecom_expert@mail.ru</Link>
             <span className="flex items-center gap-1 hover:text-falcon-600 transition-colors"><Phone size={12} /> +998 99 833 06 08</span>
             {/* Social Icons */}
             <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
               <a href="https://t.me/hayrulla1980" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" title="Telegram">
                 <TelegramIcon className="w-4 h-4" />
               </a>
               <a href="https://wa.me/998998330608" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" title="WhatsApp">
                 <WhatsAppIcon className="w-4 h-4" />
               </a>
             </div>
          </div>
          <div className="flex items-center gap-4">
            <div>{t.address}</div>
            <button 
              onClick={toggleLanguage}
              className="font-bold px-2 py-0.5 rounded border border-gray-300 hover:bg-falcon-50 hover:border-falcon-300 transition-all flex items-center gap-1 uppercase"
              title="Switch Language / Tilni o'zgartirish"
            >
              <span className={language === 'ru' ? 'text-falcon-600' : 'text-gray-400'}>RU</span>
              <span className="text-gray-300">|</span>
              <span className={language === 'uz' ? 'text-falcon-600' : 'text-gray-400'}>UZ</span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-4 group">
            {/* Custom Logo SVG approximating the provided image */}
            <div className="h-14 w-14 relative flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
               <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Stylized F Logo */}
                  {/* Top Black Triangle/Trapezoid */}
                  <path d="M5 15 H95 L65 45 H35 Z" fill="#000000" />
                  {/* Gold F-Stem and Arm (falcon-600) */}
                  <path d="M20 20 V90 H45 V65 H70 L80 50 H45 V40 L20 20 Z" fill="#d97706" />
                  {/* Network dots decoration (simplified) */}
                  <circle cx="85" cy="25" r="3" fill="#9ca3af" />
                  <circle cx="95" cy="40" r="3" fill="#9ca3af" />
                  <path d="M85 25 L95 40" stroke="#9ca3af" strokeWidth="1" />
               </svg>
            </div>
            
            <div className="flex flex-col justify-center">
              <span className="font-serif font-bold text-3xl text-falcon-900 leading-none tracking-tight group-hover:text-falcon-700 transition-colors">Falcon</span>
              <span className="text-[10px] text-gray-600 tracking-[0.3em] uppercase font-sans mt-1">Telecom Expert</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {t.nav.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                      isActive
                        ? 'text-falcon-600 border-falcon-600'
                        : 'text-gray-600 border-transparent hover:text-falcon-600 hover:border-falcon-300'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button & Lang Switch */}
          <div className="-mr-2 flex items-center md:hidden gap-4">
             <button 
              onClick={toggleLanguage}
              className="font-bold px-2 py-1 rounded border border-gray-300 text-xs flex items-center gap-1 uppercase"
            >
              <span className={language === 'ru' ? 'text-falcon-600' : 'text-gray-400'}>RU</span>
              <span className="text-gray-300">/</span>
              <span className={language === 'uz' ? 'text-falcon-600' : 'text-gray-400'}>UZ</span>
            </button>
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-falcon-600 hover:bg-gray-200 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg absolute w-full left-0 z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {t.nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-falcon-50 text-falcon-900' : 'text-gray-600 hover:bg-gray-50 hover:text-falcon-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          {/* Mobile Social Links */}
          <div className="flex justify-center gap-6 py-4 border-t border-gray-100">
             <a href="https://t.me/hayrulla1980" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600">
                <TelegramIcon className="w-5 h-5" /> Telegram
             </a>
             <a href="https://wa.me/998998330608" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600">
                <WhatsAppIcon className="w-5 h-5" /> WhatsApp
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
