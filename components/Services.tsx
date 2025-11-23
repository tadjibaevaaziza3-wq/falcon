
import React, { useState } from 'react';
import { Service } from '../types';
import { Network, FileCheck, HardHat, TowerControl, Building, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const iconMap = {
  Network: Network,
  FileCheck: FileCheck,
  HardHat: HardHat,
  TowerControl: TowerControl,
  Building: Building
};

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const { t } = useLanguage();

  const openModal = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-falcon-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{t.services.headerTitle}</h1>
          <p className="mt-2 text-falcon-100 text-lg">{t.services.headerSub}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.list.map((service) => {
            const Icon = iconMap[service.iconName];
            return (
              <div key={service.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full">
                <div className="p-8 flex-grow">
                  <div className="flex items-center justify-center w-12 h-12 bg-falcon-100 text-falcon-600 rounded-lg mb-4 group-hover:bg-falcon-600 group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Service Image */}
                  <div className="w-full h-48 rounded-lg overflow-hidden mt-auto">
                    <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 mt-auto">
                   <button 
                    onClick={() => openModal(service)}
                    className="text-falcon-700 font-medium text-sm hover:text-falcon-900 flex items-center gap-1 focus:outline-none"
                   >
                     {t.services.readMore} <span>&rarr;</span>
                   </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for Detailed Service Info */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={closeModal}
          ></div>
          
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
             {/* Close Button */}
             <button 
               onClick={closeModal}
               className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors z-10"
             >
               <X size={24} />
             </button>

             {/* Modal Content */}
             <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 mb-8 items-center border-b border-gray-100 pb-8">
                   <div className="w-full md:w-1/3 aspect-video rounded-lg overflow-hidden shadow-md">
                      <img 
                        src={selectedService.detailImageUrl || selectedService.imageUrl} 
                        alt={selectedService.title} 
                        className="w-full h-full object-cover"
                      />
                   </div>
                   <div className="w-full md:w-2/3">
                      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{selectedService.title}</h2>
                      <p className="text-lg text-gray-600">{selectedService.description}</p>
                   </div>
                </div>
                
                <div 
                  className="prose max-w-none text-gray-800"
                  dangerouslySetInnerHTML={{ __html: selectedService.fullDescription || '' }}
                />
                
                <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
                   <button 
                     onClick={closeModal}
                     className="px-6 py-2 bg-falcon-600 text-white font-medium rounded-md hover:bg-falcon-700 transition-colors"
                   >
                     {t.services.close}
                   </button>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
