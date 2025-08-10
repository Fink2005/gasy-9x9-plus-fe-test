import Loading from '@/app/[locale]/loading';
import { Header } from '@/components/header-footer/Header';
import BoxTable from '@/components/home/BoxTable';
import { Suspense } from 'react';

const page = () => {
  // const headersList = await headers();
  // const pathName = headersList.get('x-pathname');
  // console.log(pathName);
  return (
    <div className="bg-9x9 flex flex-col items-center h-[calc(100vh-30px)]">
      <Header />
      <h1 className="text-shadow-custom text-[20px] font-[860] mt-4">
        9x9Plus
      </h1>
      <h2 className="text-shadow-custom text-[14px] font-[510] text-center">
        Chặng Đường 9 Tầng Thăng Cấp - Bạn Đã Mở
        <br />
        Box Chưa ?
      </h2>
      <Suspense fallback={<Loading />}>
        <BoxTable />
      </Suspense>
    </div>
  );
};

export default page;
