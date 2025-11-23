import { GoogleGenAI } from "@google/genai";
import { ABOUT_TEXT, SERVICES } from "../constants";

let aiClient: GoogleGenAI | null = null;

export const initializeGenAI = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is missing from environment variables.");
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const generateAssistantResponse = async (userMessage: string): Promise<string> => {
  const client = initializeGenAI();
  if (!client) {
    return "Извините, сервис AI сейчас недоступен. Пожалуйста, проверьте конфигурацию API ключа.";
  }

  const servicesText = SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n');
  
  const systemInstruction = `
    Вы - виртуальный ассистент компании "Falcon Telecom Expert".
    Ваша цель - отвечать на вопросы потенциальных клиентов и партнеров о компании.
    
    Используйте следующую информацию о компании:
    ${ABOUT_TEXT}
    
    Наши услуги:
    ${servicesText}
    
    Тон общения: Профессиональный, вежливый, экспертный, но дружелюбный.
    Язык ответов: Русский.
    Отвечайте кратко и по существу. Если информации нет в контексте, предложите связаться через форму на сайте.
  `;

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "Извините, я не смог сформировать ответ.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Произошла ошибка при обработке вашего запроса.";
  }
};