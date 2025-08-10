import React from 'react';

interface Heart2Props extends React.SVGProps<SVGSVGElement> {}

const Heart2Icon = (props: Heart2Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={66} viewBox="0 0 60 66" fill="none" {...props}>
      <g filter="url(#filter0_di_1918_5756)">
        <path fillRule="evenodd" clipRule="evenodd" d="M20.4167 21.5487V21.0667C20.4167 18.0516 21.3274 15.6089 23.0863 13.9258C24.8359 12.2517 27.2637 11.4833 30 11.4833C32.7363 11.4833 35.1642 12.2517 36.9137 13.9258C38.6727 15.6089 39.5833 18.0516 39.5833 21.0667V21.5487C42.7233 22.7124 45 25.8555 45 29.5653C45 35.9625 40.0527 39.6527 35.8407 42.7947C35.4028 43.1212 34.973 43.4418 34.5573 43.759C33 44.9475 31.5 46.0667 30 46.0667C28.5 46.0667 27 44.9475 25.4426 43.759C25.0271 43.4418 24.5972 43.1212 24.1594 42.7947C19.9473 39.6527 15 35.9625 15 29.5653C15 25.8555 17.2767 22.7124 20.4167 21.5487ZM22.9167 21.0667C22.9167 18.5588 23.6622 16.8349 24.8147 15.7321C25.9767 14.6202 27.7157 13.9833 30 13.9833C32.2843 13.9833 34.0233 14.6202 35.1853 15.7321C36.3378 16.8349 37.0833 18.5588 37.0833 21.0667V21.0689C34.8082 21.0144 32.3158 21.955 30 24.2844C27.6842 21.955 25.1919 21.0144 22.9167 21.0689V21.0667ZM30 28.15C30.6903 28.15 31.25 28.7097 31.25 29.4V33.5667C31.25 34.257 30.6903 34.8167 30 34.8167C29.3097 34.8167 28.75 34.257 28.75 33.5667V29.4C28.75 28.7097 29.3097 28.15 30 28.15Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_1918_5756" x={-5} y="-1.6" width={70} height={70} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1918_5756" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1918_5756" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1918_5756" />
        </filter>
      </defs>
    </svg>

  );
};

export default Heart2Icon;
