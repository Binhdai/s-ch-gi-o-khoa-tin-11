
import { Chapter } from './types';

export const textbookData: Chapter[] = [
  {
    id: 'chu-de-1',
    title: 'Chủ đề 1: Máy tính và xã hội tri thức',
    lessons: [
      {
        id: 'bai-1',
        title: 'Bài 1: Hệ điều hành',
        objectives: [
          'Trình bày sơ lược lịch sử phát triển hệ điều hành cho PC.',
          'Nắm được đặc điểm của hệ điều hành cho thiết bị di động.',
          'Hiểu mối quan hệ giữa phần cứng, hệ điều hành và phần mềm ứng dụng.'
        ],
        keyKnowledge: [
          'Hệ điều hành đóng vai trò trung gian trong việc quản lý phần cứng và cung cấp môi trường cho phần mềm ứng dụng.',
          'Sự phát triển: Từ dòng lệnh (CLI) sang giao diện đồ họa (GUI).',
          'Hệ điều hành di động tập trung vào tính kết nối và cảm biến.'
        ],
        exercises: [
          {
            question: 'Sự khác biệt lớn nhất giữa Windows và Android là gì?',
            solution: 'Windows thiết kế cho kiến trúc x86 (PC) với chuột/bàn phím, Android thiết kế cho kiến trúc ARM (di động) tối ưu cho cảm ứng và tiết kiệm năng lượng.'
          }
        ],
        quizzes: [
          {
            id: 101,
            question: "Hệ điều hành là loại phần mềm nào?",
            options: ["Phần mềm ứng dụng", "Phần mềm hệ thống", "Phần mềm tiện ích", "Phần mềm mã nguồn mở"],
            correctAnswer: 1
          }
        ],
        content: 'Hệ điều hành là tập hợp các chương trình điều khiển toàn bộ hoạt động của máy tính và cung cấp giao diện giao tiếp giữa người dùng và máy tính.'
      }
    ]
  },
  {
    id: 'chu-de-2',
    title: 'Chủ đề 2: Mạng máy tính và Internet',
    lessons: [
      {
        id: 'bai-5',
        title: 'Bài 5: Kết nối máy tính với các thiết bị số',
        objectives: [
          'Giải thích được cách kết nối các thiết bị thông dụng qua cổng USB, HDMI, Bluetooth.',
          'Biết cách thiết lập kết nối mạng Wi-Fi.'
        ],
        keyKnowledge: [
          'Các chuẩn kết nối phổ biến: USB (dữ liệu), HDMI (hình ảnh/âm thanh), Bluetooth (không dây tầm ngắn).',
          'Mạng Wi-Fi hoạt động dựa trên sóng vô tuyến thông qua bộ phát (Access Point).',
          'IP Address là định chỉ duy nhất của mỗi thiết bị trong mạng.'
        ],
        exercises: [
          {
            question: 'Tại sao Bluetooth thường chỉ dùng cho khoảng cách gần?',
            solution: 'Bluetooth sử dụng công nghệ sóng ngắn để tiết kiệm năng lượng và giảm nhiễu với các thiết bị khác, phù hợp kết nối tai nghe, chuột với máy tính.'
          }
        ],
        quizzes: [
          {
            id: 501,
            question: "Cổng kết nối nào chuyên dùng để truyền hình ảnh và âm thanh chất lượng cao?",
            options: ["VGA", "USB-A", "HDMI", "LAN"],
            correctAnswer: 2
          }
        ],
        content: 'Khả năng kết nối và chia sẻ dữ liệu giữa các thiết bị số tạo nên sức mạnh cho hệ sinh thái công nghệ hiện đại.'
      }
    ]
  },
  {
    id: 'chu-de-3',
    title: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số',
    lessons: [
      {
        id: 'bai-9',
        title: 'Bài 9: Giao tiếp an toàn trên Internet',
        objectives: [
          'Nhận biết được các nguy cơ trên không gian mạng.',
          'Biết cách bảo vệ thông tin cá nhân và phòng tránh lừa đảo.'
        ],
        keyKnowledge: [
          'Phần mềm độc hại (Malware): Virus, Trojan, Ransomware.',
          'Tấn công giả mạo (Phishing): Sử dụng email hoặc website giả để đánh cắp tài khoản.',
          'Quy tắc ứng xử trên mạng: Tôn trọng người khác, không chia sẻ tin giả (Fake news).'
        ],
        exercises: [
          {
            question: 'Dấu hiệu nhận biết một email lừa đảo là gì?',
            solution: 'Địa chỉ người gửi lạ, yêu cầu cung cấp mật khẩu khẩn cấp, chứa các liên kết đáng ngờ hoặc sai lỗi chính tả trầm trọng.'
          }
        ],
        quizzes: [
          {
            id: 901,
            question: "Hành vi nào sau đây là vi phạm pháp luật trên không gian mạng?",
            options: ["Chia sẻ bài báo khoa học", "Tuyên truyền thông tin sai sự thật", "Sử dụng phần mềm miễn phí", "Tham gia diễn đàn học tập"],
            correctAnswer: 1
          }
        ],
        content: 'Môi trường số đòi hỏi mỗi người dùng phải có ý thức và kỹ năng tự bảo vệ mình cũng như cộng đồng.'
      }
    ]
  },
  {
    id: 'chu-de-4',
    title: 'Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu',
    lessons: [
      {
        id: 'bai-10',
        title: 'Bài 10: Lưu trữ dữ liệu và khai thác thông tin',
        objectives: [
          'Hiểu khái niệm CSDL và Hệ quản trị CSDL.',
          'Biết vai trò của lưu trữ dữ liệu số.'
        ],
        keyKnowledge: [
          'CSDL (Database): Tập hợp dữ liệu có liên quan được tổ chức khoa học.',
          'Hệ quản trị CSDL (DBMS): Phần mềm dùng để khởi tạo, lưu trữ và khai thác CSDL.',
          'Các thao tác cơ bản: Cập nhật, tìm kiếm, kết xuất báo cáo.'
        ],
        exercises: [
          {
            question: 'Phân biệt CSDL và Hệ quản trị CSDL.',
            solution: 'CSDL là "kho chứa dữ liệu", còn Hệ quản trị CSDL là "người thủ kho" giúp ta quản lý kho đó (ví dụ MySQL, SQL Server).'
          }
        ],
        quizzes: [
          {
            id: 1001,
            question: "Thành phần nào dùng để truy xuất thông tin từ CSDL?",
            options: ["Bảng", "Câu truy vấn (Query)", "Dòng lệnh OS", "Bộ nhớ đệm"],
            correctAnswer: 1
          }
        ],
        content: 'Kỷ nguyên số yêu cầu việc quản lý dữ liệu khổng lồ phải dựa trên các hệ thống CSDL hiện đại.'
      }
    ]
  },
  {
    id: 'chu-de-5',
    title: 'Chủ đề 5: Hướng nghiệp với Tin học',
    lessons: [
      {
        id: 'bai-14',
        title: 'Bài 14: Nghề nghiệp trong lĩnh vực Tin học',
        objectives: [
          'Nêu được đặc điểm của một số nghề nghiệp chính trong lĩnh vực IT.',
          'Xác định được các kỹ năng cần thiết cho bản thân.'
        ],
        keyKnowledge: [
          'Lập trình viên (Developer): Xây dựng phần mềm.',
          'Quản trị mạng (Network Admin): Đảm bảo hệ thống mạng vận hành thông suốt.',
          'Thiết kế đồ họa (Designer): Sáng tạo hình ảnh, giao diện người dùng.',
          'Phân tích dữ liệu (Data Analyst): Trích xuất thông tin có giá trị từ dữ liệu.'
        ],
        exercises: [
          {
            question: 'Kỹ năng nào là quan trọng nhất đối với một lập trình viên?',
            solution: 'Tư duy logic, giải quyết vấn đề và khả năng tự học công nghệ mới liên tục.'
          }
        ],
        quizzes: [
          {
            id: 1401,
            question: "Nghề nào chuyên thiết kế các sản phẩm như logo, poster, banner?",
            options: ["Phát triển web", "Thiết kế đồ họa", "Kiểm thử phần mềm", "Quản trị CSDL"],
            correctAnswer: 1
          }
        ],
        content: 'Lĩnh vực công nghệ thông tin mở ra vô vàn cơ hội nghề nghiệp đa dạng và năng động cho thế hệ trẻ.'
      }
    ]
  },
  {
    id: 'chu-de-6',
    title: 'Chủ đề 6: Giải quyết vấn đề với sự trợ giúp của máy tính',
    lessons: [
      {
        id: 'bai-16',
        title: 'Bài 16: Ngôn ngữ lập trình bậc cao và Python',
        objectives: [
          'Biết cấu trúc chương trình Python đơn giản.',
          'Sử dụng được các biến, kiểu dữ liệu và lệnh gán.'
        ],
        keyKnowledge: [
          'Python là ngôn ngữ lập trình bậc cao, mã nguồn mở, dễ học và đa năng.',
          'Các kiểu dữ liệu cơ bản: int (số nguyên), float (số thực), str (chuỗi), bool (logic).',
          'Hàm input() để nhập dữ liệu và print() để xuất kết quả.'
        ],
        exercises: [
          {
            question: 'Viết đoạn mã Python nhập vào tên và in ra lời chào.',
            solution: 'ten = input("Nhập tên: ") \nprint("Chào bạn", ten)'
          }
        ],
        quizzes: [
          {
            id: 1601,
            question: "Để in kết quả ra màn hình trong Python, ta dùng hàm nào?",
            options: ["input()", "write()", "print()", "echo()"],
            correctAnswer: 2
          }
        ],
        content: 'Lập trình là công cụ mạnh mẽ để hiện thực hóa các thuật toán và giải quyết các bài toán phức tạp.'
      }
    ]
  },
  {
    id: 'chu-de-7',
    title: 'Chủ đề 7: Phần mềm ứng dụng nâng cao',
    lessons: [
      {
        id: 'bai-22',
        title: 'Bài 22: Phần mềm thiết kế đồ họa vector',
        objectives: [
          'Phân biệt đồ họa bitmap và đồ họa vector.',
          'Sử dụng được các công cụ vẽ cơ bản trong Inkscape.'
        ],
        keyKnowledge: [
          'Đồ họa Bitmap: Cấu tạo từ các điểm ảnh (pixel), dễ bị vỡ khi phóng to.',
          'Đồ họa Vector: Cấu tạo từ các công thức toán học, không bị vỡ khi thay đổi kích thước.',
          'Inkscape là phần mềm thiết kế vector miễn phí mạnh mẽ.'
        ],
        exercises: [
          {
            question: 'Khi nào nên sử dụng đồ họa vector thay vì bitmap?',
            solution: 'Khi cần thiết kế logo, biểu tượng hoặc các ấn phẩm in ấn cần thay đổi kích thước lớn mà không làm giảm chất lượng.'
          }
        ],
        quizzes: [
          {
            id: 2201,
            question: "Đặc điểm nổi bật nhất của đồ họa vector là gì?",
            options: ["Màu sắc chân thực như ảnh chụp", "Kích thước tệp lớn", "Không bị vỡ hình khi phóng to", "Chỉ hiển thị được trắng đen"],
            correctAnswer: 2
          }
        ],
        content: 'Làm chủ các phần mềm đồ họa giúp bạn nâng cao khả năng sáng tạo và truyền tải thông tin bằng hình ảnh hiệu quả.'
      }
    ]
  }
];
