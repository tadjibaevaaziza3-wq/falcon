
import React from 'react';
import { ArrowRight, Activity, Globe, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col font-sans text-gray-800">
      
      {/* 1. HERO SECTION - Energycon Style (Industrial, Bold) */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/2186325/pexels-photo-2186325.jpeg" 
            alt="Telecom Towers Sunset" 
            className="w-full h-full object-cover" 
          />
          {/* Dark Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 mb-6 border-l-4 border-falcon-500 bg-white/10 backdrop-blur-sm">
              <span className="text-falcon-400 font-bold tracking-widest uppercase text-sm">{t.home.since}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              {t.home.heroTitle} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-falcon-400 to-falcon-600">
                {t.home.heroTitleGradient}
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              {t.home.heroDesc}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/projects" 
                className="group relative px-8 py-4 bg-falcon-600 text-white font-bold uppercase tracking-wider overflow-hidden hover:bg-falcon-700 transition-all shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t.home.projectsBtn} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </span>
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-all"
              >
                {t.home.contactBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP - Floating or Sectioned */}
      <section className="bg-falcon-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800 border-x border-gray-800">
            {[
              { num: '5+', label: t.home.stats.years },
              { num: '100+', label: t.home.stats.projects },
              { num: '15+', label: t.home.stats.partners },
              { num: '24/7', label: t.home.stats.support },
            ].map((stat, idx) => (
              <div key={idx} className="py-10 px-6 text-center group hover:bg-gray-800 transition-colors cursor-default">
                <div className="text-4xl md:text-5xl font-extrabold text-falcon-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.num}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE - Split Layout */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image Side */}
            <div className="lg:w-1/2 relative">
              <div className="relative h-[500px] w-full bg-gray-100 rounded-sm overflow-hidden shadow-2xl">
                 <img 
                   src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg" 
                   alt="Engineers working" 
                   className="w-full h-full object-cover"
                 />
                 {/* Decorative Box */}
                 <div className="absolute bottom-0 right-0 bg-falcon-600 w-1/2 h-2"></div>
                 <div className="absolute top-0 left-0 bg-falcon-600 w-2 h-1/2"></div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gray-100 -z-10 hidden md:block pattern-dots"></div>
            </div>

            {/* Text Side */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                 <div className="h-1 w-12 bg-falcon-500"></div>
                 <span className="text-falcon-600 font-bold uppercase tracking-widest text-sm">{t.home.aboutTitle}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                {t.home.aboutHeading}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t.home.aboutText1}
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {t.home.aboutText2}
              </p>
              
              <Link to="/about" className="inline-flex items-center text-falcon-700 font-bold hover:text-falcon-900 transition-colors uppercase tracking-wide border-b-2 border-falcon-200 pb-1 hover:border-falcon-600">
                {t.home.moreAbout} <ChevronRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES / SOLUTIONS - Grid Layout */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.home.solutionsTitle}</h2>
            <p className="text-gray-500 text-lg">{t.home.solutionsSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.list.map((service, idx) => (
              <div key={service.id} className="group bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden border-b-4 border-transparent hover:border-falcon-500 flex flex-col">
                <div className="text-gray-300 absolute -right-4 -top-4 opacity-20 transform rotate-12 group-hover:scale-110 transition-transform">
                  {/* Icon Watermark */}
                  <Activity size={100} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10 pr-2 min-h-[56px] flex items-end">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 relative z-10 flex-grow line-clamp-4">
                  {service.description}
                </p>
                
                <Link to="/services" className="mt-auto inline-flex items-center text-falcon-600 font-semibold hover:text-falcon-800 transition-colors relative z-10 text-sm">
                  {t.home.learnMore} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform"/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION - Industrial Background */}
      <section className="relative py-24 bg-falcon-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg" 
            alt="Connectivity" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{t.home.ctaTitle}</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {t.home.ctaDesc}
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-white text-gray-900 font-bold uppercase tracking-wider hover:bg-falcon-500 hover:text-white transition-all shadow-xl rounded-sm"
          >
            {t.home.ctaBtn}
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
