const RightArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 50 50" fill="none" {...props}>
    <g filter="url(#filter0_di_1625_2026)">
      <path fillRule="evenodd" clipRule="evenodd" d="M25 31C30.5228 31 35 26.5228 35 21C35 15.4771 30.5228 11 25 11C19.4771 11 15 15.4771 15 21C15 26.5228 19.4771 31 25 31ZM22.9697 17.4697C23.2626 17.1768 23.7374 17.1768 24.0303 17.4697L27.0303 20.4697C27.3232 20.7626 27.3232 21.2374 27.0303 21.5303L24.0303 24.5303C23.7374 24.8232 23.2626 24.8232 22.9697 24.5303C22.6768 24.2374 22.6768 23.7626 22.9697 23.4697L25.4393 21L22.9697 18.5303C22.6768 18.2374 22.6768 17.7626 22.9697 17.4697Z" fill="#BAE7FF" />
    </g>
    <defs>
      <filter id="filter0_di_1625_2026" x={-2} y={-2} width={54} height={54} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation="7.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1625_2026" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1625_2026" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1625_2026" />
      </filter>
    </defs>
  </svg>

);
export default RightArrowIcon;
