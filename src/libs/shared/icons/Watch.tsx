import React from 'react';

interface WatchIconProps extends React.SVGProps<SVGSVGElement> {}

const WatchIcon: React.FC<WatchIconProps> = (props) => {
  return (
    <svg
      width={58}
      height={58}
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {
        ...props
      }
    >
      <rect x={5} y={1} width={48} height={48} rx={24} fill="url(#paint0_radial_1935_4953)" fillOpacity="0.5" />
      <g filter="url(#filter0_di_1935_4953)">
        <path d="M24.1128 11.0006H33.8849C34.2104 11.0005 34.4599 11.0004 34.678 11.0218C36.229 11.1735 37.4985 12.106 38.0368 13.362H19.9609C20.4993 12.106 21.7687 11.1735 23.3197 11.0218C23.5378 11.0004 23.7873 11.0005 24.1128 11.0006Z" fill="#BAE7FF" />
        <path d="M21.0337 14.8117C19.0868 14.8117 17.4905 15.9874 16.9577 17.547C16.9466 17.5795 16.936 17.6122 16.9258 17.645C17.4832 17.4762 18.0633 17.366 18.6506 17.2907C20.1631 17.0968 22.0746 17.0969 24.295 17.097H33.9439C36.1643 17.0969 38.0759 17.0968 39.5884 17.2907C40.1756 17.366 40.7558 17.4762 41.3131 17.645C41.303 17.6122 41.2924 17.5795 41.2812 17.547C40.7485 15.9874 39.1521 14.8117 37.2052 14.8117H21.0337Z" fill="#BAE7FF" />
        <path fillRule="evenodd" clipRule="evenodd" d="M33.6586 18.7591H24.3413C19.6166 18.7591 17.2542 18.7591 15.9272 20.1407C14.6003 21.5222 14.9125 23.6567 15.5369 27.9257L16.1291 31.9738C16.6188 35.3216 16.8636 36.9954 18.1197 37.9978C19.3757 39.0002 21.2283 39.0002 24.9335 39.0002H33.0664C36.7717 39.0002 38.6243 39.0002 39.8804 37.9978C41.1365 36.9954 41.3812 35.3216 41.8709 31.9738L42.4631 27.9257C43.0875 23.6568 43.3997 21.5222 42.0728 20.1407C40.7457 18.7591 38.3834 18.7591 33.6586 18.7591ZM32.6137 30.3121C33.3954 29.8276 33.3954 28.5729 32.6137 28.0884L27.8934 25.1621C27.1337 24.6911 26.2 25.3042 26.2 26.2741V32.1264C26.2 33.0963 27.1337 33.7094 27.8934 33.2384L32.6137 30.3121Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_1935_4953" x="-2.80078" y="-2.79999" width="63.6016" height="63.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1935_4953" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1935_4953" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1935_4953" />
        </filter>
        <radialGradient id="paint0_radial_1935_4953" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(5 2.33649) rotate(44.1911) scale(66.9439 118.378)">
          <stop stopColor="white" stopOpacity="0.6" />
          <stop offset={1} stopColor="white" stopOpacity="0.2" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default WatchIcon;
