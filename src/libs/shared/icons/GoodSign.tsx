interface GoodSignProps extends React.SVGProps<SVGSVGElement> {}

const GoodSign = (props: GoodSignProps) => (
  <svg
    width={131}
    height={130}
    viewBox="0 0 131 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <circle cx={65.5} cy={61} r={50} fill="url(#b)" />
      <circle cx={65.5} cy={61} r={48.5} stroke="#fff" strokeWidth={3} />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m90.674 45.142-28.66 35.835L39.5 62.213l4.248-5.097 17.31 14.423L85.498 41z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="b"
        x1={65.669}
        y1={11}
        x2={65.669}
        y2={106.098}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#68DAF2" />
        <stop offset={1} stopColor="#1C5BB9" />
      </linearGradient>
      <filter
        id="a"
        x={0.5}
        y={0}
        width={130}
        height={130}
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
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_264_6474"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_264_6474"
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
        <feBlend in2="shape" result="effect2_innerShadow_264_6474" />
      </filter>
    </defs>
  </svg>
);
export default GoodSign;
