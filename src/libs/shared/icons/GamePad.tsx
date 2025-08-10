const GamePadIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={58}
    height={59}
    viewBox="0 0 58 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 11.667a1 1 0 0 1 1 1V14a2.333 2.333 0 0 1-2.333 2.333h-1.334a.333.333 0 0 0-.333.334V18h1.667c5.028 0 7.542 0 9.104 1.562s1.562 4.076 1.562 9.105c0 5.028 0 7.542-1.562 9.104s-4.076 1.562-9.104 1.562h-5.334c-5.028 0-7.542 0-9.104-1.562s-1.562-4.076-1.562-9.104c0-5.029 0-7.543 1.562-9.105S21.305 18 26.333 18H28v-1.333a2.333 2.333 0 0 1 2.333-2.334h1.334A.333.333 0 0 0 32 14v-1.333a1 1 0 0 1 1-1M24.667 26a1 1 0 1 0-2 0v1.4c0 .147-.12.267-.267.267H21a1 1 0 1 0 0 2h1.4c.147 0 .267.119.267.266v1.4a1 1 0 1 0 2 0v-1.4c0-.147.119-.266.266-.266h1.4a1 1 0 0 0 0-2h-1.4a.267.267 0 0 1-.266-.267zM33 28a1.333 1.333 0 1 0 0-2.667A1.333 1.333 0 0 0 33 28m4 2.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0"
        fill="#BAE7FF"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={-2}
        y={-1}
        width={62}
        height={62}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={7.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_38_94" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_38_94"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
        <feBlend in2="shape" result="effect2_innerShadow_38_94" />
      </filter>
    </defs>
  </svg>
);
export default GamePadIcon;
