import { montserrat } from '@/app/fonts/montserrat';
import WelcomeFooter from '@/components/welcome/WelcomeFooter';
import WelcomeList1 from '@/components/welcome/WelcomeList1';
import Shield2Icon from '@/libs/shared/icons/Shield2';

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="title-welcome flex flex-col">
        <h1 className={`${montserrat.variable} w-full max-w-[19rem] text-center text-title-welcome`}>KHO BÁU BÊN TRONG BẠN</h1>
      </div>
      <p className="subtitle-welcome text-shadow-custom pt-[0.75rem]">Tấm vé mở ra hành trình kết nối thịnh vượng toàn cầu</p>
      <div className="layout-welcome-list">
        <div className={`${montserrat.variable} welcome-list-items space-y-[0.30rem] mb-6`}>
          <WelcomeList1 />
          <div className="font-[700] text-white text-[0.6875rem] flex items-center h-4 -translate-x-3">
            <Shield2Icon className="size-9 translate-y-[3px]" />
            <span className="-translate-x-1 text-[0.6875rem] font-[500]">
              Cam kết hành trình
            </span>
          </div>
          <ul className="list-inside space-y-1">
            <li>
              Đây không phải một trò chơi tài chính, mà là hành trình khám phá và trưởng thành nội tâm.
            </li>
            <li>
              Mỗi bước đi bạn thực hiện sẽ khắc sâu thêm sự tự tin, trí tuệ và khả năng lan tỏa yêu thương.
            </li>
            <li>
              Chúng tôi đồng hành như một người bạn, một cộng đồng
              <br />
              – để cùng nhau mở những chiếc hộp kho báu vô giá.
            </li>
          </ul>
          <div className="footer-layout-welcome mt-3">
            <p className="footer-text-welcome text-shadow-custom">
              Bắt đầu hành trình mở Kho báu bên trong bạn ngay
              <br />
              hôm nay
            </p>
          </div>
        </div>
        <WelcomeFooter />
      </div>
    </div>
  );
};

export default page;
