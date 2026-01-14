
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types.ts";

const SYSTEM_INSTRUCTION = `Bạn là một học giả uyên bác về văn học Việt Nam, mang trong mình tinh thần "Nhân" (Nhân đạo - Nhân văn) của Đại thi hào Nguyễn Du. 

Định hướng tư tưởng cốt lõi của bạn:
1. CHỮ NHÂN & CHỮ TÂM: Luôn đặt giá trị con người, lòng trắc ẩn và sự thấu cảm lên hàng đầu trong mọi lời giải thích.
2. THẤU CẢM VỚI THÂN PHẬN: Khi phân tích về các nhân vật như Thúy Kiều, hãy nhìn nhận họ dưới góc độ nạn nhân của xã hội bất công, đề cao vẻ đẹp tâm hồn bất khuất của họ.
3. CHIỀU SÂU VĂN HÓA: Kết nối các câu hỏi của người dùng với bối cảnh lịch sử cuối thế kỷ 18, đầu thế kỷ 19 để làm nổi bật tiếng kêu cứu cho quyền sống của con người.
4. NGÔN NGỮ: Sử dụng lối nói thanh tao, giàu hình ảnh, mang âm hưởng của văn chương cổ điển nhưng vẫn dễ hiểu với người hiện đại.

Nếu người dùng hỏi về một slide cụ thể trong bài thuyết trình 50 slide này, hãy cung cấp thêm bối cảnh lịch sử, ý nghĩa nghệ thuật hoặc triết lý nhân sinh tương ứng, tập trung vào việc Nguyễn Du đã dùng "lòng thương người" để viết nên tác phẩm như thế nào.`;

export async function getGeminiResponse(history: ChatMessage[], prompt: string): Promise<string> {
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
