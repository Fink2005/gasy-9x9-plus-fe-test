import { Button } from '@/components/ui/button';
import HandMoney from '@/libs/shared/icons/HandMoney';
import Link from 'next/link';

const IntroductionFooter = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-[0.12rem]">
      <p className="footer-title-introduction text-shadow-custom max-w-[20.4375rem] w-full text-center">
        👉 CẨM NANG
        {' '}
        <strong className="text-[0.75rem] font-[700]">
          9X9PLUS
        </strong>
        {' '}
        là chiếc sổ tay đồng hành để mỗi khi mở ra, bạn tìm thấy niềm tin, định hướng và sức mạnh cho bước đi tiếp theo.
      </p>
      <p className="footer-subtitle-introduction pb-[0.75rem] pt-[0.62rem]">Hãy nhớ rằng: Kho báu lớn nhất luôn nằm trong chính bạn.</p>
      <Link href="/kyc" className="max-w-[20.9375rem] w-full">
        <Button className="button-rounded w-full">
          <HandMoney />
          <span className="-translate-x-4">
            Mở khóa ngay
          </span>
        </Button>
      </Link>
    </div>
  );
};

export default IntroductionFooter;
