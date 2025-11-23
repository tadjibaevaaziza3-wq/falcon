
import React, { useState } from 'react';
import { LICENSES } from '../constants';
import { LicensePageData } from '../types';
import { useLanguage } from '../LanguageContext';

// Realistic SVG QR Code Component
const QRCode: React.FC = () => (
  <svg viewBox="0 0 45 45" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="45" height="45" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M5 5H15V15H5V5ZM0 0V20H20V0H0ZM7 7H13V13H7V7Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M30 5H40V15H30V5ZM25 0V20H45V0H25ZM32 7H38V13H32V7Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M5 30H15V40H5V30ZM0 25V45H20V25H0ZM7 32H13V38H7V32Z" fill="black"/>
    <rect x="22" y="22" width="3" height="3" fill="black"/>
    <rect x="25" y="25" width="3" height="3" fill="black"/>
    <rect x="28" y="22" width="3" height="3" fill="black"/>
    <rect x="22" y="28" width="3" height="3" fill="black"/>
    <rect x="35" y="35" width="3" height="3" fill="black"/>
    <rect x="38" y="32" width="3" height="3" fill="black"/>
    <rect x="32" y="38" width="3" height="3" fill="black"/>
    <rect x="35" y="25" width="3" height="3" fill="black"/>
    <rect x="25" y="35" width="3" height="3" fill="black"/>
    <rect x="5" y="22" width="3" height="3" fill="black"/>
    <rect x="15" y="22" width="3" height="3" fill="black"/>
    <rect x="22" y="5" width="3" height="3" fill="black"/>
    <rect x="30" y="30" width="3" height="3" fill="black"/>
    <rect x="40" y="40" width="3" height="3" fill="black"/>
    <rect x="40" y="25" width="3" height="3" fill="black"/>
    <rect x="25" y="40" width="3" height="3" fill="black"/>
    <rect x="10" y="22" width="3" height="3" fill="black"/>
  </svg>
);

// Uzbekistan Coat of Arms Simulation
const Emblem: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`rounded-full border border-gray-300 flex items-center justify-center overflow-hidden bg-white ${className}`}>
    <div className="w-[80%] h-[80%] bg-blue-100 rounded-full flex flex-col items-center justify-center relative shadow-inner">
       <div className="w-[60%] h-[60%] bg-green-100 rounded-full flex items-center justify-center shadow-sm">
          <div className="text-[4px] font-bold text-gray-600">UZB</div>
       </div>
       <div className="absolute top-0 w-full h-1/2 bg-blue-200 opacity-20 rounded-t-full"></div>
    </div>
  </div>
);

