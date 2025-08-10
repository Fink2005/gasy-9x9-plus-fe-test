/* eslint-disable react/no-array-index-key */
import PreviousNavigation from '@/components/PreviousNavigation';

const DataInfo = {
  rule1: {
    title: 'I. HIỂU RÕ NỀN TẢNG – ĐÁNH THỨC HÀNH TRÌNH BÊN TRONG',
    content: [
      {
        subTitle: '1. 9x9Plus là gì?',
        description: '→ Là nền tảng tiên phong kết hợp thần số học, trò chơi nhiệm vụ và kết nối cộng đồng để giúp mỗi người tìm lại chính mình và sống đúng sứ mệnh.'
      },
      {
        subTitle: '2. Nền tảng này dành cho ai?',
        description: '→ Dành cho bất kỳ ai khao khát hiểu bản thân, khai mở tiềm năng và lan tỏa giá trị sống nhân văn.'
      },
      {
        subTitle: '3. Không biết thần số học có tham gia được không?',
        description: '→ Có. Mọi thứ được hướng dẫn từ đầu – bạn chỉ cần bắt đầu, hành trình sẽ dẫn lối.'
      },
      {
        subTitle: '4. 9x9Plus có phải ứng dụng tâm linh hay mê tín?',
        description: '→ Không. Đây là công cụ gợi mở tiềm thức và khai sáng tư duy qua những biểu tượng và số học cổ xưa, chứ không dựa trên tín ngưỡng.'
      },
      {
        subTitle: '5. Điểm khác biệt lớn nhất của 9x9Plus là gì?',
        description: '→ Không dừng lại ở nội dung – 9x9Plus tạo ra một hệ sinh thái trải nghiệm và thức tỉnh nhận thức, nơi mỗi người đều có thể lớn lên cùng cộng đồng.'
      }
    ]
  },
  rule2: {
    title: 'II. PHÁP LÝ – MINH BẠCH – TIN CẬY',
    content: [
      {
        subTitle: '6. Nền tảng này có hợp pháp không?',
        description: '→ Có. 9x9Plus tuân thủ pháp luật, hoạt động trong lĩnh vực giáo dục – phát triển cá nhân – công nghệ kết nối.'
      },
      {
        subTitle: '7. Đây có phải là hình thức tài chính hay đa cấp?',
        description: '→ Tuyệt đối không. Không đầu tư, không trả lãi, không dùng tiền người sau trả người trước.'
      },
      {
        subTitle: '8. Có giữ tiền hoặc cam kết lợi nhuận không?',
        description: '→ Không. Mọi đóng góp là phí trải nghiệm nội dung. Không sinh lời – chỉ sinh tri thức.'
      },
      {
        subTitle: '9. Tôi thấy có ví 0x… là gì vậy?',
        description: '→ Đó là định danh công nghệ để tăng tính minh bạch tuyến kết nối – không phải ví tiền số, không chứa tài sản.'
      },
      {
        subTitle: '10. Nền tảng có nguy cơ "sập" không?',
        description: '→ Không. Đây là hành trình cá nhân hoá, không phụ thuộc dòng tiền, không có cơ chế "vỡ quỹ".'
      }
    ]
  },
  rule3: {
    title: 'III. CƠ CHẾ THAM GIA – HÀNH TRÌNH KHAI MỞ',
    content: [
      {
        subTitle: '11. Tham gia như thế nào?',
        description: '→ Đăng ký tài khoản, mở hộp đầu tiên và từng bước bước vào hành trình khám phá 9 tầng phát triển bản thân.'
      },
      {
        subTitle: '12. Phải giới thiệu người khác mới mở được hộp tiếp theo?',
        description: '→ Không bắt buộc. Bạn hoàn toàn có thể tự mình đi hết hành trình.'
      },
      {
        subTitle: '13. Nếu không giới thiệu ai thì có thiệt thòi gì không?',
        description: '→ Không. Hành trình là của bạn. Việc chia sẻ chỉ giúp cộng hưởng thêm – không ảnh hưởng quyền lợi.'
      },
      {
        subTitle: '14. Tôi ở tầng dưới thì ai hỗ trợ tôi?',
        description: '→ Mỗi người đều được hỗ trợ bằng tri thức, hướng dẫn và năng lượng cộng đồng – không phân tầng cao thấp về giá trị.'
      },
      {
        subTitle: '15. Nếu không có người mới tham gia thì sao?',
        description: '→ Không sao cả. Nền tảng vẫn vận hành như một ứng dụng tự học, tự trải nghiệm – giá trị đến từ bên trong bạn.'
      }
    ]
  },
  rule4: {
    title: 'IV. GIÁ TRỊ – LAN TOẢ – ĐỒNG HÀNH',
    content: [
      {
        subTitle: '16. Phí nhỏ mà nhận nhiều giá trị – có thật không?',
        description: '→ Giá trị bạn nhận được không nằm ở tiền – mà ở sự chuyển hóa, thức tỉnh và kết nối với chính mình.'
      },
      {
        subTitle: '17. Nền tảng đang hoạt động ở đâu?',
        description: '→ Trước tiên phục vụ cộng đồng người Việt, và sẽ mở rộng quốc tế khi cộng đồng đủ vững vàng.'
      },
      {
        subTitle: '18. Muốn lan tỏa chương trình hiệu quả thì làm sao?',
        description: '→ Chia sẻ bằng trải nghiệm thật – câu chuyện thật của bạn chính là cách lan toả sâu sắc nhất.'
      },
      {
        subTitle: '19. Tôi có thể trở thành người đồng hành không?',
        description: '→ Có. 9x9Plus luôn chào đón người muốn góp phần xây dựng cộng đồng tử tế – trí tuệ – cùng phát triển.'
      },
      {
        subTitle: '20. Tôi muốn góp ý hoặc hỗ trợ cải tiến – làm sao liên hệ?',
        description: '→ Gửi phản hồi qua ứng dụng hoặc email hỗ trợ. Mọi đóng góp đều được trân trọng.'
      }
    ]
  },
};

const page = () => {
  return (
    <div className="min-h-screen bg-9x9 flex flex-col items-center pt-10 px-4">
      <PreviousNavigation />

      {/* Header */}
      <div className="mb-6">
        <p className="text-[1.25rem] font-[274] text-shadow-custom text-center">9x9Plus</p>
        <p className="text-[1.25rem] font-[700] text-shadow-custom text-center">GIẢI ĐÁP HÀNH TRÌNH</p>
      </div>

      <div className="h-[calc(100vh-100px)] overflow-y-auto w-full flex flex-col items-center justify-start">
        {/* Render all sections */}
        {Object.values(DataInfo).map((section, sectionIndex) => (
          <div key={sectionIndex} className="w-full max-w-[21.4375rem] mb-3">
            {/* Section Title */}
            <h2 className="text-shadow-custom font-[700] text-[1.1rem] mb-4 text-left  text-yellow-200">
              {section.title}
            </h2>

            {/* Section Content */}
            {section.content.map((item, itemIndex) => (
              <div key={itemIndex} className="bg-card-info w-full my-4 p-4 rounded-lg">
                <div className="w-full border-b border-white pb-2">
                  <h3 className="text-left text-shadow-custom font-[590] text-[1rem]">
                    {item.subTitle}
                  </h3>
                </div>
                <p className="text-shadow-custom font-[400] text-[0.875rem] text-left mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
