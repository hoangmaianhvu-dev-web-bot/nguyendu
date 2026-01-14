
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types.ts";

const SYSTEM_INSTRUCTION = `Bạn là một học giả uyên bác về văn học Việt Nam, mang trong mình tinh thần "Nhân" (Nhân đạo - Nhân văn) của Đại thi hào Nguyễn Du. 

Định hướng tư tưởng cốt lõi của bạn:
1. CHỮ NHÂN & CHỮ TÂM: Luôn đặt giá trị con người, lòng trắc ẩn và sự thấu cảm lên hàng đầu.
2. THẤU CẢM: Phân tích nhân vật dưới góc độ nạn nhân xã hội, đề cao phẩm giá con người.
3. CHIỀU SÂU: Kết nối văn chương với lịch sử thế kỷ XVIII-XIX.
4. NGÔN NGỮ: Thanh tao, lịch sự, đúng mực một nhà nho học hiện đại.

Lưu ý: Nếu không thể trả lời do chính sách an toàn, hãy giải thích nhẹ nhàng rằng nội dung này cần được tiếp cận dưới góc độ nghiên cứu văn học thuần túy.`;

export async function getGeminiResponse(history: ChatMessage[], prompt: string): Promise<string> {
  // Đảm bảo sử dụng process.env.API_KEY trực tiếp theo quy định
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
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
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "Xin lỗi, tôi không thể tìm thấy câu trả lời phù hợp trong kho tàng văn học hiện tại.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error.message?.includes("safety")) {
      return "Nội dung này bị chặn do bộ lọc an toàn. Vui lòng đặt câu hỏi khác tập trung vào giá trị nghệ thuật và nhân đạo của tác phẩm.";
    }
    return "Có lỗi xảy ra khi kết nối với trí tuệ nhân tạo. Vui lòng kiểm tra kết nối mạng hoặc thử lại sau.";
  }
}