// Layout for "Guvohnoma" (Registration Certificate)
const GuvohnomaLayout: React.FC<{ data: LicensePageData }> = ({ data }) => (
  <div className="relative w-full h-full p-8 flex flex-col text-gray-900 font-serif leading-tight bg-white">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
         style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '8px 8px' }}></div>
    
    <div className="relative z-10 flex flex-col items-center mb-6">
      <div className="text-[10px] text-gray-500 mb-4 w-full flex justify-between">
        <span>{data.content?.date}</span>
        <span>Davlat xizmatlari markazi</span>
      </div>
      <Emblem className="w-16 h-16 mb-4" />
      <div className="text-right w-full text-[10px] font-bold mb-2 pr-4">{data.content?.registryNumber}</div>
      
      <h2 className="text-center text-[11px] font-bold max-w-[80%] mb-1">
        Yuridik shaxs (tadbirkorlik subyektini) davlat ro'yxatidan o'tkazilganligi to'g'risida
      </h2>
      <h1 className="text-2xl font-bold uppercase tracking-wider mb-4 text-gray-900">
        GUVOHNOMA
      </h1>
    </div>

    <div className="relative z-10 text-[10px] space-y-4 px-2 flex-grow">
       <p>
         Ushbu bilan Tadbirkorlik subyektlari yagona davlat reyestriga
       </p>
       <div className="font-bold text-center border-b border-black pb-1 uppercase text-[11px]">
         "FALCON TELECOM EXPERT" Mas'uliyati cheklangan jamiyat
       </div>
       <div className="text-[8px] text-center text-gray-500 -mt-3 mb-2">
         (Yuridik shaxsning - tadbirkorlik subyektining tashkiliy-huquqiy shakli ko'rsatilgan holdagi to'liq nomi)
       </div>
       
       <div className="font-bold text-center border-b border-black pb-1 uppercase text-[11px]">
         "FALCON TELECOM EXPERT" MChJ
       </div>
       <div className="text-[8px] text-center text-gray-500 -mt-3 mb-4">
         (Yuridik shaxsning qisqartirilgan nomi)
       </div>

       <p className="text-center mb-2">
         Tashkil etish (qayta tashkil etish, boshqa ro'yxatdan o'tkazish ma'lumotlarini o'zgartirish)
       </p>
       
       <div className="flex justify-between items-end border-b border-black pb-1 mb-4">
          <span className="font-bold">{data.content?.date}</span>
          <span className="font-bold">{data.content?.number}</span>
          <span className="text-[9px]">ro'yxat raqamli yozuv kiritilganligi tasdiqlanadi.</span>
       </div>

       <div className="flex justify-between items-center mb-6">
          <span>Soliq to'lovchining identifikatsiya raqami (STIR):</span>
          <span className="font-bold border-b border-black px-4">{data.content?.stir}</span>
       </div>

       <div className="grid grid-cols-[1fr_2fr] gap-x-4 gap-y-2 text-[10px]">
          <div>Tashkiliy-huquqiy shakli:</div>
          <div className="border-b border-black font-bold">Mas'uliyati cheklangan jamiyat</div>
          
          <div>Joylashgan joyi:</div>
          <div className="border-b border-black font-bold">{data.content?.address}</div>
          
          <div>Guvohnoma:</div>
          <div className="border-b border-black font-bold flex justify-between">
            <span className="w-2/3">{data.content?.issuer}</span>
            <span className="text-right">tomonidan berilgan</span>
          </div>
       </div>
    </div>

    {/* Footer with QR Left */}
    <div className="mt-auto pt-6 flex justify-between items-end px-4">
      <div className="w-20 h-20 border border-gray-800 p-1 bg-white">
        <QRCode />
      </div>
      <div className="text-[8px] text-gray-400 text-right w-1/2 break-words">
         https://fo.birdarcha.uz/br/legal_entities/register/step9?id={data.content?.number}
      </div>
    </div>
  </div>
);

