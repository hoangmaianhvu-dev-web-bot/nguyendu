
import { SlideData, SlideCategory } from './types';

/**
 * DANH SÁCH ẢNH DO NGƯỜI DÙNG CUNG CẤP (10 LINK):
 * 1. Nguyễn Du (VNE): https://vcdn1-giaitri.vnecdn.net/2019/12/24/nguyen-du-1-1947-1577162608.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=yw2mj40y8VXej6g8q6_hSA
 * 2. Nguyễn Du (Gstatic 1): https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUHL59J2WUaElh6dKNXsyRb2XulaDySch2g&s
 * 3. Nguyễn Du (NLD): https://nld.mediacdn.vn/zoom/600_315/291774122806476800/2023/1/2/8-nguyen-du-16726678671241316471242.jpg
 * 4. Nguyễn Du (TTN): https://truongtotnhat.vn/wp-content/uploads/2025/09/soan-bai-tac-gia-nguyen-du-ngan-nhat-chan-dung-dai-thi-hao-555x555.jpg
 * 5. Nguyễn Du (Ftech): https://minio.ftech.ai/hoclagioi/Anh_Nguyen_Du_6777051785.jpg
 * 6. Truyện Kiều (Hatinh): https://hatinh.edu.vn/upload/32982/fck/files/Thuy%20Kieu.jpg
 * 7. Truyện Kiều (Gstatic 2): https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2OC6sryH2egc-wpc-m8tPUI8t2YSIIxAiA&s
 * 8. Chị em Thúy Kiều (Hocnguvan): https://hocnguvan.vn/wp-content/uploads/2019/10/chi-em-thuy-kieu-nguyen-du.jpg
 * 9. Chị em Thúy Kiều (Soanbai123): https://soanbai123.com/wp-content/uploads/2017/01/phan-tich-doan-trich-chi-em-thuy-kieu-cua-nguyen-du.jpg
 * 10. Liên quan khác (Gstatic 3): https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRsMz2n_5nNvkKjtMiNxavOo1BLB_M7iInK3eMaNNIs2H6lQcOe
 */

