import type { SVGProps } from 'react';

const ChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={45} viewBox="0 0 40 45" fill="none" {...props}>
    <g filter="url(#filter0_di_1615_2746)">
      <path d="M30.2929 11.2929C30 11.5858 30 12.0572 30 13V26C30 26.9428 30 27.4142 30.2929 27.7071C30.5858 28 31.0572 28 32 28C32.9428 28 33.4142 28 33.7071 27.7071C34 27.4142 34 26.9428 34 26V13C34 12.0572 34 11.5858 33.7071 11.2929C33.4142 11 32.9428 11 32 11C31.0572 11 30.5858 11 30.2929 11.2929Z" fill="#BAE7FF" />
      <path d="M23 16C23 15.0572 23 14.5858 23.2929 14.2929C23.5858 14 24.0572 14 25 14C25.9428 14 26.4142 14 26.7071 14.2929C27 14.5858 27 15.0572 27 16V26C27 26.9428 27 27.4142 26.7071 27.7071C26.4142 28 25.9428 28 25 28C24.0572 28 23.5858 28 23.2929 27.7071C23 27.4142 23 26.9428 23 26V16Z" fill="#BAE7FF" />
      <path d="M16.2929 18.2929C16 18.5858 16 19.0572 16 20V26C16 26.9428 16 27.4142 16.2929 27.7071C16.5858 28 17.0572 28 18 28C18.9428 28 19.4142 28 19.7071 27.7071C20 27.4142 20 26.9428 20 26V20C20 19.0572 20 18.5858 19.7071 18.2929C19.4142 18 18.9428 18 18 18C17.0572 18 16.5858 18 16.2929 18.2929Z" fill="#BAE7FF" />
      <path d="M16 30.25C15.5858 30.25 15.25 30.5858 15.25 31C15.25 31.4142 15.5858 31.75 16 31.75H34C34.4142 31.75 34.75 31.4142 34.75 31C34.75 30.5858 34.4142 30.25 34 30.25H16Z" fill="#BAE7FF" />
    </g>
    <defs>
      <filter id="filter0_di_1615_2746" x={-2} y={-2} width={54} height={54} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation="7.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1615_2746" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1615_2746" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1615_2746" />
      </filter>
    </defs>
  </svg>

);
export default ChartIcon;
