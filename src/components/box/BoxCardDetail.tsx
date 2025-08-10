import BoxDetailController from '@/components/box/BoxDetailController';
import CalendarColorIcon from '@/libs/shared/icons/CalendarColor';
import HandMoney2 from '@/libs/shared/icons/HandMoney2';
import HeartUnlockIcon from '@/libs/shared/icons/HeartUnlock';
import MoneyMessageIcon from '@/libs/shared/icons/MoneyMessage';
import MoneySuitcaseIcon from '@/libs/shared/icons/MoneySuitcase';
import MoneyWalletIcon from '@/libs/shared/icons/MoneyWallet';
import ShieldIcon from '@/libs/shared/icons/Shield';
import UserConnection from '@/libs/shared/icons/UserConnection';
import UserHeart from '@/libs/shared/icons/UserHeart';
import { formatAddress, formatDate } from '@/libs/utils';
import type { BoxDetailRes } from '@/types/box';
import Image from 'next/image';

type Props = {
  boxSlug: string;
  dataBoxDetail: BoxDetailRes;
};

const BoxCardDetail = ({ boxSlug, dataBoxDetail }: Props) => {
  const data = [
    { icon: <UserHeart />, label: 'Tổng kết nối hệ thống:', value: `${dataBoxDetail.invitedCount}` },
    { icon: <HeartUnlockIcon />, label: 'Hành trình mở khóa:', value: `${dataBoxDetail.boxNumber}/9` },
  ];

  const details = [
    { id: 'userHeart', icon: <UserHeart />, label: 'Người kết nối:', value: `${formatAddress(dataBoxDetail.invitedBy || '', 8)}` },
    { id: 'heartUnlock', icon: <HeartUnlockIcon />, label: 'Box:', value: `${dataBoxDetail.boxNumber}/9` },
    { id: 'calendar', icon: <CalendarColorIcon />, label: 'Tham gia:', value: `${formatDate(new Date(dataBoxDetail.openTime || ''))}` },
    { id: 'handMoney', icon: <HandMoney2 />, label: 'Tổng giá trị gieo:', value: `${26 * (dataBoxDetail.boxNumber || 0)}` },
    { id: 'userConnection', icon: <UserConnection />, label: 'Kết nối lan tỏa:', value: `${dataBoxDetail.invitedCount}` },
    { id: 'moneyMessage', icon: <MoneyMessageIcon />, label: 'Đã nhận tri ân:', value: `${dataBoxDetail.directedAmount}$` },
    { id: 'moneySuitcase', icon: <MoneySuitcaseIcon />, label: 'Cộng hưởng lan tỏa:', value: `${dataBoxDetail.distributedAmount}$` },
    { id: 'moneyWallet', icon: <MoneyWalletIcon />, label: 'Cộng hưởng bền vững:', value: `${dataBoxDetail.referralChainAmount}$` },
    { id: 'shield', icon: <ShieldIcon />, label: 'Giá trị tích lũy:', value: `${dataBoxDetail.receivedTotal}$` },
  ];

  return (
    <div className="w-full">
      <span className="hidden">{boxSlug}</span>
      <div className="box-card-detail w-full py-2">
        {data.map(item => (
          <div className="flex items-center h-8" key={item.label}>
            {item.icon}
            <p className="text-shadow-custom text-[1rem] font-[590]">
              {item.label}
              {' '}
              <span className="font-[860]">{item.value}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="box-card-detail w-full py-2 mt-4 relative">
        {details.map(item => (
          <div key={item.id}>
            <div className="flex items-center h-8">
              <div className="translate-y-[2px] w-10">
                {item.icon}
              </div>
              <p className="text-shadow-custom text-[1rem] font-[590]">
                {item.label}
                {' '}
                <span className="font-[860]">{item.value}</span>
              </p>
            </div>
            {item.id === 'calendar' && (
              <div className="flex items-center justify-center my-2 w-full">
                <hr className="w-[92%] border-t border-t-[rgba(255, 255, 255, 0.50)]" />
              </div>
            )}
          </div>
        ))}
        <Image
          src="/assets/robot-hello.webp"
          width={100}
          height={100}
          alt="robot-hello"
          className="absolute bottom-4 right-2 w-26"
        />
      </div>
      <BoxDetailController />
    </div>
  );
};

export default BoxCardDetail;
