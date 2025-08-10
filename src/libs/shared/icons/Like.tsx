import React from 'react';

const LikeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={76} height={85} viewBox="0 0 76 85" fill="none" {...props}>
      <g filter="url(#filter0_di_1918_5777)">
        <path d="M49.782 42.5083L50.9579 35.7087C51.2515 34.0103 49.9455 32.457 48.2239 32.457H39.5887C38.7329 32.457 38.0812 31.6888 38.2197 30.8433L39.3242 24.1024C39.5035 23.0073 39.4524 21.8867 39.1737 20.8125C38.9429 19.9227 38.2564 19.2083 37.3535 18.9182L37.1119 18.8406C36.5662 18.6653 35.9707 18.7061 35.4562 18.954C34.89 19.2269 34.4757 19.7246 34.3222 20.3165L33.5294 23.3729C33.277 24.3454 32.9097 25.2841 32.4358 26.171C31.7436 27.467 30.6733 28.5041 29.5607 29.4628L27.1628 31.5292C26.4867 32.1118 26.1317 32.9843 26.2086 33.874L27.5622 49.5285C27.6864 50.9643 28.8869 52.0667 30.3265 52.0667H38.0742C43.8764 52.0667 48.828 48.024 49.782 42.5083Z" fill="#BAE7FF" />
        <path fillRule="evenodd" clipRule="evenodd" d="M20.9461 31.2085C21.6149 31.1797 22.1877 31.6828 22.2454 32.3497L23.8647 51.0772C23.9687 52.2802 23.0211 53.3171 21.8112 53.3171C20.6715 53.3171 19.75 52.3924 19.75 51.2549V32.4574C19.75 31.788 20.2773 31.2374 20.9461 31.2085Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_1918_5777" x={-9} y="-2.93331" width={90} height={90} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="6.66667" />
          <feGaussianBlur stdDeviation="12.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1918_5777" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1918_5777" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="6.66667" />
          <feGaussianBlur stdDeviation="3.33333" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1918_5777" />
        </filter>
      </defs>
    </svg>

  );
};

export default LikeIcon;
