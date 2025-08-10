import type { SVGProps } from 'react';

const MoneyMessageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 50 50" fill="none" {...props}>
    <g filter="url(#filter0_di_1589_2733)">
      <path fillRule="evenodd" clipRule="evenodd" d="M35 21C35 26.5228 30.5228 31 25 31C23.4003 31 21.8884 30.6244 20.5475 29.9565C20.1912 29.7791 19.7839 29.72 19.3994 29.8229L17.1733 30.4185C16.207 30.677 15.323 29.793 15.5815 28.8267L16.1771 26.6006C16.28 26.2161 16.2209 25.8088 16.0435 25.4525C15.3756 24.1116 15 22.5997 15 21C15 15.4771 19.4771 11 25 11C30.5228 11 35 15.4771 35 21ZM25 16.25C25.4142 16.25 25.75 16.5858 25.75 17V17.0102C26.8388 17.2845 27.75 18.143 27.75 19.3333C27.75 19.7475 27.4142 20.0833 27 20.0833C26.5858 20.0833 26.25 19.7475 26.25 19.3333C26.25 18.9493 25.8242 18.4167 25 18.4167C24.1758 18.4167 23.75 18.9493 23.75 19.3333C23.75 19.7174 24.1758 20.25 25 20.25C26.3849 20.25 27.75 21.2097 27.75 22.6667C27.75 23.857 26.8388 24.7155 25.75 24.9898V25C25.75 25.4142 25.4142 25.75 25 25.75C24.5858 25.75 24.25 25.4142 24.25 25V24.9898C23.1612 24.7155 22.25 23.857 22.25 22.6667C22.25 22.2525 22.5858 21.9167 23 21.9167C23.4142 21.9167 23.75 22.2525 23.75 22.6667C23.75 23.0507 24.1758 23.5833 25 23.5833C25.8242 23.5833 26.25 23.0507 26.25 22.6667C26.25 22.2826 25.8242 21.75 25 21.75C23.6151 21.75 22.25 20.7903 22.25 19.3333C22.25 18.143 23.1612 17.2845 24.25 17.0102V17C24.25 16.5858 24.5858 16.25 25 16.25Z" fill="#BAE7FF" />
    </g>
    <defs>
      <filter id="filter0_di_1589_2733" x={-2} y={-2} width={54} height={54} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation="7.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1589_2733" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1589_2733" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1589_2733" />
      </filter>
    </defs>
  </svg>
);
export default MoneyMessageIcon;
