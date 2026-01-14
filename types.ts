
export interface SlideData {
  id: number;
  title: string;
  content: string[];
  description?: string;
  image: string;
  category: SlideCategory;
}

export enum SlideCategory {
  INTRODUCTION = "KHỞI ĐẦU",
  AUTHOR = "I. THỜI ĐẠI & GIA THẾ",
  LITERARY_CAREER = "II. SỰ NGHIỆP VĂN CHƯƠNG",
  TRUYEN_KIEU = "III. KIỆT TÁC TRUYỆN KIỀU",
  VALUES = "IV. Ý NGHĨA & NGHỆ THUẬT",
  CONCLUSION = "V. TỔNG KẾT & DI SẢN"
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
