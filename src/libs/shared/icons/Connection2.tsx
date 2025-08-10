import React from 'react';

interface Connection2IconProps extends React.SVGProps<SVGSVGElement> {}

const Connection2Icon = (props: Connection2IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={42} height={44} viewBox="0 0 42 44" fill="none" {...props}>
      <g filter="url(#filter0_di_2084_2282)">
        <path fillRule="evenodd" clipRule="evenodd" d="M22.2007 13.5555C22.2007 12.3282 23.2002 11.3333 24.433 11.3333C25.6659 11.3333 26.6654 12.3282 26.6654 13.5555C26.6654 14.7828 25.6659 15.7778 24.433 15.7778C23.8105 15.7778 23.2479 15.524 22.8434 15.1156L19.7532 17.2196C19.7817 17.3616 19.7967 17.5083 19.7967 17.6581C19.7967 17.9548 19.738 18.2384 19.6318 18.4976L23.0202 20.7238C23.4048 20.4107 23.8969 20.2222 24.433 20.2222C25.6659 20.2222 26.6654 21.2171 26.6654 22.4444C26.6654 23.6717 25.6659 24.6666 24.433 24.6666C23.2002 24.6666 22.2007 23.6717 22.2007 22.4444C22.2007 22.123 22.2695 21.817 22.3932 21.5407L19.0321 19.3324C18.64 19.6732 18.1264 19.8803 17.5644 19.8803C16.3315 19.8803 15.332 18.8854 15.332 17.6581C15.332 16.4308 16.3315 15.4359 17.5644 15.4359C18.2733 15.4359 18.9044 15.7648 19.313 16.2768L22.308 14.2376C22.2383 14.0224 22.2007 13.793 22.2007 13.5555Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_2084_2282" x={-2} y={-1} width={46} height={46} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2084_2282" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2084_2282" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2084_2282" />
        </filter>
      </defs>
    </svg>

  );
};

export default Connection2Icon;
