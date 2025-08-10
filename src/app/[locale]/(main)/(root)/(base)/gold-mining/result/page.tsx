import ResultMiningGold from '@/app/[locale]/(main)/(root)/(base)/gold-mining/result/ResultMiningGold';
import Loading from '@/app/[locale]/loading';
import { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ResultMiningGold />
    </Suspense>
  );
};

export default page;
