import type { SVGProps } from 'react';

const MinuteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={44}
      height={44}
      viewBox="0 0 44 44"
      fill="none"
      {
        ...props
      }
    >
      <g filter="url(#filter0_di_2084_5128)">
        <path fillRule="evenodd" clipRule="evenodd" d="M28.6654 18C28.6654 21.6819 25.6806 24.6667 21.9987 24.6667C18.3168 24.6667 15.332 21.6819 15.332 18C15.332 14.3181 18.3168 11.3333 21.9987 11.3333C25.6806 11.3333 28.6654 14.3181 28.6654 18ZM24.4987 18C24.4987 18.2761 24.2748 18.5 23.9987 18.5H19.9987C19.7226 18.5 19.4987 18.2761 19.4987 18C19.4987 17.7239 19.7226 17.5 19.9987 17.5H23.9987C24.2748 17.5 24.4987 17.7239 24.4987 18Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_2084_5128" x={-1} y={-1} width={46} height={46} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2084_5128" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2084_5128" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2084_5128" />
        </filter>
      </defs>
    </svg>

  );
};

export default MinuteIcon;
