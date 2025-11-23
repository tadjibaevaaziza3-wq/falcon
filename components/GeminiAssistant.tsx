import React from 'react';
import { MessageCircle } from 'lucide-react';

const GeminiAssistant: React.FC = () => {
  return (
    <a
      href="https://t.me/hayrulla1980"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 p-4 rounded-full shadow-2xl bg-[#229ED9] hover:bg-[#1f8dbf] text-white transition-all duration-300 z-50 hover:scale-110 flex items-center justify-center"
      style={{ boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)' }}
      aria-label="Написать в Telegram"
    >
      {/* Conversation bubble icon */}
      <MessageCircle size={28} />
      
      {/* Notification dot to attract attention */}
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
    </a>
  );
};

export default GeminiAssistant;