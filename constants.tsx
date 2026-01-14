
import { SlideData, SlideCategory } from './types.ts';

const IMAGES = [
  "https://vcdn1-giaitri.vnecdn.net/2019/12/24/nguyen-du-1-1947-1577162608.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=yw2mj40y8VXej6g8q6_hSA",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUHL59J2WUaElh6dKNXsyRb2XulaDySch2g&s",
  "https://nld.mediacdn.vn/zoom/600_315/291774122806476800/2023/1/2/8-nguyen-du-16726678671241316471242.jpg",
  "https://truongtotnhat.vn/wp-content/uploads/2025/09/soan-bai-tac-gia-nguyen-du-ngan-nhat-chan-dung-dai-thi-hao-555x555.jpg",
  "https://minio.ftech.ai/hoclagioi/Anh_Nguyen_Du_6777051785.jpg",
  "https://hatinh.edu.vn/upload/32982/fck/files/Thuy%20Kieu.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2OC6sryH2egc-wpc-m8tPUI8t2YSIIxAiA&s",
  "https://hocnguvan.vn/wp-content/uploads/2019/10/chi-em-thuy-kieu-nguyen-du.jpg",
  "https://soanbai123.com/wp-content/uploads/2017/01/phan-tich-doan-trich-chi-em-thuy-kieu-cua-nguyen-du.jpg",
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRsMz2n_5nNvkKjtMiNxavOo1BLB_M7iInK3eMaNNIs2H6lQcOe"
];

