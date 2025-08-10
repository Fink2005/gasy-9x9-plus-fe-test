'use client';
import { deleteCookie, getCookie } from '@/app/actions/cookie';
import { Button } from '@/components/ui/button';
import GamePad2 from '@/libs/shared/icons/GamePad2';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ResultController = () => {
  const [playLeft, setPlayLeft] = useState<string | undefined>('0');
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleSubmit = async () => {
    await deleteCookie('goldMiningScore');
    router.replace('/gold-mining');
  };
  useEffect(() => {
    queryClient.removeQueries({
      queryKey: ['userRanking'],
    });
    (async () => {
      const playTimes = await getCookie('playLeft');
      setPlayLeft(playTimes);
    })();
  }, [queryClient]);
  return (
    <div className="w-full flex flex-col items-center space-y-3 fixed bottom-26">
      <Button
        className="button-base items-center max-w-[21.4375rem] w-full"
        onClick={handleSubmit}
      >
        <GamePad2 />
        <span>
          Chơi lại (còn
          {' '}
          {playLeft}
          /9)
        </span>

      </Button>
    </div>
  );
};

export default ResultController;
