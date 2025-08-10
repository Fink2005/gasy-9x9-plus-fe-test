'use client';
import type { NumerologyResponse } from '@/types/numberology';
import Image from 'next/image';

type Props = {
  numerologyResult: NumerologyResponse['number'] | null;
};

const StarChart = ({ numerologyResult }: Props) => {
  return (
    <div className="relative min-h-[370px] min-w-[440px] max-w-[450px] w-full">
      <Image width={500} height={500} alt="aura" src="/assets/aura-circle.webp" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[49%] z-0" />
      <Image width={500} height={500} alt="star chart" src="/assets/star-chart.webp" className="size-[10rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Destiny */}
      <button type="button" className="flex flex-col items-center absolute -top-5 left-35">
        <p className="text-shadow-custom text-medium-custom-2">SỨ MỆNH</p>
        <p className="text-shadow-custom font-[590] text-[2.5rem] bg-number size-16">
          {numerologyResult?.destiny}
        </p>
      </button>

      {/* Life Path */}
      <button type="button" className="flex flex-col items-center right-[49px] absolute top-10">
        <p className="text-shadow-custom text-medium-custom text-medium-custom-2">ĐƯỜNG ĐỜI</p>
        <p className="text-shadow-custom font-[590] text-[2.5rem] bg-number size-16">
          {numerologyResult?.lifePath}
        </p>
      </button>

      {/* Personality */}
      <button type="button" className="flex flex-col items-center left-8 absolute top-27">
        <p className="text-shadow-custom text-medium-custom-2 ">TÍNH CÁCH</p>
        <p className="text-shadow-custom font-[590] text-[2.5rem] bg-number size-16">
          {numerologyResult?.personality}
        </p>

      </button>

      {/* Soul */}
      <button type="button"className="flex flex-col items-center left-34 absolute bottom-0">
        <p className="text-shadow-custom font-[590] text-[2.5rem] bg-number size-16">
          {numerologyResult?.soul}
        </p>
        <p className="text-shadow-custom text-medium-custom-2">NHÂN CÁCH</p>
      </button>

      {/* Physical */}
      <button type="button" className="flex flex-col items-center absolute right-15 bottom-12">
        <p className="text-shadow-custom font-[590] text-[2.5rem] bg-number size-16">
          {numerologyResult?.body}
        </p>
        <p className="text-shadow-custom text-medium-custom-2">LINH HỒN</p>
      </button>

      <p className="absolute top-1/2 left-1/2 -translate-1/2 text-shadow-custom font-[590] text-[4.5rem]">
        {numerologyResult && numerologyResult.mainNumber}
      </p>
    </div>
  );
};

export default StarChart;
