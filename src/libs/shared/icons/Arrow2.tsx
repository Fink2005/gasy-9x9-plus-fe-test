import React from 'react';

const Arrow2Icon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={65}
      viewBox="0 0 64 65"
      fill="none"
      {
        ...props
      }
    >
      <g filter="url(#filter0_di_1918_5772)">
        <path fillRule="evenodd" clipRule="evenodd" d="M42.8333 31.7332C39.6117 31.7332 37 34.1638 37 37.162C37 40.1368 38.8618 43.6082 41.7667 44.8495C42.4438 45.1388 43.2228 45.1388 43.9 44.8495C46.8048 43.6082 48.6667 40.1368 48.6667 37.162C48.6667 34.1638 46.055 31.7332 42.8333 31.7332ZM42.8333 39.2332C43.7538 39.2332 44.5 38.487 44.5 37.5665C44.5 36.646 43.7538 35.8998 42.8333 35.8998C41.9128 35.8998 41.1667 36.646 41.1667 37.5665C41.1667 38.487 41.9128 39.2332 42.8333 39.2332Z" fill="#BAE7FF" />
        <path fillRule="evenodd" clipRule="evenodd" d="M21.1663 11.7332C17.9447 11.7332 15.333 14.1637 15.333 17.162C15.333 20.1368 17.1948 23.6081 20.0996 24.8495C20.7768 25.1388 21.5559 25.1388 22.2331 24.8495C25.1379 23.6081 26.9997 20.1368 26.9997 17.162C26.9997 14.1637 24.388 11.7332 21.1663 11.7332ZM21.1663 19.2332C22.0868 19.2332 22.833 18.487 22.833 17.5665C22.833 16.646 22.0868 15.8998 21.1663 15.8998C20.2459 15.8998 19.4997 16.646 19.4997 17.5665C19.4997 18.487 20.2459 19.2332 21.1663 19.2332Z" fill="#BAE7FF" />
        <path fillRule="evenodd" clipRule="evenodd" d="M30.7505 16.7332C30.7505 16.0428 31.3102 15.4832 32.0005 15.4832H38.887C43.4723 15.4832 45.2162 21.4715 41.3477 23.9333L23.9955 34.9755C22.2371 36.0945 23.0298 38.8165 25.114 38.8165H28.9827L28.6166 38.4503C28.1285 37.9622 28.1285 37.1708 28.6166 36.6827C29.1048 36.1945 29.8962 36.1945 30.3843 36.6827L32.8843 39.1827C33.3725 39.6708 33.3725 40.4622 32.8843 40.9503L30.3843 43.4503C29.8962 43.9385 29.1048 43.9385 28.6166 43.4503C28.1285 42.9622 28.1285 42.1708 28.6166 41.6827L28.9827 41.3165H25.114C20.5286 41.3165 18.7848 35.3282 22.6533 32.8663L40.0055 21.8241C41.7638 20.7051 40.9712 17.9832 38.887 17.9832H32.0005C31.3102 17.9832 30.7505 17.4235 30.7505 16.7332Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_1918_5772" x={-3} y="-2.6001" width={70} height={70} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1918_5772" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1918_5772" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1918_5772" />
        </filter>
      </defs>
    </svg>

  );
};

export default Arrow2Icon;
