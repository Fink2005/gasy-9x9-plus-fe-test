interface SVGComponentProps extends React.SVGProps<SVGSVGElement> {}

const GraphUpIcon = (props: SVGComponentProps) => (
  <svg
    width={58}
    height={58}
    viewBox="0 0 58 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.62 13.62c-1.953 1.952-1.953 5.095-1.953 11.38s0 9.428 1.952 11.38c1.953 1.953 5.096 1.953 11.381 1.953s9.428 0 11.38-1.952c1.953-1.953 1.953-5.096 1.953-11.381s0-9.428-1.952-11.38c-1.953-1.953-5.096-1.953-11.381-1.953s-9.428 0-11.38 1.952m13.713 8.713a1 1 0 0 0 1 1h.92l-2.684 2.684a.333.333 0 0 1-.471 0l-2.115-2.115a2.333 2.333 0 0 0-3.3 0l-3.057 3.058a1 1 0 1 0 1.414 1.414l3.058-3.057c.13-.13.34-.13.471 0l2.114 2.114a2.333 2.333 0 0 0 3.3 0l2.684-2.683v.919a1 1 0 0 0 2 0v-3.334a1 1 0 0 0-1-1h-3.334a1 1 0 0 0-1 1"
        fill="#91D5FF"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={-2}
        y={-2}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_38_88" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_38_88"
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
        <feBlend in2="shape" result="effect2_innerShadow_38_88" />
      </filter>
    </defs>
  </svg>
);
export default GraphUpIcon;
