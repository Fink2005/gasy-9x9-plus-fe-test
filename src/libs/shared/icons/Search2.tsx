import type { SVGProps } from 'react';

const Search2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      {
        ...props
      }
    >
      <g filter="url(#filter0_di_1718_3303)">
        <path d="M34 30L30.5001 26.5M33 20.5C33 25.1944 29.1944 29 24.5 29C19.8056 29 16 25.1944 16 20.5C16 15.8056 19.8056 12 24.5 12C29.1944 12 33 15.8056 33 20.5Z" stroke="#BAE7FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <filter id="filter0_di_1718_3303" x={-2} y={-2} width={54} height={54} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1718_3303" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1718_3303" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1718_3303" />
        </filter>
      </defs>
    </svg>

  );
};

export default Search2Icon;
