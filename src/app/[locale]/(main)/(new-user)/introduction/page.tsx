import { montserrat } from '@/app/fonts/montserrat';
import IntroductionList from '@/components/introduction/IntroductionList';

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className={`${montserrat.variable} title-introduction`}>CẨM NANG HÀNH TRÌNH</h1>
      <IntroductionList />
    </div>
  );
};

export default page;