// Layout for "License" (Architecture/Construction/Telecom)
const LicenseLayout: React.FC<{ data: LicensePageData, isBack?: boolean }> = ({ data, isBack }) => (
  <div className="relative w-full h-full p-6 flex flex-col text-blue-900 font-sans border-4 border-double border-blue-200 bg-white">
    {/* Background Watermark */}
    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0">
       <Emblem className="w-64 h-64 grayscale" />
    </div>

    {isBack ? (
      // BACK PAGE
      <div className="relative z-10 flex flex-col h-full pt-4">
         <div className="flex justify-between text-[10px] font-bold text-gray-600 mb-8 border-b border-blue-100 pb-2">
            <span>Лицензия</span>
            <span>№ {data.content?.number}</span>
         </div>
         
         <div className="text-center mb-6">
            <h3 className="text-blue-600 font-bold text-sm mb-4">Фаолият тури</h3>
            <div className="border border-blue-100 bg-blue-50/30 p-4 rounded text-xs text-gray-800 text-justify leading-relaxed">
               {data.content?.activities?.map((act, i) => <p key={i} className="mb-2 last:mb-0">{act}</p>)}
            </div>
         </div>

         {data.content?.complexity && (
            <div className="text-center mb-6">
               <h3 className="text-blue-600 font-bold text-sm mb-2">Қўшимча маълумотлар</h3>
               <div className="border border-gray-200 rounded text-xs">
                  <div className="bg-gray-50 p-2 border-b border-gray-200 text-gray-500 text-[10px] uppercase text-left">
                     ОБЕКТЛАРНИНГ МУРАККАБЛИК ТОИФАЛАРИ
                  </div>
                  <div className="p-3 text-left font-medium">
                     {data.content.complexity}
                  </div>
               </div>
            </div>
         )}
         
         <div className="mt-auto flex justify-end">
            <div className="w-16 h-16 border border-gray-200 p-1 bg-white">
               <QRCode />
            </div>
         </div>
      </div>
    ) : (
      // FRONT PAGE
      <div className="relative z-10 flex flex-col h-full">
         {/* Header */}
         <div className="flex items-start gap-4 mb-4">
            <Emblem className="w-16 h-16 flex-shrink-0" />
            <div className="flex-1 text-center pt-2">
               <h2 className="text-[10px] font-bold uppercase text-gray-600 leading-tight mb-2">
                  {data.content?.issuer || "O'ZBEKISTON RESPUBLIKASI"}
               </h2>
               <h1 className="text-3xl font-bold text-blue-600 tracking-wide uppercase mb-1">
                  ЛИЦЕНЗИЯ
               </h1>
               <div className="text-xl text-gray-700">№ {data.content?.number}</div>
            </div>
         </div>

         <div className="text-center font-bold text-blue-600 text-[13px] uppercase border-b border-blue-100 pb-4 mb-4">
            "FALCON TELECOM EXPERT" MAS'ULIYATI CHEKLANGAN JAMIYAT
         </div>
         
         {data.content?.activities && (
            <div className="text-center text-[11px] text-gray-800 mb-6 px-4">
               {data.content.activities[0]}
            </div>
         )}

         {/* Info Grid */}
         <div className="space-y-4 text-[10px]">
            <div className="bg-blue-50/20 p-2 rounded">
               <div className="text-gray-500 text-[9px] uppercase mb-1">Лицензия реестри бўйича тартиб рақами</div>
               <div className="font-bold text-gray-900">{data.content?.registryNumber}</div>
            </div>
            
            <div className="bg-blue-50/20 p-2 rounded">
               <div className="text-gray-500 text-[9px] uppercase mb-1">СТИР (Солиқ тўловчининг идентификацион рақами)</div>
               <div className="font-bold text-gray-900">{data.content?.stir}</div>
            </div>

            <div className="bg-blue-50/20 p-2 rounded">
               <div className="text-gray-500 text-[9px] uppercase mb-1">Амал қилиш муддати</div>
               <div className="font-bold text-gray-900">{data.content?.validity}</div>
            </div>

            <div className="bg-blue-50/20 p-2 rounded">
               <div className="text-gray-500 text-[9px] uppercase mb-1">Жойлашган манзили (Почта манзили)</div>
               <div className="font-medium text-gray-900">{data.content?.address}</div>
            </div>

            <div className="bg-blue-50/20 p-2 rounded">
               <div className="text-gray-500 text-[9px] uppercase mb-1">Ваколатли орган</div>
               <div className="font-medium text-gray-900">{data.content?.issuer}</div>
            </div>
         </div>

         {/* Footer QR */}
         <div className="mt-auto pt-4 flex justify-between items-end border-t border-blue-100">
            <div className="bg-blue-50 px-2 py-1 rounded text-[9px] font-bold text-blue-800">
               {data.content?.date} <br/> <span className="font-normal text-gray-500">ТАҚДИМ ЭТИЛГАН САНА</span>
            </div>
            <div className="w-16 h-16 border border-gray-200 p-1 bg-white">
               <QRCode />
            </div>
         </div>
      </div>
    )}
  </div>
);

