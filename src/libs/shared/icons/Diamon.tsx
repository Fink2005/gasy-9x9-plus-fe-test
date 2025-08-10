const DiamonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none" {...props}>
    <g filter="url(#filter0_di_2121_5452)">
      <path d="M32.577 11.5H26.375L30.3214 16.7622L32.577 11.5ZM19.423 11.5L21.6786 16.7622L25.625 11.5H19.423ZM26 13.5002L23 17.5H29L26 13.5002ZM33.8258 12.3934L31.6372 17.5H36.875L33.8258 12.3934ZM18.1742 12.3934L15.0781 17.5H20.3628L18.1742 12.3934ZM20.8756 19H15.125L25.5688 32.5H25.5936L20.8756 19ZM31.1244 19L26.4064 32.5H26.4313L36.875 19H31.1244ZM29.4402 19H22.5598L26 28.75L29.4402 19Z" fill="#BAE7FF" />
    </g>
    <defs>
      <filter id="filter0_di_2121_5452" x={-1} y={-1} width={54} height={54} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation="7.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2121_5452" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2121_5452" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2121_5452" />
      </filter>
    </defs>
  </svg>

);
export default DiamonIcon;
