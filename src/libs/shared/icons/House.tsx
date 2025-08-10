import type { SVGProps } from 'react';

const HouseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    viewBox="0 0 21 20"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.6 6.519c-.433.79-.433 1.744-.433 3.65v1.268c0 3.251 0 4.877.976 5.886s2.548 1.01 5.69 1.01h3.334c3.142 0 4.714 0 5.69-1.01s.976-2.635.976-5.885V10.17c0-1.907 0-2.86-.432-3.651-.433-.79-1.224-1.281-2.804-2.262L13.93 3.222c-1.671-1.037-2.507-1.555-3.43-1.555s-1.759.518-3.43 1.555L5.403 4.257c-1.58.981-2.371 1.472-2.804 2.262M8 14.375a.625.625 0 0 0 0 1.25h5a.625.625 0 0 0 0-1.25z"
      fill="#fff"
    />
  </svg>
);
export default HouseIcon;
