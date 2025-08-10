import React from 'react';

const FireIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={58} height={63} viewBox="0 0 58 63" fill="none" {...props}>
      <g filter="url(#filter0_di_1918_5799)">
        <path d="M42.3337 32.4004C42.3337 39.4912 37.9702 42.6027 34.5983 43.6521C33.8793 43.8757 33.4067 43.0376 33.8368 42.4194C35.3042 40.3107 37.0003 37.0936 37.0003 34.0671C37.0003 30.8161 34.2602 26.9779 32.1205 24.6106C31.6313 24.0694 30.7782 24.4274 30.7515 25.1566C30.663 27.5719 30.2818 30.8034 28.6383 33.3361C28.3738 33.7437 27.8123 33.7774 27.5108 33.3962C26.9973 32.7467 26.4838 31.9446 25.9703 31.3107C25.6937 30.9694 25.1937 30.9647 24.8747 31.2667C23.6307 32.4446 21.8892 34.2814 21.8892 36.5671C21.8892 38.1169 22.4897 39.7417 23.1671 41.0489C23.5398 41.7681 22.8771 42.6337 22.1599 42.2574C19.1888 40.6982 15.667 37.5397 15.667 32.4004C15.667 27.1564 22.8508 19.8918 25.5937 13.0286C26.0265 11.9456 27.3605 11.4367 28.2882 12.1434C33.9068 16.4235 42.3337 24.6972 42.3337 32.4004Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_1918_5799" x={-6} y="-3.59998" width={70} height={70} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1918_5799" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1918_5799" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1918_5799" />
        </filter>
      </defs>
    </svg>

  );
};

export default FireIcon;
