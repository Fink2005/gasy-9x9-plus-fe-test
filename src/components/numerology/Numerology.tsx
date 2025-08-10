'use client';
import StarChart from '@/components/numerology/StarChart';
import PreviousNavigation from '@/components/PreviousNavigation';
import { Button } from '@/components/ui/button';
import type { NumerologyResponse } from '@/types/numberology';
import Image from 'next/image';

type Props = {
  baseUrl: string;
  numerologyResult: NumerologyResponse['number'] | null;
};

const Numerology = ({ baseUrl, numerologyResult }: Props) => {
  const handleNavigation = (meaning: string) => {
    window.location.href = `${baseUrl}&meaning=${meaning}`;
  };
  return (
    <div className="flex flex-col items-center h-[calc(100vh-100px)] overflow-y-auto">
      <PreviousNavigation baseUrl="/numerology" />
      <h1 className="text-shadow-custom text-medium-custom">Khám phá bản thân</h1>
      <p className="text-shadow-custom text-small-custom">Hiểu bản thân để sống đúng với bản thân</p>
      <Image width={500} height={500} className="w-[250px] h-[160px]" alt="logo 9x9" src="/assets/logo-9x9.png" />
      <StarChart numerologyResult={numerologyResult} />
      <div className="w-full flex justify-center mt-6">
        <Button className="button-base w-full max-w-[343px] cursor-pointer z-20" onClick={() => handleNavigation('true')}>
          Thông điệp dành cho bạn
        </Button>
      </div>
      <p className="text-[#FFD8BF] mt-6 italic text-center text-small-custom text-shadow-[0px_4px_4px_rgba(255,216,191,0.50)] px-4">
        Lưu ý: Đây là những chỉ số mang tính chất tham khảo, không đảm bảo về tính chính xác tuyệt đối.
      </p>
    </div>
  );
};

export default Numerology;
