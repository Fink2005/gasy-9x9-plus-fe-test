import ResultNumerology from '@/app/[locale]/(main)/(root)/(base)/numerology/result/ResultNumerology';
import Loading from '@/app/[locale]/loading';
import { Suspense } from 'react';

const page = async ({ searchParams }: { searchParams: Promise<Record<'name' | 'birth' | 'meaning', string | undefined>> }) => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ResultNumerology searchParams={searchParams} />
      </Suspense>
    </>
  );
};

export default page;
