
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const Contact: React.FC = () => {
  const { t } = useLanguage();
  // Updated coordinates as requested
  // Format: "lat,long+(Label)" for specific pin placement and labeling
  const mapCoordinates = "41.347205295453215, 69.3353698539023+(Falcon Telecom Expert)";
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapCoordinates)}&t=&z=17&ie=UTF8&iwloc=&output=embed`;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email content
    const subject = t.contact.emailSubject;
    const body = `${t.contact.emailBodyPrefix}: ${formData.name}\nEmail: ${formData.email}\n\n${t.contact.messageLabel}:\n${formData.message}`;
    
    // Create mailto link
    const mailtoLink = `mailto:falcon_telecom_expert@mail.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default mail client
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-white min-h-screen">
       <div className="bg-falcon-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{t.contact.headerTitle}</h1>
          <p className="mt-2 text-falcon-100 text-lg">{t.contact.headerSub}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.contact.coordinatesTitle}</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-falcon-50 rounded-lg flex items-center justify-center text-falcon-600">
                    <MapPin size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{t.contact.addressLabel}</h3>
                  <p className="mt-1 text-gray-500">
                    {t.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-falcon-50 rounded-lg flex items-center justify-center text-falcon-600">
                    <Phone size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{t.contact.phoneLabel}</h3>
                  <p className="mt-1 text-gray-500">+998 99 833 06 08</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-falcon-50 rounded-lg flex items-center justify-center text-falcon-600">
                    <Mail size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{t.contact.emailLabel}</h3>
                  <p className="mt-1 text-gray-500">falcon_telecom_expert@mail.ru</p>
                </div>
              </div>

               <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-falcon-50 rounded-lg flex items-center justify-center text-falcon-600">
                    <Clock size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{t.contact.hoursLabel}</h3>
                  <p className="mt-1 text-gray-500">{t.contact.hoursWeek}</p>
                  <p className="mt-1 text-gray-500">{t.contact.hoursWeekend}</p>
                </div>
              </div>
            </div>

            {/* Messenger Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://t.me/hayrulla1980" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#229ED9] hover:bg-[#1f8dbf] shadow-md transition-colors w-full sm:w-auto"
              >
                <TelegramIcon className="mr-2 h-5 w-5" />
                Telegram
              </a>
              <a 
                href="https://wa.me/998998330608" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#25D366] hover:bg-[#20b85a] shadow-md transition-colors w-full sm:w-auto"
              >
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.formTitle}</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t.contact.nameLabel}</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-falcon-500 focus:border-falcon-500" 
                  placeholder={t.contact.namePlace} 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-falcon-500 focus:border-falcon-500" 
                  placeholder={t.contact.emailPlace} 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t.contact.messageLabel}</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-falcon-500 focus:border-falcon-500" 
                  placeholder={t.contact.messagePlace}
                ></textarea>
              </div>

              <div className="flex gap-4 flex-col sm:flex-row">
                <button type="submit" className="flex-1 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-falcon-600 hover:bg-falcon-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-falcon-500 transition-colors">
                  {t.contact.sendBtn}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-md border border-gray-200">
           <iframe 
             title="Office Location"
             width="100%" 
             height="100%" 
             frameBorder="0" 
             scrolling="no" 
             marginHeight={0} 
             marginWidth={0} 
             src={mapUrl}
             className="w-full h-full"
           ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
