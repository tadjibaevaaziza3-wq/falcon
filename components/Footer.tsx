
import React from 'react';
import { NavLink } from 'react-router-dom';
import { COMPANY_NAME } from '../constants';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{COMPANY_NAME}</h3>
            <p className="text-sm text-gray-400 mb-4">
              {t.footer.desc}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{t.footer.navTitle}</h3>
            <ul className="space-y-2 text-sm">
              {t.nav.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} className="hover:text-white hover:underline transition-colors">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
             <h3 className="text-white text-lg font-bold mb-4">{t.footer.contactTitle}</h3>
             <ul className="space-y-2 text-sm text-gray-400">
               <li>{t.address}</li>
               <li>Email: falcon_telecom_expert@mail.ru</li>
               <li>Тел: +998 99 833 06 08</li>
               <li className="pt-2">{t.footer.days}: 9:00 - 18:00</li>
             </ul>
          </div>
        </div>

        {/* Copyright and Credits */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. {t.footer.rights}</p>
          <div className="flex items-center gap-1">
             <span>Made by</span>
             <a 
               href="https://co-innovator.uz" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-falcon-400 hover:text-falcon-300 transition-colors font-medium"
             >
               co-innovator.uz
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
