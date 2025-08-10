/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import PreviousNavigation from '@/components/PreviousNavigation';
import Arrow2Icon from '@/libs/shared/icons/Arrow2';
import BookIcon from '@/libs/shared/icons/Book';
import CertificateIcon from '@/libs/shared/icons/Certificate';
import DumbBellIcon from '@/libs/shared/icons/DumbBell';
import EarthIcon from '@/libs/shared/icons/Earth';
import FireIcon from '@/libs/shared/icons/Fire';
import Heart2Icon from '@/libs/shared/icons/Heart2';
import LikeIcon from '@/libs/shared/icons/Like';
import StarIcon from '@/libs/shared/icons/Star';
import SuitcaseIcon from '@/libs/shared/icons/Suitcase';
import TeleScopeIcon from '@/libs/shared/icons/telescope';
import type { NumerologyResponse } from '@/types/numberology';

type Props = {
  baseUrl: string;
  numerologyResult: NumerologyResponse | null | undefined;
};

const MeaningIcon = [
  Heart2Icon,
  StarIcon,
  TeleScopeIcon,
  DumbBellIcon,
  LikeIcon,
  BookIcon,
  EarthIcon,
  SuitcaseIcon,
  FireIcon,
  Arrow2Icon,
  CertificateIcon
];

const Meaning = ({ baseUrl, numerologyResult }: Props) => {
  return (
    <div className="overflow-y-auto bg-meaning flex flex-col items-center pt-10 relative px-3 min-h-screen h-[200px] pb-16 overflow-x-hidden">
      <PreviousNavigation baseUrl={baseUrl} isReload />

      <h1 className="text-shadow-custom text-medium-custom">
        Thông điệp
      </h1>
      <h2 className="text-shadow-custom text-small-custom">
        Số
        {' '}
        {numerologyResult?.number.mainNumber}
        {' '}
        -
        {numerologyResult?.meaning.description}
      </h2>
      <div className="mt-5">
        {
          numerologyResult?.meaning.content.map((item, index) => {
            const meaningIndex = index < MeaningIcon.length ? index : index % MeaningIcon.length;
            const IconComponent = MeaningIcon[meaningIndex];

            const icon = IconComponent ? <IconComponent /> : null;
            return (
              <div key={item.title} className="flex my-[0.75rem]">

                <div>
                  {icon}
                </div>
                <div className="flex flex-col items-baseline ms-[0.5rem] space-y-[0.25rem]">
                  <h3 className="text-shadow-custom text-[0.875rem] font-[860] text-left uppercase">
                    {index + 1}
                    .
                    {' '}
                    {item.title}
                  </h3>
                  <div
                    className="text-shadow-custom text-small-custom text-left"
                    dangerouslySetInnerHTML={{ __html: item.value }}
                  />
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Meaning;
