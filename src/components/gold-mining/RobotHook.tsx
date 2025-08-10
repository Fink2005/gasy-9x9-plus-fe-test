import { HookIcon } from '@/libs/shared/icons/Hook';
import HookBaseIcon from '@/libs/shared/icons/HookBase';
import StoneIcon from '@/libs/shared/icons/Stone';
import type { GameItem } from '@/types/game';
import Image from 'next/image';

type Props = {
  hookRef: React.RefObject<HTMLDivElement | null>;
  hookTipMarkerRef: React.RefObject<HTMLDivElement | null>;
  carriedItem: GameItem | null;
  angle: number;
  isSwinging: boolean;
  ropeLength: number;
  isShrinking: boolean;
  isExtending: boolean;
};
const RobotHook = ({ hookRef, carriedItem, angle, isSwinging, ropeLength, isShrinking, isExtending, hookTipMarkerRef }: Props) => {
  return (
    <div className="absolute top-20">
      <Image
        src="/assets/mining-robot.webp"
        width={107}
        height={96}
        alt="robot mining"
        className="w-[6.6875rem] h-[6rem]"
      />
      <div className="absolute left-1/2 -translate-x-1/2 top-20">
        <HookBaseIcon />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2">
        <div
          ref={hookRef}
          className="origin-top -translate-y-[9px]"
          style={{
            transform: `rotate(${angle}deg)`,
            transition: isSwinging ? 'transform 0.05s linear' : 'none',
          }}
        >
          <HookIcon
            ropeLength={ropeLength}
            isShrinking={isShrinking}
            className={isExtending ? 'transition-none' : ''}
            style={{
              transition: isExtending ? 'none !important' : undefined,
            }}
          />

          {/* Hook Tip Marker */}
          <div
            ref={hookTipMarkerRef}
            className="absolute w-2 h-2 pointer-events-none"
            style={{
              left: '1px',
              top: `${ropeLength + 36}px`,
              backgroundColor: 'transparent',
              borderRadius: '50%',
              zIndex: 100,
            }}
          />

          {/* Display carried item */}
          {carriedItem && (
            <div
              className="absolute"
              style={{
                left: `${-carriedItem.size / 2}px`,
                top: `${ropeLength + ((carriedItem.type === 'star') ? 20 : 34)}px`,
                width: carriedItem.size,
                height: carriedItem.size,
                transition: isShrinking ? 'transform 0.05s linear' : 'none',
                zIndex: 10,
              }}
            >
              {carriedItem.type === 'stone' ? (
                <div style={{ width: 65, height: 65 }}>
                  <StoneIcon />
                </div>
              ) : carriedItem.type === 'blueStar' ? (
                <div style={{ width: 50, height: 50 }}>
                  <Image src="/assets/blue-star.webp" width={65} height={65} alt="blue star" />
                </div>
              ) : carriedItem.type === 'blindBox' ? (
                <div style={{ width: 65, height: 65 }}>
                  <Image width={65} height={65} sizes="size-[65px]" alt="blind box" src="/assets/blind-box.webp" />
                </div>
              ) : (
                <div style={{ width: 65, height: 65 }}>
                  <Image src="/assets/star.webp" width={60} height={60} className="size-[62px]" alt="star" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default RobotHook;
