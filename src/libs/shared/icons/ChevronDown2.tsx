import React from 'react';

interface ChevronDown2IconProps extends React.SVGProps<SVGSVGElement> {}

const ChevronDown2Icon = (props: ChevronDown2IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={41} height={38} viewBox="0 0 41 38" fill="none" {...props}>
      <g filter="url(#filter0_di_2084_2426)">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.4524 14.0079C15.6321 13.7983 15.9478 13.774 16.1574 13.9537L20.4987 17.6748L24.84 13.9537C25.0496 13.774 25.3653 13.7983 25.545 14.0079C25.7247 14.2176 25.7004 14.5333 25.4908 14.7129L20.8241 18.7129C20.6368 18.8735 20.3606 18.8735 20.1733 18.7129L15.5066 14.7129C15.297 14.5333 15.2727 14.2176 15.4524 14.0079Z" fill="#BAE7FF" />
        <path d="M15.8321 11.1667C15.6228 11.1667 15.4357 11.297 15.3631 11.4932C15.2905 11.6895 15.3478 11.9101 15.5067 12.0463L20.1734 16.0463C20.3606 16.2068 20.6369 16.2068 20.8241 16.0463L25.4908 12.0463C25.6496 11.9101 25.707 11.6895 25.6344 11.4932C25.5618 11.297 25.3746 11.1667 25.1654 11.1667H15.8321Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_2084_2426" x="-2.5" y={-4} width={46} height={46} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2084_2426" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2084_2426" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2084_2426" />
        </filter>
      </defs>
    </svg>

  );
};

export default ChevronDown2Icon;
