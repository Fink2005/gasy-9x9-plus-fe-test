import type { SVGProps } from 'react';

const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 50 50" fill="none" {...props}>
    <g filter="url(#filter0_di_932_2795)">
      <path d="M35 21C35 26.5228 30.5228 31 25 31C19.4771 31 15 26.5228 15 21C15 15.4771 19.4771 11 25 11C30.5228 11 35 15.4771 35 21Z" fill="#BAE7FF" />
      <path fillRule="evenodd" clipRule="evenodd" d="M25 16.25C25.4142 16.25 25.75 16.5858 25.75 17V20.6893L28.0303 22.9697C28.3232 23.2626 28.3232 23.7374 28.0303 24.0303C27.7374 24.3232 27.2626 24.3232 26.9697 24.0303L24.4697 21.5303C24.329 21.3897 24.25 21.1989 24.25 21V17C24.25 16.5858 24.5858 16.25 25 16.25Z" fill="white" />
    </g>
    <defs>
      <filter id="filter0_di_932_2795" x={-2} y={-2} width={54} height={54} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation="7.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_932_2795" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_932_2795" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_932_2795" />
      </filter>
    </defs>
  </svg>
);
export default ClockIcon;
