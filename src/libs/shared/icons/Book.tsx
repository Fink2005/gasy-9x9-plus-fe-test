import React from 'react';

const BookIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={64} height={60} viewBox="0 0 64 60" fill="none" {...props}>
      <g filter="url(#filter0_di_1918_5783)">
        <path d="M15.333 33.306V14.7296C15.333 12.8993 16.8102 11.4125 18.637 11.5248C20.2643 11.6248 22.1888 11.8225 23.6663 12.2124C25.415 12.6738 27.4932 13.6566 29.1368 14.5257C29.6485 14.7963 30.1927 14.984 30.7497 15.0899V40.3876C30.2448 40.2763 29.7522 40.0966 29.287 39.8486C27.6212 38.9608 25.4688 37.9311 23.6663 37.4556C22.2052 37.07 20.3068 36.8724 18.6911 36.7713C16.8431 36.6558 15.333 35.1576 15.333 33.306Z" fill="#BAE7FF" />
        <path d="M33.25 40.3877C33.7548 40.2764 34.2475 40.0967 34.7127 39.8487C36.3785 38.9609 38.5308 37.9312 40.3333 37.4557C41.7945 37.0701 43.6928 36.8726 45.3085 36.7714C47.1567 36.6559 48.6667 35.1577 48.6667 33.3061V14.622C48.6667 12.8346 47.2563 11.3674 45.47 11.4296C43.589 11.4952 41.2448 11.6901 39.5 12.2125C37.9873 12.6653 36.2255 13.5737 34.7897 14.4046C34.304 14.6858 33.7847 14.8923 33.25 15.0232V40.3877Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_1918_5783" x={-3} y="-4.59998" width={70} height={70} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1918_5783" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1918_5783" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1918_5783" />
        </filter>
      </defs>
    </svg>

  );
};

export default BookIcon;
