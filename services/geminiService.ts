
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types.ts";

const SYSTEM_INSTRUCTION = `Bạn là một chuyên gia về văn học Việt Nam, đặc biệt là về Đại thi hào Nguyễn Du và Truyện Kiều. 
Hãy trả lời các câu hỏi của người dùng một cách sâu sắc, giàu tính nhân văn và học thuật. 
Sử dụng ngôn ngữ lịch thiệp, trân trọng các giá trị văn hóa dân tộc.
Nếu người dùng hỏi về một slide cụ thể trong bài thuyết trình 50 slide này, hãy cung cấp thêm bối cảnh lịch sử, ý nghĩa nghệ thuật hoặc triết lý nhân sinh tương ứng.`;

export async function getGeminiResponse(history: ChatMessage[], prompt: string): Promise<string> {
  // Safe check for API key to prevent black screen crash
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
  if (!apiKey) {
    console.warn("API Key is missing. Gemini Assistant will not function.");
    return "Tính năng trợ lý hiện không khả dụng do thiếu cấu hình API Key.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    return response.text || "Xin lỗi, tôi gặp trục trặc khi xử lý thông tin.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Có lỗi xảy ra khi kết nối với máy chủ AI.";
  }
}
