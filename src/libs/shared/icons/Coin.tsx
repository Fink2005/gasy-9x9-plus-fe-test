import type { SVGProps } from 'react';

const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={129} height={129} viewBox="0 0 129 129" fill="none" {...props}>
    <g filter="url(#filter0_di_1449_1943)">
      <path fillRule="evenodd" clipRule="evenodd" d="M64.5 106C38.8175 106 18 85.1825 18 59.5C18 33.8175 38.8175 13 64.5 13C90.1825 13 111 33.8175 111 59.5C111 85.1825 90.1825 106 64.5 106ZM70.0858 53.0859V46.2097H85.8203V35.724H42.9792V46.2097H58.7137V53.083C45.9262 53.6701 36.3094 56.2043 36.3094 59.2384C36.3094 62.2726 45.9262 64.8039 58.7137 65.3939V87.4291H70.0858V65.3881C82.853 64.801 92.4465 62.2697 92.4465 59.2384C92.4465 56.2072 82.853 53.6759 70.0858 53.0859ZM70.0858 63.5193V63.5135C69.7661 63.5368 68.1183 63.6356 64.4419 63.6356C61.5066 63.6356 59.4402 63.5484 58.7137 63.5135V63.5223C47.4142 63.0253 38.9802 61.0578 38.9802 58.7037C38.9802 56.3496 47.4142 54.385 58.7137 53.8793V61.5634C59.4518 61.6157 61.5676 61.7407 64.4913 61.7407C67.9991 61.7407 69.7574 61.5954 70.0858 61.5663V53.8851C81.3621 54.3879 89.7757 56.3554 89.7757 58.7037C89.7757 61.0578 81.3621 63.0195 70.0858 63.5193Z" fill="#BAE7FF" />
    </g>
    <defs>
      <filter id="filter0_di_1449_1943" x="0.341772" y="0.050633" width="128.316" height="128.316" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="4.70886" />
        <feGaussianBlur stdDeviation="8.82911" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1449_1943" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1449_1943" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="4.70886" />
        <feGaussianBlur stdDeviation="2.35443" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1449_1943" />
      </filter>
    </defs>
  </svg>

);
export default ClockIcon;
