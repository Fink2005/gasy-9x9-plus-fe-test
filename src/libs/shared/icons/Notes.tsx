import type { SVGProps } from 'react';

const NotesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    viewBox="0 0 21 20"
    fill="none"
    {...props}
  >
    <path
      d="M8.417 1.667c-.69 0-1.25.56-1.25 1.25v.833c0 .69.56 1.25 1.25 1.25h4.166c.69 0 1.25-.56 1.25-1.25v-.833c0-.69-.56-1.25-1.25-1.25z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.917 3.364c-1.049.059-1.71.226-2.185.7C3 4.796 3 5.974 3 8.332v5c0 2.357 0 3.535.732 4.268s1.911.732 4.268.732h5c2.357 0 3.535 0 4.268-.732.732-.733.732-1.911.732-4.268v-5c0-2.357 0-3.536-.732-4.268-.475-.474-1.136-.641-2.185-.7v.386a2.5 2.5 0 0 1-2.5 2.5H8.417a2.5 2.5 0 0 1-2.5-2.5zm.416 8.094a.625.625 0 1 0 0 1.25H13a.625.625 0 1 0 0-1.25zm0 2.917a.625.625 0 1 0 0 1.25h4.584a.625.625 0 0 0 0-1.25z"
      fill="#fff"
    />
  </svg>
);
export default NotesIcon;