export const SLIDES: SlideData[] = [
  // --- PHẦN 1: KHỞI ĐẦU (SLIDE 1-3) ---
  {
    id: 1,
    title: "ĐẠI THI HÀO NGUYỄN DU",
    content: [
      "Danh nhân văn hóa thế giới - Niềm tự hào của dân tộc Việt Nam.",
      "Người đã đưa văn học Việt Nam đạt tới đỉnh cao rực rỡ của chủ nghĩa nhân đạo.",
      "Truyện Kiều không chỉ là một tác phẩm văn học mà còn là kết tinh trí tuệ, tâm hồn và nhân cách Việt Nam."
    ],
    image: "https://vcdn1-giaitri.vnecdn.net/2019/12/24/nguyen-du-1-1947-1577162608.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=yw2mj40y8VXej6g8q6_hSA",
    category: SlideCategory.INTRODUCTION
  },
  {
    id: 2,
    title: "CHÀO MỪNG QUÝ THẦY CÔ VÀ CÁC BẠN",
    content: [
      "Chuyên đề nghiên cứu về cuộc đời và sự nghiệp của Đại thi hào Nguyễn Du.",
      "Mời quý vị cùng ngược dòng lịch sử về thế kỷ XVIII - XIX để tìm hiểu về một nhân cách lớn.",
      "Tác phẩm tiêu biểu: Truyện Kiều - Đỉnh cao nghệ thuật ngôn từ Việt Nam."
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUHL59J2WUaElh6dKNXsyRb2XulaDySch2g&s",
    category: SlideCategory.INTRODUCTION
  },
  {
    id: 3,
    title: "HÀNH TRÌNH KHÁM PHÁ",
    content: [
      "I. Thời đại & Gia thế: Nguồn gốc và bối cảnh hình thành nhân cách.",
      "II. Sự nghiệp văn chương: Di sản thơ chữ Hán và chữ Nôm đồ sộ.",
      "III. Kiệt tác Truyện Kiều: Phân tích sâu về nội dung và nghệ thuật.",
      "IV. Giá trị & Tầm ảnh hưởng: Sức sống vĩnh cửu trong lòng dân tộc và thế giới."
    ],
    image: "https://nld.mediacdn.vn/zoom/600_315/291774122806476800/2023/1/2/8-nguyen-du-16726678671241316471242.jpg",
    category: SlideCategory.INTRODUCTION
  },

  // --- PHẦN 2: THỜI ĐẠI & GIA THẾ (SLIDE 4-10) ---
  {
    id: 4,
    title: "THỜI ĐẠI BÃO TÁP (CUỐI TK XVIII - ĐẦU TK XIX)",
    content: [
      "Chế độ phong kiến khủng hoảng trầm trọng, các tập đoàn phong kiến tranh giành quyền lực.",
      "Lê - Trịnh sụp đổ, phong trào Tây Sơn nổi dậy đại phá quân Thanh (1789).",
      "Nhà Nguyễn thiết lập vương triều. Xã hội biến động dữ dội: 'Bãi bể nương dâu'."
    ],
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRsMz2n_5nNvkKjtMiNxavOo1BLB_M7iInK3eMaNNIs2H6lQcOe",
    category: SlideCategory.AUTHOR
  },
  {
    id: 5,
    title: "XUẤT THÂN: TỐ NHƯ - THANH HIÊN",
    content: [
      "Sinh năm 1765 (Ất Dậu) tại phường Bích Câu, Thăng Long.",
      "Tên chữ là Tố Như, tên hiệu là Thanh Hiên.",
      "Quê gốc tại làng Tiên Điền, huyện Nghi Xuân, tỉnh Hà Tĩnh - vùng đất địa linh nhân kiệt."
    ],
    image: "https://truongtotnhat.vn/wp-content/uploads/2025/09/soan-bai-tac-gia-nguyen-du-ngan-nhat-chan-dung-dai-thi-hao-555x555.jpg",
    category: SlideCategory.AUTHOR
  },
  {
    id: 6,
    title: "GIA ĐÌNH: TRÂM ANH THẾ PHIỆT",
    content: [
      "Cha: Nguyễn Nghiễm - đậu Nhị giáp tiến sĩ, làm quan đến chức Tể tướng triều Lê.",
      "Mẹ: Bà Trần Thị Tần - quê làng Hoa Thiều, Kinh Bắc (Bắc Ninh), nổi tiếng tài hát xướng.",
      "Gia đình nhiều đời đỗ đạt cao, yêu chuộng văn chương nghệ thuật, kết hợp tinh hoa văn hóa hai miền."
    ],
    image: "https://minio.ftech.ai/hoclagioi/Anh_Nguyen_Du_6777051785.jpg",
    category: SlideCategory.AUTHOR
  },
  {
    id: 7,
    title: "TUỔI TRẺ VÀ NHỮNG BƯỚC ĐẦU",
    content: [
      "Sống trong giàu sang phú quý từ nhỏ tại kinh thành Thăng Long.",
      "Năm 1783 (Quý Mão): Thi Hương đậu Tam trường (Tú tài) tại trường Sơn Nam.",
      "Lấy vợ là con gái Đoàn Nguyễn Thục, tập ấm chức Chánh thủ hiệu quân hùng hậu."
    ],
    image: "https://truongtotnhat.vn/wp-content/uploads/2025/09/soan-bai-tac-gia-nguyen-du-ngan-nhat-chan-dung-dai-thi-hao-555x555.jpg",
    category: SlideCategory.AUTHOR
  },
  {
    id: 8,
    title: "MƯỜI NĂM GIÓ BỤI (1786 - 1796)",
    content: [
      "Lê - Trịnh sụp đổ, Nguyễn Du lưu lạc quê vợ (Thái Bình) rồi về quê cha (Hà Tĩnh).",
      "Dinh cơ họ Nguyễn bị tàn phá, anh trai Nguyễn Quýnh chống Tây Sơn bị giết.",
      "Cuộc sống nghèo khổ, đói khát khiến ông thấu hiểu sâu sắc nỗi đau của nhân dân lao động."
    ],
    image: "https://minio.ftech.ai/hoclagioi/Anh_Nguyen_Du_6777051785.jpg",
    category: SlideCategory.AUTHOR
  },
  {
    id: 9,
    title: "SỰ NGHIỆP QUAN TRƯỜNG NHÀ NGUYỄN",
    content: [
      "Năm 1802: Ra làm quan cho triều Nguyễn, thăng tiến nhanh: Tri huyện, Tri phủ, Cai bạ Quảng Bình.",
      "Năm 1813: Được thăng Cần chánh điện học sĩ, cử làm Chánh sứ sang nhà Thanh (Trung Quốc).",
      "Dù làm quan nhưng tâm trạng luôn buồn đau vì thời thế, luôn hướng về dân nghèo."
    ],
    image: "https://truongtotnhat.vn/wp-content/uploads/2025/09/soan-bai-tac-gia-nguyen-du-ngan-nhat-chan-dung-dai-thi-hao-555x555.jpg",
    category: SlideCategory.AUTHOR
  },
  {
    id: 10,
    title: "QUA ĐỜI VÀ DI SẢN VĨNH CỬU",
    content: [
      "Mất ngày mồng 10 tháng 8 năm Canh Thìn (1820) tại Huế khi chuẩn bị đi sứ lần 2.",
      "Năm 1824: Cải táng đưa về quê nhà Tiên Điền, Hà Tĩnh.",
      "1965: UNESCO công nhận là Danh nhân văn hóa thế giới - Thi hào của lòng nhân ái."
    ],
    image: "https://vcdn1-giaitri.vnecdn.net/2019/12/24/nguyen-du-1-1947-1577162608.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=yw2mj40y8VXej6g8q6_hSA",
    category: SlideCategory.AUTHOR
  },

  // --- PHẦN 3: SỰ NGHIỆP VĂN CHƯƠNG (SLIDE 11-15) ---
  {
    id: 11,
    title: "MỘT DI SẢN ĐỒ SỘ",
    content: [
      "Thơ chữ Hán: 3 tập (tổng 250 bài) đạt trình độ cổ điển mẫu mực.",
      "Thơ chữ Nôm: Truyện Kiều và Văn tế thập loại chúng sinh là những kiệt tác bất hủ.",
      "Sự kết tinh giữa tinh hoa văn hóa bác học và văn hóa dân gian Việt Nam."
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUHL59J2WUaElh6dKNXsyRb2XulaDySch2g&s",
    category: SlideCategory.LITERARY_CAREER
  },
  {
    id: 12,
    title: "THƠ CHỮ HÁN: THANH HIÊN THI TẬP",
    content: [
      "Gồm 78 bài sáng tác trong thời kỳ lưu lạc quê vợ và quê nhà (1786 - 1804).",
      "Thể hiện nỗi cô đơn, u uất và trăn trở về thời cuộc, thân phận.",
      "Đọc Tiểu Thanh Kí là một trong những bài thơ nổi tiếng nhất tập này."
    ],
    image: "https://nld.mediacdn.vn/zoom/600_315/291774122806476800/2023/1/2/8-nguyen-du-16726678671241316471242.jpg",
    category: SlideCategory.LITERARY_CAREER
  },
  {
    id: 13,
    title: "THƠ CHỮ HÁN: BẮC HÀNH TẠP LỤC",
    content: [
      "Gồm 132 bài viết trong chuyến đi sứ Trung Quốc (1813 - 1814).",
      "Nội dung: Phê phán bất công, thương xót dân nghèo và người tài hoa (Sở kiến hành, Long Thành cầm giả ca).",
      "Thể hiện cái nhìn hiện thực sắc sảo và trái tim nhân đạo bao la."
    ],
    image: "https://minio.ftech.ai/hoclagioi/Anh_Nguyen_Du_6777051785.jpg",
    category: SlideCategory.LITERARY_CAREER
  },
  {
    id: 14,
    title: "VĂN TẾ THẬP LOẠI CHÚNG SINH",
    content: [
      "Viết theo thể song thất lục bát, gồm 184 câu đầy bi thương và trắc ẩn.",
      "Tấm lòng bao dung dành cho mọi kiếp người, kể cả những linh hồn bơ vơ.",
      "Khẳng định tư tưởng nhân đạo xuyên biên giới, xuyên tầng lớp của Nguyễn Du."
    ],
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRsMz2n_5nNvkKjtMiNxavOo1BLB_M7iInK3eMaNNIs2H6lQcOe",
    category: SlideCategory.LITERARY_CAREER
  },
  {
    id: 15,
    title: "ĐẶC ĐIỂM NGHỆ THUẬT VĂN CHƯƠNG",
    content: [
      "Ngôn ngữ: Đưa tiếng Việt (chữ Nôm) lên tầm cao cổ điển, sang trọng mà bình dị.",
      "Bút pháp: Ước lệ kết hợp hiện thực, miêu tả nội tâm nhân vật tinh tế.",
      "Thể loại: Hoàn thiện thể lục bát dân tộc đến mức mẫu mực cho hậu thế."
    ],
    image: "https://nld.mediacdn.vn/zoom/600_315/291774122806476800/2023/1/2/8-nguyen-du-16726678671241316471242.jpg",
    category: SlideCategory.LITERARY_CAREER
  },

  // --- PHẦN 4: TRUYỆN KIỀU (SLIDE 16-25) ---
  {
    id: 16,
    title: "TRUYỆN KIỀU: VIÊN NGỌC SÁNG",
    content: [
      "Tên gốc: Đoạn trường tân thanh (Tiếng kêu mới về nỗi đau đứt ruột).",
      "Nguồn gốc: Mượn cốt truyện Kim Vân Kiều Truyện nhưng sáng tạo lại toàn bộ linh hồn.",
      "Gồm 3254 câu thơ lục bát, là bản trường ca về thân phận con người."
    ],
    image: "https://hatinh.edu.vn/upload/32982/fck/files/Thuy%20Kieu.jpg",
    category: SlideCategory.TRUYEN_KIEU
  },
  {
    id: 17,
    title: "PHẦN 1: GẶP GỠ VÀ ĐÍNH ƯỚC",
    content: [
      "Thúy Kiều du xuân gặp Kim Trọng – bậc tài tử phong lưu.",
      "Mối tình chớm nở: 'Trăm năm tạc một chữ đồng', thề nguyền dưới trăng.",
      "Đại diện cho khát vọng tình yêu tự do, trong sáng của giới trẻ thời bấy giờ."
    ],
    image: "https://hocnguvan.vn/wp-content/uploads/2019/10/chi-em-thuy-kieu-nguyen-du.jpg",
    category: SlideCategory.TRUYEN_KIEU
  },
  {
    id: 18,
    title: "PHẦN 2: GIA BIẾN VÀ LƯU LẠC",
    content: [
      "Gia đình bị vu oan, Kiều bán mình chuộc cha, trao duyên cho em.",
      "Mã Giám Sinh, Tú Bà đưa nàng vào lầu xanh. 15 năm lưu lạc 'thanh lâu hai lượt, thanh y hai lần'.",
      "Bi kịch của tài hoa bạc mệnh trước sức mạnh hủy diệt của đồng tiền."
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2OC6sryH2egc-wpc-m8tPUI8t2YSIIxAiA&s",
    category: SlideCategory.TRUYEN_KIEU
  },
  {
    id: 19,
    title: "PHẦN 3: ĐOÀN TỤ",
    content: [
      "Gặp Từ Hải, báo ân báo oán. Từ Hải chết đứng, Kiều tự vẫn sông Tiền Đường.",
      "Được cứu và đoàn tụ với gia đình, gặp lại Kim Trọng.",
      "Kim - Kiều nối lại duyên xưa nhưng giờ đây là tình bạn hữu, trọn đạo hiếu nghĩa."
    ],
    image: "https://hatinh.edu.vn/upload/32982/fck/files/Thuy%20Kieu.jpg",
    category: SlideCategory.TRUYEN_KIEU
  },
  {
    id: 20,
    title: "NHÂN VẬT THÚY KIỀU: BI KỊCH TÀI SẮC",
    content: [
      "Nhan sắc: 'Hoa ghen thua thắm, liễu hờn kém xanh' - vẻ đẹp lộng lẫy dự báo sóng gió.",
      "Tài năng: Cầm – Kỳ – Thi – Họa đạt mức tinh anh, đặc biệt là cung đàn 'Bạc mệnh'.",
      "Tâm hồn: Vị tha, giàu đức hy sinh và lòng tự trọng vô biên."
    ],
    image: "https://soanbai123.com/wp-content/uploads/2017/01/phan-tich-doan-trich-chi-em-thuy-kieu-cua-nguyen-du.jpg",
    category: SlideCategory.TRUYEN_KIEU
  },
  {
    id: 21,
    title: "NHÂN VẬT TỪ HẢI: KHÁT VỌNG TỰ DO",
    content: [
      "Hình tượng người anh hùng: 'Râu hùm, hàm én, mày ngài', vai năm tấc rộng.",
      "Anh hùng 'đội trời đạp đất', đại diện cho công lý và khát vọng giải phóng con người.",
      "Cái chết đứng của Từ Hải là lời tố cáo xã hội gian xảo, hèn hạ."
    ],
    image: "https://hocnguvan.vn/wp-content/uploads/2019/10/chi-em-thuy-kieu-nguyen-du.jpg",
    category: SlideCategory.TRUYEN_KIEU
  },
  {
    id: 22,
    title: "HỆ THỐNG NHÂN VẬT PHẢN DIỆN",
    content: [
      "Mã Giám Sinh (buôn người), Tú Bà (chủ lầu xanh), Sở Khanh (lừa tình).",
      "Hồ Tôn Hiến (quan lại hèn hạ), Hoạn Thư (ghen tuông tàn nhẫn).",
      "Đại diện cho sức mạnh đen tối của đồng tiền và bộ máy phong kiến thối nát."
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2OC6sryH2egc-wpc-m8tPUI8t2YSIIxAiA&s",
    category: SlideCategory.TRUYEN_KIEU
  },
  {
    id: 23,
    title: "NGÔN NGỮ VÀ THỂ THƠ LỤC BÁT",
    content: [
      "Ngôn ngữ Tiếng Việt đạt đến đỉnh cao: Sáng sủa, hàm súc, giàu hình ảnh.",
      "Thanh điệu và nhạc điệu thơ lục bát được Nguyễn Du vận dụng tài tình.",
      "Sử dụng điển cố điêu luyện nhưng vẫn giữ được sự trong sáng của lời ăn tiếng nói dân gian."
    ],
    image: "https://hatinh.edu.vn/upload/32982/fck/files/Thuy%20Kieu.jpg",
    category: SlideCategory.TRUYEN_KIEU
  },
  {
    id: 24,
    title: "NGHỆ THUẬT TẢ CẢNH NGỤ TÌNH",
    content: [
      "Triết lý: 'Cảnh nào cảnh chẳng đeo sầu / Người buồn cảnh có vui đâu bao giờ'.",
      "Thiên nhiên phản chiếu tâm trạng: Từ cảnh du xuân vui tươi đến cảnh Lầu Ngưng Bích hãi hùng.",
      "Khắc họa nội tâm nhân vật sâu sắc thông qua bức tranh thiên nhiên."
    ],
    image: "https://hocnguvan.vn/wp-content/uploads/2019/10/chi-em-thuy-kieu-nguyen-du.jpg",
    category: SlideCategory.TRUYEN_KIEU
  },
  {
    id: 25,
    title: "GIÁ TRỊ NHÂN ĐẠO THỐNG THIẾT",
    content: [
      "Thương cảm cho số phận bị vùi dập, khẳng định tài năng và phẩm giá con người.",
      "Lên án các thế lực tàn bạo, phê phán sức mạnh vạn năng của đồng tiền.",
      "Tiếng nói đòi quyền sống, quyền hạnh phúc cho con người, đặc biệt là phụ nữ."
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2OC6sryH2egc-wpc-m8tPUI8t2YSIIxAiA&s",
    category: SlideCategory.TRUYEN_KIEU
  },

  // --- PHẦN 5: TẦM ẢNH HƯỞNG & KẾT (SLIDE 26-30) ---
  {
    id: 26,
    title: "SỨC SỐNG TRONG DÂN GIAN",
    content: [
      "Các hình thức văn hóa: Bói Kiều, Lẩy Kiều, Vịnh Kiều, Đố Kiều.",
      "Lời thơ đi vào ca dao, dân ca, lời ru, trở thành món ăn tinh thần hàng ngày.",
      "Phạm Quỳnh: 'Truyện Kiều còn, Tiếng ta còn; Tiếng ta còn, Nước ta còn'."
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUHL59J2WUaElh6dKNXsyRb2XulaDySch2g&s",
    category: SlideCategory.CONCLUSION
  },
  {
    id: 27,
    title: "VINH DANH QUỐC TẾ",
    content: [
      "Nguyễn Du là thi hào dân tộc đầu tiên được UNESCO vinh danh Danh nhân văn hóa thế giới.",
      "Truyện Kiều được dịch ra hơn 30 thứ tiếng, nghiên cứu tại nhiều trường đại học toàn cầu.",
      "Khẳng định vị thế của văn học Việt Nam trên bản đồ văn hóa nhân loại."
    ],
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRsMz2n_5nNvkKjtMiNxavOo1BLB_M7iInK3eMaNNIs2H6lQcOe",
    category: SlideCategory.CONCLUSION
  },
  {
    id: 28,
    title: "TRIẾT LÝ: CHỮ TÂM & CHỮ TÀI",
    content: [
      "Tư tưởng cốt lõi: 'Chữ tâm kia mới bằng ba chữ tài'.",
      "Đề cao lòng thiện, sự thấu cảm là gốc rễ của mọi giá trị con người.",
      "Nhắc nhở hậu thế sống nhân ái, có trách nhiệm với đồng loại."
    ],
    image: "https://soanbai123.com/wp-content/uploads/2017/01/phan-tich-doan-trich-chi-em-thuy-kieu-cua-nguyen-du.jpg",
    category: SlideCategory.CONCLUSION
  },
  {
    id: 29,
    title: "TỔNG KẾT HÀNH TRÌNH",
    content: [
      "Nguyễn Du - Lương tri của thời đại, tiếng nói nhân đạo vang vọng ngàn đời.",
      "Truyện Kiều - Báu vật tinh thần vĩnh cửu của dân tộc Việt Nam.",
      "Dù 300 năm sau, thế giới vẫn sẽ mãi nhớ về Tố Như - con người tài hoa bạc mệnh."
    ],
    image: "https://vcdn1-giaitri.vnecdn.net/2019/12/24/nguyen-du-1-1947-1577162608.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=yw2mj40y8VXej6g8q6_hSA",
    category: SlideCategory.CONCLUSION
  },
  {
    id: 30,
    title: "TRÂN TRỌNG CẢM ƠN",
    content: [
      "Cảm ơn Quý Thầy Cô và các Bạn đã chú ý lắng nghe bài thuyết trình.",
      "Hy vọng chuyên đề đã mang lại những hiểu biết sâu sắc về Đại thi hào.",
      "Mời quý vị đặt câu hỏi thảo luận cùng nhóm thực hiện."
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUHL59J2WUaElh6dKNXsyRb2XulaDySch2g&s",
    category: SlideCategory.CONCLUSION
  }
];
