
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `Bạn là một chuyên gia về văn học Việt Nam, đặc biệt là về Đại thi hào Nguyễn Du và Truyện Kiều. 
Hãy trả lời các câu hỏi của người dùng một cách sâu sắc, giàu tính nhân văn và học thuật. 
Sử dụng ngôn ngữ lịch thiệp, trân trọng các giá trị văn hóa dân tộc.
Nếu người dùng hỏi về một slide cụ thể trong bài thuyết trình 50 slide này, hãy cung cấp thêm bối cảnh lịch sử, ý nghĩa nghệ thuật hoặc triết lý nhân sinh tương ứng.`;

// Fix: Refactored to follow @google/genai guidelines for API initialization and content generation.
export async function getGeminiResponse(history: ChatMessage[], prompt: string): Promise<string> {
  // Always initialize right before use with the correct environment variable as per guidelines.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Use ai.models.generateContent directly for text generation.
  // This correctly maps the conversation history into the contents array.
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

  // Access .text property directly (it's a getter, not a method).
  return response.text || "Xin lỗi, tôi gặp trục trặc khi xử lý thông tin.";
}