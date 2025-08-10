import React from 'react';

interface ArrowProps extends React.SVGProps<SVGSVGElement> {}

const ArrowIcon = (props: ArrowProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={42} height={43} viewBox="0 0 42 43" fill="none"{...props}>
      <g filter="url(#filter0_di_2107_5716)">
        <path d="M24 11.8333C25.5648 11.8333 26.8333 13.1019 26.8333 14.6667C26.8333 16.2315 25.5648 17.5 24 17.5H18C16.9875 17.5 16.1667 18.3208 16.1667 19.3333C16.1667 20.3459 16.9875 21.1667 18 21.1667H25.1262L24.6465 20.6869C24.4512 20.4916 24.4512 20.1751 24.6465 19.9798C24.8417 19.7845 25.1583 19.7845 25.3535 19.9798L26.6869 21.3131C26.8821 21.5084 26.8821 21.8249 26.6869 22.0202L25.3535 23.3535C25.1583 23.5488 24.8417 23.5488 24.6465 23.3535C24.4512 23.1583 24.4512 22.8417 24.6465 22.6465L25.1262 22.1667H18C16.4352 22.1667 15.1667 20.8981 15.1667 19.3333C15.1667 17.7685 16.4352 16.5 18 16.5H24C25.0125 16.5 25.8333 15.6792 25.8333 14.6667C25.8333 13.6541 25.0125 12.8333 24 12.8333H18.2364C18.0386 13.322 17.5595 13.6667 17 13.6667C16.2636 13.6667 15.6667 13.0697 15.6667 12.3333C15.6667 11.597 16.2636 11 17 11C17.5595 11 18.0386 11.3447 18.2364 11.8333H24Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_2107_5716" x={-2} y={-2} width={46} height={46} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2107_5716" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2107_5716" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2107_5716" />
        </filter>
      </defs>
    </svg>

  );
};

export default ArrowIcon;
