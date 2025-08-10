import React from 'react';

interface SVGComponentProps extends React.SVGProps<SVGSVGElement> {}

const HeartLockIcon = (props: SVGComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={54}
    height={59}
    viewBox="0 0 54 59"
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.333 19.719v-.386c0-2.412.729-4.366 2.136-5.712 1.4-1.34 3.342-1.954 5.531-1.954 2.19 0 4.131.614 5.53 1.954 1.408 1.346 2.137 3.3 2.137 5.712v.386C37.179 20.65 39 23.164 39 26.132c0 5.118-3.958 8.07-7.328 10.584q-.526.39-1.026.771C29.4 38.438 28.2 39.333 27 39.333s-2.4-.895-3.646-1.846q-.5-.38-1.026-.771C18.958 34.202 15 31.25 15 26.132c0-2.968 1.821-5.482 4.333-6.413m2-.386c0-2.006.597-3.385 1.519-4.267.93-.89 2.32-1.4 4.148-1.4s3.219.51 4.148 1.4c.922.882 1.519 2.261 1.519 4.267v.002c-1.82-.044-3.814.709-5.667 2.572-1.853-1.863-3.846-2.616-5.667-2.572zM27 25a1 1 0 0 1 1 1v3.333a1 1 0 1 1-2 0V26a1 1 0 0 1 1-1"
        fill="#91D5FF"
      />
    </g>

  </svg>
);
export default HeartLockIcon;
