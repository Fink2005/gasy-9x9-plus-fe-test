/* eslint-disable react/no-array-index-key */
'use client';
import { getCookie } from '@/app/actions/cookie';
import { useUserRanking } from '@/app/http/queries/useRanking';
import { COUNT_ITEM_TO_BOTTOM } from '@/libs/shared/constants/globals';
import BronzeMedalIcon from '@/libs/shared/icons/BronzeMedal';
import GoldMedalIcon from '@/libs/shared/icons/GoldMedal';
import SilverMedalIcon from '@/libs/shared/icons/SilverMedal';
import UnknowAvatarIcon from '@/libs/shared/icons/UnknowAvatar';
import { formatAddress } from '@/libs/utils';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const top3Ranking = [
  <GoldMedalIcon key="gold-medal" />,
  <SilverMedalIcon key="silver-medal" />,
  <BronzeMedalIcon key="bronze-medal" />
];
//

const RankingList = () => {
  const [address, setAddress] = useState<string>('');

  const { ref, inView } = useInView();

  const user = useUserRanking(!!address);
  const { data, isSuccess, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = user;
  const dataRanking = data?.pages.flatMap(item => item.users);
  const dataUserTotal = data?.pages[0]?.pagination.totalItems || 0;

  const RankingWithMeIndex = dataRanking?.findIndex(playerAddress => playerAddress.address === address);
  if (RankingWithMeIndex && RankingWithMeIndex !== -1) {
    if (dataRanking && RankingWithMeIndex !== undefined && dataRanking[RankingWithMeIndex]) {
      dataRanking.unshift({
        ...dataRanking[RankingWithMeIndex],
        address: 'Tôi',
        myRanking: RankingWithMeIndex + 1
      });
    }
  } else {
    dataRanking?.unshift({
      address: 'Tôi',
      score: '0',
      myRanking: '999+',
      _id: 'my-ranking-placeholder'
    });
  }
  const totalUserRanking = dataRanking?.length || 0;
  const indexItemShouldLoadMore = totalUserRanking - COUNT_ITEM_TO_BOTTOM;
  useEffect(() => {
    (async () => {
      const authData = await getCookie('authData');
      if (authData) {
        const parsedData = JSON.parse(authData);
        setAddress(parsedData.address);
      }
    })();
  }, []);
  useEffect(() => {
    if (inView && totalUserRanking > 0) {
      fetchNextPage();
    }
  }, [hasNextPage, inView, fetchNextPage, totalUserRanking]);
  return (
    <div className="mt-[1rem] w-full overflow-y-auto h-[calc(100vh-11rem)] relative">
      <div className="flex flex-col justify-center px-5 w-full space-y-[0.88rem] absolute top-0">
        <div className="flex items-center justify-between px-3">
          <p className="text-shadow-custom text-xs">
            {dataUserTotal.toLocaleString()}
            {' '}
            người chơi
          </p>
          <p className="text-shadow-custom text-xs">Tổng số điểm nhận được</p>
        </div>
        {
          address && isSuccess && dataRanking?.map((player, index) => {
            const isSetRef = (index === indexItemShouldLoadMore) || (index === totalUserRanking);
            return (
              <div
                key={`${player._id}-${index}`}
                className={`ranking-list-items flex items-center justify-around ${(dataRanking.length - 1) === index ? 'mb-4' : ''} ${index === 0 ? '!bg-gradient-to-b from-[#68daf2] to-[#1c5bb9]'
                  : ''
                }`}
                ref={isSetRef ? ref : null}
              >
                <div className={`flex items-center ${(index !== 0 && index < 4) ? '' : 'translate-x-[2px] space-x-2'} `}>
                  <span className="text-shadow-custom font-[500] text-[1rem]">
                    {index === 0 && player.myRanking}
                    {index < 4 ? top3Ranking[index - 1] : index}
                  </span>
                  <UnknowAvatarIcon className="size-12" />
                </div>
                <span className="text-shadow-custom text-[1rem] font-[400] w-[120px] text-center">{index !== 0 ? formatAddress(player.address, 8) : player.address}</span>
                <div className="flex items-center">
                  <span className="text-shadow-custom text-[0.875rem] font-[590]">
                    {player.score.toLocaleString()}
                  </span>
                  <Image
                    src="/assets/badge-medal.png"
                    alt="Badge Medal"
                    width={100}
                    height={100}
                    className="inline-block ml-1 w-[24px] h-[26px]"
                  />
                </div>
              </div>
            );
          })
        }
        <div className="w-full flex justify-center items-center mt-4">
          { (isFetchingNextPage || isLoading)
            && <Loader2 className="animate-spin text-shadow-custom text-xl text-center" />}
        </div>
      </div>

    </div>
  );
};

export default RankingList;
