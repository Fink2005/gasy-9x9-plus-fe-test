import Profile from '@/app/[locale]/(main)/(root)/(base-without-footer)/profile/Profile';
import Loading from '@/app/[locale]/loading';
import PreviousNavigation from '@/components/PreviousNavigation';
import { Suspense } from 'react';

const page = async () => {
  return (
    <div className="bg-9x9 min-h-screen px-4">
      <div className="absolute left-1/2 -translate-1/2 w-full mt-6">
        <PreviousNavigation />
        <h1 className="text-shadow-custom text-center font-[590] text-[1.25rem]">Profile</h1>
      </div>
      <Suspense fallback={<Loading />}>
        <Profile />
      </Suspense>
    </div>
  );
};

export default page;
