import React from 'react';

interface ShareIconProps extends React.SVGProps<SVGSVGElement> {}

const ShareIcon = (props: ShareIconProps) => {
  return (
    <svg width={60} height={60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={5} y={3} width={48} height={48} rx={24} fill="url(#paint0_radial_1935_4732)" fillOpacity="0.5" />
      <g filter="url(#filter0_di_1935_4732)">
        <path d="M17.0503 15.0508C19.1005 13.0005 22.4003 13.0005 29 13.0005C30.4316 13.0005 31.708 13.0005 32.85 13.0215C32.8553 13.8206 33.1629 14.6182 33.7726 15.2279L35.3952 16.8505H31.8C28.1363 16.8505 25.8468 18.6675 24.9198 19.599L24.6597 19.8603L24.3985 20.1203C23.4669 21.0473 21.65 23.3369 21.65 27.0006V31.2006C21.65 32.9402 23.0603 34.3506 24.8 34.3506C26.5396 34.3506 27.95 32.9402 27.95 31.2006V27.0006C27.95 25.5723 28.6332 24.794 28.8424 24.586L29.111 24.3187L29.3854 24.0429C29.5936 23.8338 30.3717 23.1505 31.8 23.1505H35.3952L33.7726 24.7732C32.5424 26.0033 32.5424 27.9978 33.7726 29.2279C35.0028 30.4581 36.9972 30.4581 38.2274 29.2279L42.9947 24.4607C43 25.2484 43 26.0934 43 27.0006C43 33.6002 43 36.9001 40.9497 38.9503C38.8995 41.0006 35.5996 41.0006 29 41.0006C22.4003 41.0006 19.1005 41.0006 17.0503 38.9503C15 36.9001 15 33.6002 15 27.0006C15 20.4009 15 17.1011 17.0503 15.0508Z" fill="#BAE7FF" />
        <path fillRule="evenodd" clipRule="evenodd" d="M35.2576 12.2581C35.6676 11.8481 36.3324 11.8481 36.7424 12.2581L43.7424 19.2581C44.1525 19.6681 44.1525 20.333 43.7424 20.743L36.7424 27.743C36.3324 28.153 35.6676 28.153 35.2576 27.743C34.8475 27.3329 34.8475 26.6682 35.2576 26.2581L40.465 21.0506H31.8C29.6279 21.0506 28.3459 22.1104 27.8968 22.5616L27.6295 22.8302L27.361 23.0974C26.9098 23.5465 25.85 24.8285 25.85 27.0006V31.2006C25.85 31.7804 25.3799 32.2506 24.8 32.2506C24.2201 32.2506 23.75 31.7804 23.75 31.2006V27.0006C23.75 24.0833 25.1878 22.2974 25.8797 21.6089L26.1447 21.3452L26.4083 21.0803C27.0968 20.3884 28.8827 18.9506 31.8 18.9506H40.465L35.2576 13.743C34.8475 13.333 34.8475 12.6681 35.2576 12.2581Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_1935_4732" x="-2.80078" y="-0.799988" width="63.6016" height="63.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1935_4732" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1935_4732" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1935_4732" />
        </filter>
        <radialGradient id="paint0_radial_1935_4732" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(5 4.33649) rotate(44.1911) scale(66.9439 118.378)">
          <stop stopColor="white" stopOpacity="0.6" />
          <stop offset={1} stopColor="white" stopOpacity="0.2" />
        </radialGradient>
      </defs>
    </svg>

  );
};

export default ShareIcon;
