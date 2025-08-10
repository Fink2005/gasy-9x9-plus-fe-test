'use client';

import { roboto } from '@/app/fonts/roboto';
import { sfPro } from '@/app/fonts/sfPro';
import LeftArrowIcon from '@/libs/shared/icons/LeftArrow';
import { usePathname, useRouter } from 'next/navigation';

const KYCHeader = () => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div id="kyc-header" className="pt-4 items-center relative min-h-[80px] transition-opacity duration-300">
      {pathName === '/verify-email' && (
        <div className="absolute left-4 cursor-pointer">
          <LeftArrowIcon onClick={() => router.back()} />
        </div>
      )}

      <div className="flex flex-col items-center justify-center w-full">
        <h2
          className={`${roboto.variable} text-[1.25rem] text-[#F2F4F7] font-medium`}
        >
          KYC
        </h2>
        <p
          className={`${sfPro.variable} text-[0.875rem] text-[#D0D5DD] font-[274]`}
        >
          Xác minh thông tin cá nhân
        </p>
      </div>
    </div>
  );
};

export default KYCHeader;
