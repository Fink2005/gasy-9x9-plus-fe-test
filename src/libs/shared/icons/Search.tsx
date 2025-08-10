import type { SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width={40} height={40} rx={20} fill="white" fillOpacity="0.1" />
      <path d="M29 29L25.5001 25.5M28 19.5C28 24.1944 24.1944 28 19.5 28C14.8056 28 11 24.1944 11 19.5C11 14.8056 14.8056 11 19.5 11C24.1944 11 28 14.8056 28 19.5Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  );
};

export default SearchIcon;