export const SLIDES: SlideData[] = [
  // PHẦN I: KHỞI ĐẦU (1-5)
  { id: 1, title: "ĐẠI THI HÀO NGUYỄN DU", content: ["Danh nhân văn hóa thế giới - Niềm tự hào dân tộc.", "Người đưa văn học Nôm đạt tới đỉnh cao rực rỡ.", "Trái tim nhân hậu trải qua bao biến động thời đại."], image: IMAGES[0], category: SlideCategory.INTRODUCTION },
  { id: 2, title: "MỤC TIÊU CHUYÊN ĐỀ", content: ["Tìm hiểu về cuộc đời đầy thăng trầm của Nguyễn Du.", "Khám phá giá trị nội dung và nghệ thuật của Truyện Kiều.", "Cảm nhận tinh thần nhân đạo xuyên suốt các tác phẩm."], image: IMAGES[1], category: SlideCategory.INTRODUCTION },
  { id: 3, title: "CẤU TRÚC BÀI THUYẾT TRÌNH", content: ["I. Thời đại và Gia thế.", "II. Sự nghiệp văn chương đồ sộ.", "III. Kiệt tác Truyện Kiều.", "IV. Giá trị nhân đạo và nghệ thuật.", "V. Di sản và Tầm ảnh hưởng."], image: IMAGES[2], category: SlideCategory.INTRODUCTION },
  { id: 4, title: "DẪN NHẬP: TIẾNG THƠ ĐOẠN TRƯỜNG", content: ["'Bất tri tam bách dư niên hậu / Thiên hạ hà nhân khấp Tố Như'.", "Tiếng khóc cho thân phận con người trong xã hội cũ.", "Sức sống mãnh liệt của một tác phẩm xuyên thời gian."], image: IMAGES[3], category: SlideCategory.INTRODUCTION },
  { id: 5, title: "BỐI CẢNH LỊCH SỬ THẾ KỶ XVIII-XIX", content: ["Giai đoạn khủng hoảng trầm trọng của chế độ phong kiến.", "Nông dân khởi nghĩa khắp nơi, tiêu biểu là phong trào Tây Sơn.", "Sự sụp đổ của các tập đoàn phong kiến Lê - Trịnh - Nguyễn."], image: IMAGES[9], category: SlideCategory.INTRODUCTION },

  // PHẦN II: THỜI ĐẠI & GIA THẾ (6-15)
  { id: 6, title: "XUẤT THÂN TẠI KINH THÀNH THĂNG LONG", content: ["Nguyễn Du (1765-1820), tự Tố Như, hiệu Thanh Hiên.", "Sinh ra tại phường Bích Câu, Thăng Long trong một gia đình đại quý tộc.", "Hấp thụ tinh hoa văn hóa của mảnh đất nghìn năm văn hiến."], image: IMAGES[4], category: SlideCategory.AUTHOR },
  { id: 7, title: "QUÊ HƯƠNG ĐỊA LINH NHÂN KIỆT", content: ["Quê cha: Tiên Điền, Nghi Xuân, Hà Tĩnh - vùng đất hiếu học.", "Quê mẹ: Bắc Ninh - cái nôi của dân ca Quan họ.", "Sự kết hợp giữa chất hào sảng miền Trung và vẻ đằm thắm miền Bắc."], image: IMAGES[2], category: SlideCategory.AUTHOR },
  { id: 8, title: "GIA ĐÌNH 'TRÂM ANH THẾ PHIỆT'", content: ["Cha là Nguyễn Nghiễm - Tể tướng, nổi tiếng thông tuệ.", "Anh trai Nguyễn Khản - làm quan to, yêu nghệ thuật hát xướng.", "Nền tảng giáo dục gia đình giúp Nguyễn Du am hiểu sâu sắc văn hóa."], image: IMAGES[3], category: SlideCategory.AUTHOR },
  { id: 9, title: "NHỮNG BIẾN CỐ TUỔI THƠ", content: ["Mồ côi cha năm 10 tuổi, mồ côi mẹ năm 13 tuổi.", "Phải ở với anh trai, sớm nếm trải cảnh 'ký gửi' cô đơn.", "Tâm hồn nhạy cảm sớm hình thành trước những nỗi đau mất mát."], image: IMAGES[1], category: SlideCategory.AUTHOR },
  { id: 10, title: "MƯỜI NĂM GIÓ BỤI (THẬP NIÊN LẠC THÁC)", content: ["Sống lưu lạc nhiều nơi sau khi triều Lê sụp đổ.", "Trải nghiệm cuộc sống nghèo khó, đói khát như dân thường.", "Vốn sống thực tế phong phú là chất liệu cho văn chương sau này."], image: IMAGES[0], category: SlideCategory.AUTHOR },
  { id: 11, title: "CUỘC SỐNG TẠI QUÊ VỢ THÁI BÌNH", content: ["Lấy vợ người họ Đoàn ở Thái Bình.", "Tiếp cận văn hóa dân gian đồng bằng Bắc Bộ.", "Quan sát trực tiếp nỗi khổ của người nông dân lao động."], image: IMAGES[9], category: SlideCategory.AUTHOR },
  { id: 12, title: "TRỞ VỀ TIÊN ĐIỀN (HÀ TĨNH)", content: ["Cảm hứng từ núi Hồng sông Lam.", "Sáng tác những bài thơ mang đậm nỗi ưu tư về thời thế.", "Giai đoạn chiêm nghiệm sâu sắc về lẽ biến dịch của cuộc đời."], image: IMAGES[2], category: SlideCategory.AUTHOR },
  { id: 13, title: "SỰ NGHIỆP QUAN TRƯỜNG NHÀ NGUYỄN", content: ["1802: Ra làm quan bất đắc dĩ cho triều Nguyễn.", "Từng giữ chức Tri huyện, Tri phủ, rồi Cần chánh điện học sĩ.", "Tâm trạng luôn trăn trở, u uất vì lý tưởng chưa trọn."], image: IMAGES[4], category: SlideCategory.AUTHOR },
  { id: 14, title: "HÀNH TRÌNH ĐI SỨ TRUNG QUỐC", content: ["1813: Làm Chánh sứ sang nhà Thanh.", "Dặm dài quan sát thực tế xã hội Trung Hoa.", "Ra đời tập thơ 'Bắc hành tạp lục' đầy giá trị hiện thực."], image: IMAGES[3], category: SlideCategory.AUTHOR },
  { id: 15, title: "NGÀY CUỐI ĐỜI TẠI HUẾ", content: ["Mất năm 1820 tại Huế sau một cơn bệnh dịch.", "Trước khi mất không trối trăn gì, chỉ nói 'Được'.", "Để lại một khoảng trống lớn trong văn đàn dân tộc."], image: IMAGES[0], category: SlideCategory.AUTHOR },

  // PHẦN III: SỰ NGHIỆP VĂN CHƯƠNG (16-25)
  { id: 16, title: "DI SẢN THƠ CHỮ HÁN ĐỒ SỘ", content: ["Hơn 250 bài thơ chữ Hán đặc sắc.", "Thanh Hiên thi tập (78 bài).", "Nam trung tạp ngâm (40 bài) và Bắc hành tạp lục (132 bài)."], image: IMAGES[1], category: SlideCategory.LITERARY_CAREER },
  { id: 17, title: "NỘI DUNG THƠ CHỮ HÁN", content: ["Phê phán xã hội phong kiến thối nát, bất công.", "Thương xót cho những kiếp người nhỏ bé, tài hoa.", "Thể hiện nỗi cô đơn, bế tắc của một nhân cách lớn."], image: IMAGES[2], category: SlideCategory.LITERARY_CAREER },
  { id: 18, title: "VĂN TẾ THẬP LOẠI CHÚNG SINH", content: ["Một kiệt tác nhân đạo bằng chữ Nôm.", "Tiếng khóc thương cho mọi kiếp người lầm than.", "Tấm lòng bao dung, không phân biệt đẳng cấp xã hội."], image: IMAGES[9], category: SlideCategory.LITERARY_CAREER },
  { id: 19, title: "ĐẶC ĐIỂM NGHỆ THUẬT THƠ NÔM", content: ["Sử dụng ngôn ngữ dân tộc điêu luyện.", "Thể lục bát, song thất lục bát đạt trình độ cổ điển.", "Cách tân trong việc miêu tả nội tâm và phong cảnh."], image: IMAGES[5], category: SlideCategory.LITERARY_CAREER },
  { id: 20, title: "CÁC TÁC PHẨM KHÁC", content: ["Văn tế sống hai cô gái Trường Lưu.", "Thác lời trai phường nón.", "Những thử nghiệm sáng tạo trước khi có Truyện Kiều."], image: IMAGES[1], category: SlideCategory.LITERARY_CAREER },

  // PHẦN IV: KIỆT TÁC TRUYỆN KIỀU (21-45)
  { id: 21, title: "NGUỒN GỐC VÀ SÁNG TẠO", content: ["Dựa trên 'Kim Vân Kiều truyện' của Thanh Tâm Tài Nhân.", "Cải biến từ một cuốn tiểu thuyết chương hồi thành truyện thơ.", "Thổi vào đó linh hồn Việt, tư tưởng nhân đạo mới."], image: IMAGES[6], category: SlideCategory.TRUYEN_KIEU },
  { id: 22, title: "TÊN GỌI 'ĐOẠN TRƯỜNG TÂN THANH'", content: ["Nghĩa là 'Tiếng kêu mới về nỗi đau đứt ruột'.", "Phản ánh nỗi đau tột cùng của con người trong nghịch cảnh.", "Tên gọi dân gian: 'Truyện Kiều'."], image: IMAGES[5], category: SlideCategory.TRUYEN_KIEU },
  { id: 23, title: "TÓM TẮT: GẶP GỠ VÀ ĐÍNH ƯỚC", content: ["Chị em Thúy Kiều đi du xuân, gặp Kim Trọng.", "Tình yêu chớm nở đầy trong sáng và lãng mạn.", "Lời thề nguyền 'Trăm năm tạc một chữ đồng'."], image: IMAGES[7], category: SlideCategory.TRUYEN_KIEU },
  { id: 24, title: "TÓM TẮT: GIA BIẾN VÀ BÁN MÌNH", content: ["Gia đình Kiều bị vu oan, cha và em bị bắt.", "Kiều quyết định bán mình chuộc cha, làm tròn chữ Hiếu.", "Bi kịch bắt đầu từ đây: Kiều trao duyên cho Vân."], image: IMAGES[8], category: SlideCategory.TRUYEN_KIEU },
  { id: 25, title: "TÓM TẮT: 15 NĂM LƯU LẠC", content: ["Bị lừa vào lầu xanh của Tú Bà.", "Trải qua bao thăng trầm: Thúc Sinh, Từ Hải.", "Bị đày đọa giữa bùn nhơ nhưng tâm hồn vẫn thanh khiết."], image: IMAGES[6], category: SlideCategory.TRUYEN_KIEU },
  { id: 26, title: "TÓM TẮT: ĐOÀN TỤ", content: ["Kiều được cứu tại sông Tiền Đường sau khi tự vẫn.", "Kim Trọng không ngừng tìm kiếm và cuối cùng đã gặp lại.", "Mái nhà xưa ấm áp, khép lại hành trình đầy bão giông."], image: IMAGES[5], category: SlideCategory.TRUYEN_KIEU },
  { id: 27, title: "NHÂN VẬT THÚY KIỀU: VẺ ĐẸP TOÀN DIỆN", content: ["'Sắc đành đòi một tài đành họa hai'.", "Vẻ đẹp vượt qua mọi khuôn mẫu, mang tính dự báo.", "Tài năng cầm, kỳ, thi, họa đạt mức tinh anh."], image: IMAGES[8], category: SlideCategory.TRUYEN_KIEU },
  { id: 28, title: "TÂM HỒN THÚY KIỀU", content: ["Lòng vị tha, luôn nghĩ cho người khác trước bản thân.", "Đức hy sinh cao cả vì gia đình và người yêu.", "Khát vọng tự do và ý thức về nhân phẩm mạnh mẽ."], image: IMAGES[7], category: SlideCategory.TRUYEN_KIEU },
  { id: 29, title: "NHÂN VẬT KIM TRỌNG", content: ["Bậc 'tài tử phong lưu', tiêu biểu cho tầng lớp nho sĩ.", "Tình yêu thủy chung, son sắt bất chấp 15 năm xa cách.", "Người giữ lời hứa và trân trọng phẩm giá của Kiều."], image: IMAGES[7], category: SlideCategory.TRUYEN_KIEU },
  { id: 30, title: "NHÂN VẬT TỪ HẢI: NGƯỜI ANH HÙNG", content: ["'Đội trời đạp đất', mang tầm vóc sử thi.", "Đại diện cho khát vọng công lý, tự do của nhân dân.", "Cái chết đứng hiên ngang: 'Nào có sợ gì sóng gió'."], image: IMAGES[6], category: SlideCategory.TRUYEN_KIEU },
  { id: 31, title: "HỆ THỐNG NHÂN VẬT PHẢN DIỆN", content: ["Mã Giám Sinh, Tú Bà: Buôn thịt bán người vô nhân tính.", "Sở Khanh: Kẻ lừa tình hèn hạ, xảo trá.", "Hồ Tôn Hiến: Quan lại bất tài, dùng thủ đoạn đê hèn."], image: IMAGES[6], category: SlideCategory.TRUYEN_KIEU },
  { id: 32, title: "NHÂN VẬT HOẠN THƯ", content: ["Biểu tượng của lòng ghen tuông nhưng cũng rất sắc sảo.", "Cách đánh ghen 'thâm nho', đầy mưu mô.", "Cũng là nạn nhân của chế độ đa thê phong kiến."], image: IMAGES[5], category: SlideCategory.TRUYEN_KIEU },
  { id: 33, title: "NGHỆ THUẬT XÂY DỰNG NHÂN VẬT", content: ["Miêu tả ngoại hình để bộc lộ tính cách (bút pháp ước lệ).", "Khắc họa nội tâm tinh tế qua ngôn ngữ đối thoại, độc thoại.", "Mỗi nhân vật là một điển hình sắc nét, sống động."], image: IMAGES[8], category: SlideCategory.TRUYEN_KIEU },
  { id: 34, title: "NGHỆ THUẬT TẢ CẢNH NGỤ TÌNH", content: ["Cảnh không chỉ là cảnh, mà là tâm trạng con người.", "Dùng thiên nhiên làm đòn bẩy để bộc lộ nỗi niềm.", "Ví dụ: Cảnh du xuân vui tươi vs Cảnh lầu Ngưng Bích u buồn."], image: IMAGES[5], category: SlideCategory.TRUYEN_KIEU },
  { id: 35, title: "PHÂN TÍCH: CẢNH NGÀY XUÂN", content: ["Vẻ đẹp thanh tân, sức sống của mùa xuân.", "Ngôn ngữ gợi hình, gợi cảm: 'Cỏ non xanh tận chân trời'.", "Dự báo về một cuộc gặp gỡ định mệnh."], image: IMAGES[7], category: SlideCategory.TRUYEN_KIEU },
  { id: 36, title: "PHÂN TÍCH: CHỊ EM THÚY KIỀU", content: ["Bút pháp ước lệ mẫu mực của văn học trung đại.", "Sự khác biệt giữa vẻ đẹp Thúy Vân và Thúy Kiều.", "Ngôn ngữ ca ngợi con người đạt đến sự hoàn mĩ."], image: IMAGES[8], category: SlideCategory.TRUYEN_KIEU },
  { id: 37, title: "PHÂN TÍCH: KIỀU Ở LẦU NGƯNG BÍCH", content: ["Nỗi cô đơn, bơ vơ giữa không gian mênh mông.", "Tâm trạng nhớ cha mẹ, nhớ người yêu Kim Trọng.", "Điệp từ 'Buồn trông' tạo nhịp điệu sầu bi, ám ảnh."], image: IMAGES[5], category: SlideCategory.TRUYEN_KIEU },
  { id: 38, title: "PHÂN TÍCH: KIỀU BÁO ÂN BÁO OÁN", content: ["Thể hiện quan niệm ở hiền gặp lành, ác giả ác báo.", "Sự phân xử thấu tình đạt lý của Thúy Kiều.", "Từ Hải hỗ trợ Kiều thực hiện công lý xã hội."], image: IMAGES[6], category: SlideCategory.TRUYEN_KIEU },
  { id: 39, title: "NGÔN NGỮ TIẾNG VIỆT TRONG TRUYỆN KIỀU", content: ["Đưa tiếng Việt đạt đến sự trong sáng, hàm súc nhất.", "Sử dụng điển cố, điển tích một cách tự nhiên, linh hoạt.", "Hòa quyện giữa ngôn ngữ bác học và bình dân."], image: IMAGES[9], category: SlideCategory.TRUYEN_KIEU },
  { id: 40, title: "THỂ THƠ LỤC BÁT MẪU MỰC", content: ["Cách gieo vần, phối thanh cực kỳ tinh tế.", "Biến hóa nhịp điệu theo từng hoàn cảnh, cảm xúc.", "Là giáo khoa thư cho các thế hệ nhà thơ sau này."], image: IMAGES[5], category: SlideCategory.TRUYEN_KIEU },
  { id: 41, title: "GIÁ TRỊ HIỆN THỰC", content: ["Phơi bày bộ mặt tàn bạo của xã hội phong kiến.", "Sức mạnh hủy diệt của đồng tiền: 'Dẫu lìa ngó ý còn vương tơ lòng'.", "Thân phận con người bị coi rẻ, chà đạp."], image: IMAGES[0], category: SlideCategory.TRUYEN_KIEU },
  { id: 42, title: "GIÁ TRỊ NHÂN ĐẠO", content: ["Sự thấu cảm sâu sắc với những nỗi khổ của con người.", "Khẳng định, đề cao tài năng, phẩm giá và vẻ đẹp con người.", "Đòi quyền sống, quyền hạnh phúc và khát vọng tự do."], image: IMAGES[1], category: SlideCategory.TRUYEN_KIEU },
  { id: 43, title: "TRIẾT LÝ: CHỮ TÂM VÀ CHỮ TÀI", content: ["'Chữ Tâm kia mới bằng ba chữ Tài'.", "Đề cao cái tâm lương thiện trước sóng gió cuộc đời.", "Lời nhắc nhở về đạo đức sống cho hậu thế."], image: IMAGES[4], category: SlideCategory.TRUYEN_KIEU },
  { id: 44, title: "TRIẾT LÝ: THÂN PHẬN VÀ ĐỊNH MỆNH", content: ["'Trời xanh quen thói má hồng đánh ghen'.", "Sự mâu thuẫn giữa tài hoa và số phận (Tài mệnh tương đố).", "Lời tố cáo xã hội vùi dập cái đẹp, cái thiện."], image: IMAGES[3], category: SlideCategory.TRUYEN_KIEU },
  { id: 45, title: "TRUYỆN KIỀU: TIẾNG NÓI PHỤ NỮ", content: ["Tiếng nói đòi quyền bình đẳng cho phụ nữ trong xã hội cũ.", "Sự trân trọng vẻ đẹp tâm hồn của người phụ nữ lầm lạc.", "Nguyễn Du là nhà nữ quyền tiên phong trong văn học Việt."], image: IMAGES[8], category: SlideCategory.TRUYEN_KIEU },

  // PHẦN V: TỔNG KẾT & DI SẢN (46-50)
  { id: 46, title: "SỨC SỐNG CỦA TRUYỆN KIỀU", content: ["Đi vào đời sống nhân dân qua bói Kiều, lẩy Kiều, đố Kiều.", "Được dịch ra nhiều thứ tiếng nhất trong văn học Việt.", "Là niềm cảm hứng bất tận cho âm nhạc, hội họa, điện ảnh."], image: IMAGES[9], category: SlideCategory.CONCLUSION },
  { id: 47, title: "VINH DANH QUỐC TẾ", content: ["UNESCO công nhận Nguyễn Du là Danh nhân văn hóa thế giới.", "Truyện Kiều được thế giới nhìn nhận như một kiệt tác nhân loại.", "Khẳng định tầm vóc của văn hóa Việt Nam trên bản đồ thế giới."], image: IMAGES[2], category: SlideCategory.CONCLUSION },
  { id: 48, title: "NHẬN ĐỊNH CỦA CÁC NHÀ VĂN", content: ["Phạm Quỳnh: 'Truyện Kiều còn, tiếng ta còn'.", "Chế Lan Viên: 'Nguyễn Du viết Kiều, đất nước hóa thành văn'.", "Tố Hữu: 'Tố Như ơi lệ chảy quanh thân Kiều'."], image: IMAGES[4], category: SlideCategory.CONCLUSION },
  { id: 49, title: "TỔNG KẾT HÀNH TRÌNH", content: ["Nguyễn Du - Trái tim lớn, tài năng lớn của dân tộc.", "Truyện Kiều - Báu vật tinh thần vĩnh cửu.", "Trách nhiệm của thế hệ trẻ trong việc bảo tồn di sản."], image: IMAGES[0], category: SlideCategory.CONCLUSION },
  { id: 50, title: "TRÂN TRỌNG CẢM ƠN", content: ["Cảm ơn quý thầy cô và các bạn đã lắng nghe.", "Hy vọng bài thuyết trình mang lại nhiều cảm xúc ý nghĩa.", "Mời quý vị đặt câu hỏi thảo luận."], image: IMAGES[1], category: SlideCategory.CONCLUSION },
];
