
import React from 'react';
import { Building2, Users, Trophy } from 'lucide-react';
import { MAIN_PARTNERS, CAROUSEL_PARTNERS } from '../constants';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  // Helper to determine padding based on logo needs
  const getLogoPadding = (name: string) => {
    const bigLogos = [
      'SOLA', 
      'OOO «ONE-NET»', 
      'OOO «TELECON ENGINEERING»',
      'OOO «AERO-YO’L LOYIHA»', // "Bird" logo
      'ЧП "TURON MEDIA"'
    ];
    return bigLogos.includes(name) ? 'p-0' : 'p-3';
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-falcon-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{t.about.headerTitle}</h1>
          <p className="mt-2 text-falcon-100 text-lg">{t.about.headerSub}</p>
        </div>
      </div>

      {/* Big Telecom Industry Photo */}
      <div className="w-full h-[500px] relative overflow-hidden group">
         <img 
           src="https://images.pexels.com/photos/33898005/pexels-photo-33898005.jpeg" 
           alt="Telecom Industry View" 
           className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
         <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg max-w-4xl">
                {t.about.heroTitle}
              </h2>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Content - Bigger Font */}
          <div className="lg:w-2/3">
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 border-b-4 border-falcon-500 pb-4 inline-block">
              {t.about.formationTitle}
            </h3>
            <div className="space-y-8 text-xl md:text-2xl text-gray-700 leading-relaxed font-medium text-justify">
              <p>{t.about.formationText1}</p>
              <p>{t.about.formationText2}</p>
              <p>{t.about.formationText3}</p>
            </div>
          </div>

          {/* Stats / Visuals */}
          <div className="lg:w-1/3 flex flex-col gap-8 sticky top-24">
            <div className="bg-white p-8 rounded-2xl border-l-8 border-falcon-500 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center">
                <Building2 className="text-falcon-600 h-12 w-12 mr-6" />
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">{t.about.stats.sinceTitle}</h4>
                  <p className="text-lg text-gray-600">{t.about.stats.sinceDesc}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border-l-8 border-falcon-500 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center">
                <Users className="text-falcon-600 h-12 w-12 mr-6" />
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">{t.about.stats.partnersTitle}</h4>
                  <p className="text-lg text-gray-600">{t.about.stats.partnersDesc}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-l-8 border-falcon-500 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center">
                <Trophy className="text-falcon-600 h-12 w-12 mr-6" />
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">{t.about.stats.shaffofTitle}</h4>
                  <p className="text-lg text-gray-600">{t.about.stats.shaffofDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-20 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">{t.about.partnersTitle}</h2>
          <p className="mt-4 text-xl text-gray-500">{t.about.partnersDesc}</p>
        </div>

        {/* Main Partners (Static) */}
        <div className="max-w-5xl mx-auto px-4 mb-20">
           <h3 className="text-center text-2xl font-bold text-falcon-600 mb-10 uppercase tracking-wide">{t.about.genPartners}</h3>
           <div className="flex flex-wrap justify-center gap-12">
              {MAIN_PARTNERS.map((partner, index) => (
                <div 
                  key={`main-${index}`}
                  className="bg-white p-10 rounded-3xl shadow-xl border-2 border-falcon-100 flex flex-col items-center justify-center w-80 h-64 transform hover:scale-105 transition-transform duration-300 group"
                >
                   <img src={partner.logoUrl} alt={partner.name} className="h-40 w-full object-contain filter group-hover:brightness-110 transition-all" />
                </div>
              ))}
           </div>
        </div>

        {/* Other Partners (Carousel) */}
        <div className="relative w-full border-t border-gray-200 pt-16">
          <h3 className="text-center text-xl font-semibold text-gray-500 mb-10">{t.about.otherPartners}</h3>
          <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
            {/* First set of partners */}
            <div className="flex gap-10 px-4">
              {CAROUSEL_PARTNERS.map((partner, index) => (
                <div 
                  key={`p1-${index}`} 
                  className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-md border border-gray-200 w-72 h-48 hover:shadow-xl transition-shadow group"
                >
                  {/* Logo Container - Circular, centered, fits logo inside */}
                  <div className={`h-20 w-20 mb-4 rounded-full bg-white border-2 border-falcon-50 flex items-center justify-center overflow-hidden ${getLogoPadding(partner.name)} shadow-sm group-hover:border-falcon-200 transition-colors`}>
                    <img 
                      src={partner.logoUrl} 
                      alt={partner.name} 
                      className="w-full h-full object-contain object-center" 
                    />
                  </div>
                  <p className="text-sm text-center font-bold text-gray-800 line-clamp-3">{partner.name}</p>
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless scrolling */}
            <div className="flex gap-10 px-4">
              {CAROUSEL_PARTNERS.map((partner, index) => (
                <div 
                  key={`p2-${index}`} 
                  className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-md border border-gray-200 w-72 h-48 hover:shadow-xl transition-shadow group"
                >
                   <div className={`h-20 w-20 mb-4 rounded-full bg-white border-2 border-falcon-50 flex items-center justify-center overflow-hidden ${getLogoPadding(partner.name)} shadow-sm group-hover:border-falcon-200 transition-colors`}>
                    <img 
                      src={partner.logoUrl} 
                      alt={partner.name} 
                      className="w-full h-full object-contain object-center" 
                    />
                  </div>
                  <p className="text-sm text-center font-bold text-gray-800 line-clamp-3">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
