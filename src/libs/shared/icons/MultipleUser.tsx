import React from 'react';

interface MultipleUserIconProps extends React.SVGProps<SVGSVGElement> {}

const MultipleUserIcon: React.FC<MultipleUserIconProps> = (props) => {
  return (
    <svg
      width={57}
      height={57}
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {
        ...props
      }
    >
      <rect x={5} y={1} width={48} height={48} rx={24} fill="url(#paint0_radial_1935_4662)" fillOpacity="0.5" />
      <g filter="url(#filter0_di_1935_4662)">
        <path d="M24.8031 22.2005C27.8959 22.2005 30.4031 19.6933 30.4031 16.6005C30.4031 13.5078 27.8959 11.0005 24.8031 11.0005C21.7103 11.0005 19.2031 13.5078 19.2031 16.6005C19.2031 19.6933 21.7103 22.2005 24.8031 22.2005Z" fill="#BAE7FF" />
        <path d="M24.8 37.6011C30.2124 37.6011 34.6 35.0939 34.6 32.0011C34.6 28.9083 30.2124 26.4011 24.8 26.4011C19.3876 26.4011 15 28.9083 15 32.0011C15 35.0939 19.3876 37.6011 24.8 37.6011Z" fill="#BAE7FF" />
        <path d="M41.5984 32.0005C41.5984 34.3201 38.7487 36.2004 35.2693 36.2004C36.2943 35.08 36.9992 33.6735 36.9992 32.0024C36.9992 30.3294 36.2927 28.9217 35.2656 27.8005C38.745 27.8005 41.5984 29.6809 41.5984 32.0005Z" fill="#BAE7FF" />
        <path d="M37.3976 16.6017C37.3976 18.9213 35.5172 20.8017 33.1976 20.8017C32.6918 20.8017 32.2069 20.7123 31.7578 20.5484C32.4202 19.3835 32.7984 18.036 32.7984 16.6001C32.7984 15.1653 32.4207 13.8188 31.7592 12.6544C32.2079 12.4909 32.6923 12.4017 33.1976 12.4017C35.5172 12.4017 37.3976 14.2821 37.3976 16.6017Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_1935_4662" x="-2.80078" y="-2.79999" width="63.6016" height="63.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1935_4662" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1935_4662" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1935_4662" />
        </filter>
        <radialGradient id="paint0_radial_1935_4662" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(5 2.33649) rotate(44.1911) scale(66.9439 118.378)">
          <stop stopColor="white" stopOpacity="0.6" />
          <stop offset={1} stopColor="white" stopOpacity="0.2" />
        </radialGradient>
      </defs>
    </svg>

  );
};

export default MultipleUserIcon;
