import type { SVGProps } from 'react';

export const HookIcon = ({
  ropeLength,
  isShrinking,
  ...props
}: SVGProps<SVGSVGElement> & {
  ropeLength: number;
  isShrinking: boolean;
}) => {
  const hookOffsetY = ropeLength + 36; // độ dài dây + bù phần đầu cố định

  return (
    <svg
      width={26}
      height={hookOffsetY + 20}
      viewBox={`0 0 26 ${hookOffsetY + 20}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* ✅ Dây móc */}
      <line
        x1="13"
        y1="0"
        x2="13"
        y2={hookOffsetY}
        stroke="#595A61"
        strokeWidth={3}

        className={`transition-all ease-in-out ${
          isShrinking ? 'duration-[5000ms]' : 'duration-[2000ms]'
        }`}
      />

      {/* ✅ Móc nằm tại cuối dây, không dùng transform */}
      <g
        className={`transition-all ease-in-out ${
          isShrinking ? 'duration-[5000ms]' : 'duration-[2000ms]'
        }`}
      >
        <g transform={`translate(0, ${hookOffsetY - 30})`}>
          <path
            d="M16.5647 34.9501H8.875V29.78L9.12762 29.5274H16.3121C16.4112 29.6265 16.4656 29.6809 16.5647 29.78V34.9501Z"
            fill="#757A8A"
          />
          <path
            d="M25.4386 46.1166L23.9839 49L22.4311 47.4473L22.6532 45.398L20.6834 39.8076L14.578 38.9561L12.715 38.698L6.53007 39.5593L4.75627 39.8076L2.78647 45.398L3.00751 47.4473L1.45476 49L0 46.1166L1.13571 37.9532L4.42742 35.6459L8.92671 32.487H16.513L24.3029 37.9532L25.4386 46.1166Z"
            fill="#A9B0C7"
          />
        </g>
      </g>
    </svg>
  );
};
