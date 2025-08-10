import StoneIcon from '@/libs/shared/icons/Stone';
import type { GameItem } from '@/types/game';
import Image from 'next/image';

type Props = {
  blueStars: GameItem[];
  stones: GameItem[];
  blindBox: GameItem[];
  stars: GameItem[];
  setBlueStarRef: (id: number) => (element: HTMLDivElement | null) => void;
  setStoneRef: (id: number) => (element: HTMLDivElement | null) => void;
  setBlindBoxRef: (id: number) => (element: HTMLDivElement | null) => void;
  setStarRef: (id: number) => (element: HTMLDivElement | null) => void;
};
const GameItems = ({
  blueStars,
  stones,
  blindBox,
  stars,
  setBlueStarRef,
  setStoneRef,
  setBlindBoxRef,
  setStarRef
}: Props) => {
  return (
    <>

      {/* Blue Stars */}
      {blueStars.map(star => (
        <div
          key={star.id}
          ref={setBlueStarRef(star.id)}
          className="absolute"
          style={{
            left: `calc(50% + ${star.x}px)`,
            top: `${star.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Image src="/assets/blue-star.webp" width={65} height={65} className="size-[50px]" alt="blue star" />
        </div>
      ))}

      {/* Stones */}
      {stones.map(stone => (
        <div
          key={stone.id}
          ref={setStoneRef(stone.id)}
          className="absolute"
          style={{
            width: stone.size,
            height: stone.size,
            left: `calc(50% + ${stone.x}px)`,
            top: `${stone.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <StoneIcon />
        </div>
      ))}

      {/* Blind Boxes */}
      {blindBox.map(box => (
        <div
          key={box.id}
          ref={setBlindBoxRef(box.id)}
          className="size-[65px] absolute"
          style={{
            left: `calc(50% + ${box.x}px)`,
            top: `${box.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Image src="/assets/blind-box.webp" width={65} height={65} className="size-[74px]" alt="blind box" />
        </div>
      ))}

      {/* Stars */}
      {stars.map(star => (
        <div
          key={star.id}
          ref={setStarRef(star.id)}
          className="absolute "
          style={{
            left: `calc(50% + ${star.x}px)`,
            top: `${star.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Image src="/assets/star.webp" width={65} height={65} className="size-[62px]" alt="star" />
        </div>
      ))}
    </>
  );
};

export default GameItems;