// Layout for "Accreditation" (Similar to Guvohnoma but official layout)
const AccreditationLayout: React.FC<{ data: LicensePageData }> = ({ data }) => (
  <div className="relative w-full h-full p-8 flex flex-col text-gray-900 font-serif bg-white">
     <div className="absolute top-4 right-4 text-[9px] font-mono">{data.content?.date}</div>
     
     <div className="flex flex-col items-center mt-6 mb-8">
        <Emblem className="w-16 h-16 mb-6" />
        <div className="w-full flex justify-between text-[8px] text-gray-500 mb-2">
           <span>№ {data.content?.registryNumber}</span>
           <span>Сана: {data.content?.date}</span>
        </div>
        
        <h2 className="text-center text-[10px] font-bold uppercase max-w-[90%] leading-tight mb-2">
           {data.content?.activities?.[0] || "ACCREDITATION"}
        </h2>
        <h1 className="text-xl font-bold uppercase tracking-wider mb-2">
           GUVOHNOMA
        </h1>
     </div>

     <div className="text-[10px] space-y-4 leading-relaxed text-justify flex-grow">
        <p>
           Mas'uliyati cheklangan yoki qo'shimcha mas'uliyatli jamiyat 
           <span className="font-bold"> "FALCON TELECOM EXPERT"</span> MAS'ULIYATI CHEKLANGAN JAMIYAT 
           ga qurilish loyihalarining ekspertizasini o'tkazish faoliyatini amalga oshirish huquqiga guvohnoma berildi.
        </p>
        
        <div className="pl-4 border-l-2 border-gray-200 space-y-2 my-4">
           <div>
              <span className="text-gray-500 block text-[8px]">Guvohnoma berilgan sana:</span>
              <span className="font-bold">{data.content?.date} yil</span>
           </div>
           <div>
              <span className="text-gray-500 block text-[8px]">Guvohnoma raqami:</span>
              <span className="font-bold">{data.content?.number}</span>
           </div>
           <div>
              <span className="text-gray-500 block text-[8px]">Soliq to'lovchining identifikatsiya raqami (STIR):</span>
              <span className="font-bold">{data.content?.stir}</span>
           </div>
           <div>
              <span className="text-gray-500 block text-[8px]">Yuridik shaxsning pochta manzili:</span>
              <span>{data.content?.address}</span>
           </div>
        </div>
        
        <p>Guvohnoma besh yil muddatga berildi.</p>
     </div>

     <div className="mt-8 mb-4 font-bold text-[10px] uppercase">
        {data.content?.issuer}
     </div>

     {/* Footer QR Right */}
     <div className="mt-auto flex justify-between items-end">
        <div className="text-[8px] max-w-[60%] text-gray-400 leading-tight">
           Mazkur hujjat Vazirlar Mahkamasining 2017 yil 15 sentyabrdagi 728-son qaroriga muvofiq...
        </div>
        <div className="flex items-center gap-2">
           <span className="text-2xl font-bold text-gray-400">7563</span>
           <div className="w-20 h-20 border border-gray-800 p-1 bg-white">
              <QRCode />
           </div>
        </div>
     </div>
  </div>
);

const DocumentPage: React.FC<{ data: LicensePageData, docType: string }> = ({ data, docType }) => {
  if (docType === 'GUVOHNOMA') return <GuvohnomaLayout data={data} />;
  if (docType === 'ACCREDITATION') return <AccreditationLayout data={data} />;
  return <LicenseLayout data={data} isBack={data.type === 'BACK'} />;
};

const Licenses: React.FC = () => {
  const [hoveredLicenseId, setHoveredLicenseId] = useState<string | null>(null);
  const { t } = useLanguage();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-falcon-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{t.licenses.headerTitle}</h1>
          <p className="mt-2 text-falcon-100 text-lg">
            {t.licenses.headerSub}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center">
          {LICENSES.map((license) => (
            <div 
              key={license.id} 
              className="relative group w-[280px]"
              onMouseEnter={() => setHoveredLicenseId(license.id)}
              onMouseLeave={() => setHoveredLicenseId(null)}
            >
              {/* Stack Effect for Multi-page docs */}
              {license.pages.length > 1 && (
                <div className="absolute top-0 left-0 w-full h-[380px] bg-white border border-gray-200 rounded-lg transform translate-x-2 translate-y-2 shadow-sm z-0"></div>
              )}
              
              {/* Main Card (Thumbnail - Shows Page 1 only) */}
              <div className="relative z-10 w-full h-[380px] bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden cursor-zoom-in transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                 {/* Scale down content to fit thumbnail */}
                 <div className="w-full h-full transform scale-[0.45] origin-top-left w-[222%] h-[222%] pointer-events-none p-4">
                   <DocumentPage data={license.pages[0]} docType={license.docType} />
                 </div>
                 
                 {/* Overlay Title for Thumbnail */}
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
                   <h3 className="text-white font-bold text-sm leading-tight">{license.name}</h3>
                   {license.pages.length > 1 && (
                     <span className="text-falcon-300 text-xs flex items-center gap-1 mt-1">
                       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                       2 стр.
                     </span>
                   )}
                 </div>
              </div>
              
              {/* Full Screen Overlay on Hover */}
              {hoveredLicenseId === license.id && (
                <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-8">
                   {/* Backdrop */}
                   <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"></div>
                   
                   {/* Container for Pages */}
                   <div className="relative flex gap-8 max-w-[95vw] max-h-[90vh] animate-in zoom-in-95 duration-200 items-center justify-center overflow-auto pointer-events-auto">
                      {license.pages.map((page, idx) => (
                        <div key={idx} className="flex-shrink-0 w-[500px] h-[707px] bg-white shadow-2xl rounded-sm overflow-hidden transform transition-transform">
                          <DocumentPage data={page} docType={license.docType} />
                        </div>
                      ))}
                   </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Licenses;
