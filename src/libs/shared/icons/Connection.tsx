import type { SVGProps } from 'react';

const ConnectionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={40} height={45} viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_di_1589_2703)" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.803 14.3333C25.803 12.4924 27.3022 11 29.1515 11C31.0008 11 32.5 12.4924 32.5 14.3333C32.5 16.1743 31.0008 17.6667 29.1515 17.6667C28.2177 17.6667 27.3738 17.286 26.7671 16.6735L22.1317 19.8295C22.1745 20.0425 22.197 20.2625 22.197 20.4872C22.197 20.9322 22.109 21.3576 21.9496 21.7464L27.0323 25.0858C27.6092 24.6161 28.3473 24.3333 29.1515 24.3333C31.0008 24.3333 32.5 25.8257 32.5 27.6667C32.5 29.5076 31.0008 31 29.1515 31C27.3022 31 25.803 29.5076 25.803 27.6667C25.803 27.1845 25.9062 26.7255 26.0917 26.3111L21.0501 22.9987C20.462 23.5098 19.6916 23.8205 18.8485 23.8205C16.9992 23.8205 15.5 22.3281 15.5 20.4872C15.5 18.6462 16.9992 17.1538 18.8485 17.1538C19.9119 17.1538 20.8585 17.6473 21.4714 18.4152L25.9639 15.3564C25.8594 15.0336 25.803 14.6896 25.803 14.3333Z" fill="#BAE7FF" />
    </g>
    <defs>
      <filter id="filter0_di_1589_2703" x={-3} y={-2} width={54} height={54} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation="7.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1589_2703" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1589_2703" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1589_2703" />
      </filter>
    </defs>
  </svg>

);
export default ConnectionIcon;
