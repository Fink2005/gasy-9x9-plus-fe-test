'use client';
import { getCookie } from '@/app/actions/cookie';
import { ApiException } from '@/app/http/apiRequest';
import { goldMiningRequest } from '@/app/http/requests/goldMining';
import ResultController from '@/components/gold-mining/result/ResultController';
import LoadingDots from '@/libs/shared/icons/LoadingDots';
import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const ResultMiningGold = () => {
  const score = (typeof window !== 'undefined' && localStorage.getItem('goldMiningScore')) || '';
  const queryClient = useQueryClient();

  const inspirationNumber = (typeof window !== 'undefined' && localStorage.getItem('inspiration')) || '';
  const [data, setData] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['userRanking'] });
    const fetchInspiration = async () => {
      setIsLoading(true);
      try {
        const [res, sessionId] = await Promise.all([
          goldMiningRequest.GoldMiningMessage(Number(inspirationNumber)),
          getCookie('sessionId'),
        ]);
        setData(res?.content);
        await goldMiningRequest.GoldMiningResult(sessionId || '', Number(score) || 0);
      } catch (error) {
        if (error instanceof ApiException) {
          toast.error(error.message);
        } else {
          toast.error('Đã có lỗi xảy ra, vui lòng thử lại sau.');
        }
        console.warn(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInspiration();
  }, [inspirationNumber, queryClient, score]);

  return (
    <div className="bg-gold-mining-game min-h-screen flex flex-col items-center pt-40 px-4">
      <h1 className="text-shadow-custom text-[3.25rem] font-[860]">{score}</h1>
      <div className="flex items-center space-x-2">
        <Image className="w-[1.5rem] h-[1.75rem] ms-3" src="/assets/badge-medal.png" width={100} height={100} alt="badge medal" />
        <p className="text-shadow-custom text-[1rem] font-[700]">
          {' '}
          số điểm nhận được
        </p>
      </div>
      <Image width="500" height="500" className="w-[200px] h-[130px]" alt="logo" src="/assets/logo-9x9.png" />
      {
        isLoading ? (
          <div className="flex flex-col items-center mt-10">
            <LoadingDots />
            <p className="text-shadow-custom text-[1rem] font-[700] mt-4">Đang tải thông điệp...</p>
          </div>
        ) : (
          data && (
            <p className="text-shadow-custom text-[1rem] font-[700] mt-4 text-center">
              {data}
            </p>
          )
        )
      }
      <ResultController />
    </div>
  );
};

export default ResultMiningGold;
