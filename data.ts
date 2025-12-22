
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
          },
          {
            id: 102,
            question: "Giao diện GUI giúp người dùng tương tác bằng gì?",
            options: ["Câu lệnh văn bản", "Hình ảnh và biểu tượng", "Mã nhị phân", "Tín hiệu điện thanh"],
            correctAnswer: 1
          }
        ],
        content: 'Hệ điều hành là tập hợp các chương trình điều khiển toàn bộ hoạt động của máy tính và cung cấp giao diện giao tiếp giữa người dùng và máy tính.'
      },
      {
        id: 'bai-2',
        title: 'Bài 2: Phần mềm ứng dụng',
        objectives: [
          'Phân biệt phần mềm thương mại và phần mềm tự do.',
          'Biết cách khai thác phần mềm ứng dụng hiệu quả.'
        ],
        keyKnowledge: [
          'Phần mềm thương mại: Phải trả phí để sử dụng.',
          'Phần mềm tự do/mã nguồn mở: Miễn phí và có thể sửa đổi mã nguồn.',
          'Phần mềm trực tuyến (SaaS): Sử dụng qua trình duyệt không cần cài đặt.'
        ],
        exercises: [
          {
            question: 'Nêu ví dụ về một phần mềm mã nguồn mở phổ biến.',
            solution: 'LibreOffice, trình duyệt Firefox, hệ điều hành Linux (Ubuntu).'
          }
        ],
        quizzes: [
          {
            id: 201,
            question: "Phần mềm nào sau đây là phần mềm thương mại?",
            options: ["VLC Media Player", "Microsoft Office", "LibreOffice", "Linux Ubuntu"],
            correctAnswer: 1
          }
        ],
        content: 'Phần mềm ứng dụng là các chương trình được thiết kế để thực hiện các công việc cụ thể theo yêu cầu của người dùng.'
      },
      {
        id: 'bai-4',
        title: 'Bài 4: Bên trong máy tính',
        objectives: [
          'Nhận diện linh kiện: CPU, RAM, ROM, Mainboard.',
          'Hiểu về các cổng kết nối phổ biến.'
        ],
        keyKnowledge: [
          'CPU thực hiện các phép tính logic và điều khiển.',
          'RAM lưu trữ dữ liệu tạm thời (mất khi tắt máy).',
          'Mạch logic cơ bản: AND, OR, NOT là nền tảng của mọi bộ xử lý.'
        ],
        exercises: [
          {
            question: 'Tại sao cần phải có RAM dung lượng lớn?',
            solution: 'RAM lớn giúp máy tính mở được nhiều ứng dụng cùng lúc mà không bị giật lag do phải hoán đổi dữ liệu liên tục với ổ cứng.'
          }
        ],
        quizzes: [
          {
            id: 401,
            question: "Linh kiện nào được coi là 'bộ não' của máy tính?",
            options: ["RAM", "Ổ cứng", "CPU", "Mainboard"],
            correctAnswer: 2
          }
        ],
        content: 'Kiến trúc máy tính hiện đại vẫn dựa trên nguyên lý Von Neumann với các thành phần gắn kết trên bảng mạch chính.'
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
        content: 'Kỷ nguyên số yêu cầu việc quản lý dữ liệu khổng lồ phải dựa trên các hệ thống CSDL hiện đại để đảm bảo tốc độ và tính chính xác.'
      }
    ]
  }
];
