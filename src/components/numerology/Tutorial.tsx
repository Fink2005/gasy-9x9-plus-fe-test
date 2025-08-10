'use client';
import { Button } from '@/components/ui/button';
import HandTouch from '@/libs/shared/icons/HandTouch';
import { isClient } from '@/libs/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const TUTORIAL_STORAGE_KEY = 'isDisplayTutorial';

const Tutorial = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const tutorialStatus = isClient && localStorage.getItem(TUTORIAL_STORAGE_KEY);

    if (tutorialStatus) {
      setIsVisible(JSON.parse(tutorialStatus));
    } else {
      isClient && localStorage.setItem(TUTORIAL_STORAGE_KEY, JSON.stringify(true));
      setIsVisible(true);
    }
  }, []);

  const handleContinue = () => {
    setIsVisible(false);
    isClient && localStorage.setItem(TUTORIAL_STORAGE_KEY, JSON.stringify(false));
  };

  return (
    <div className={`${!isVisible ? 'opacity-0 hidden' : 'opacity-100'} absolute inset-0 z-50 flex h-full flex-col items-center overflow-y-auto bg-[#222B3C]/90 py-2`}>
      <p className="text-shadow-custom text-[1.0625rem] font-[400]">
        Nhấn vào các hình tròn có icon
      </p>

      <Image
        className=""
        src="/assets/meaning-5-icons.png"
        width={160}
        height={160}
        alt="Five meaning icons"
      />

      <p className="text-shadow-custom text-[1.0625rem] font-[400]">
        để xem chi tiết các chỉ số thần số học
      </p>

      <div className="relative flex flex-col items-center">
        <Image
          className="h-full w-full max-h-[650px] max-w-[400px]"
          src="/assets/tutorial-screen.webp"
          width={500}
          height={500}
          alt="tutorial screen"
        />
        <HandTouch className="absolute bottom-50 left-14 animate-tap" />
      </div>

      <div className="flex w-full justify-center">
        <Button
          className="button-base w-full max-w-[20.4375rem]"
          onClick={handleContinue}
        >
          Tiếp tục
        </Button>
      </div>
    </div>
  );
};

export default Tutorial;
