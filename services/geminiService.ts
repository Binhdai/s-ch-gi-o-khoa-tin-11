
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const sendMessageToAI = async (message: string, history: {role: 'user' | 'model', text: string}[]) => {
  if (!API_KEY) {
    return "API Key chưa được cấu hình. Vui lòng kiểm tra lại.";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  // Format history for Gemini chat
  const contents = history.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text }]
  }));

  // Add the new message
  contents.push({
    role: 'user',
    parts: [{ text: message }]
  });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: "Bạn là một trợ lý ảo chuyên về môn Tin học lớp 11 (Bộ sách Kết nối tri thức). Hãy trả lời câu hỏi của học sinh một cách dễ hiểu, chính xác dựa trên kiến thức trong sách giáo khoa. Nếu câu hỏi không liên quan đến Tin học, hãy nhắc nhở nhẹ nhàng và hướng học sinh quay lại bài học.",
        temperature: 0.7,
      }
    });

    return response.text || "Xin lỗi, mình gặp lỗi khi xử lý câu trả lời.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hệ thống AI đang bận, bạn vui lòng thử lại sau nhé!";
  }
};
