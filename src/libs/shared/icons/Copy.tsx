const CopyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={42} height={42} viewBox="0 0 42 42" fill="none" {...props}>
    <g filter="url(#filter0_di_215_225)">
      <path d="M23.16 9.33333H20.5639C19.3877 9.33332 18.4561 9.33331 17.727 9.43173C16.9767 9.53301 16.3693 9.74642 15.8904 10.2273C15.4114 10.7082 15.1989 11.3179 15.098 12.0713C15 12.8033 15 13.7387 15 14.9195V18.8113C15 19.8167 15.6133 20.6783 16.4848 21.0395C16.4399 20.4332 16.44 19.5825 16.44 18.8747V15.5984V15.5349C16.44 14.6805 16.4399 13.9443 16.5189 13.3547C16.6035 12.7229 16.7943 12.1173 17.2835 11.626C17.7728 11.1348 18.376 10.9432 19.0053 10.8583C19.5925 10.779 20.3258 10.7791 21.1768 10.7791L21.24 10.7791H23.16L23.2232 10.7791C24.0742 10.7791 24.8059 10.779 25.3931 10.8583C25.0418 9.96519 24.1744 9.33333 23.16 9.33333Z" fill="#69C0FF" />
      <path d="M17.3999 15.5983C17.3999 13.7808 17.3999 12.8721 17.9623 12.3075C18.5246 11.7428 19.4297 11.7428 21.2399 11.7428H23.1599C24.9701 11.7428 25.8752 11.7428 26.4376 12.3075C26.9999 12.8721 26.9999 13.7808 26.9999 15.5983V18.8111C26.9999 20.6286 26.9999 21.5373 26.4376 22.1019C25.8752 22.6665 24.9701 22.6665 23.1599 22.6665H21.2399C19.4297 22.6665 18.5246 22.6665 17.9623 22.1019C17.3999 21.5373 17.3999 20.6286 17.3999 18.8111V15.5983Z" fill="#69C0FF" />
    </g>
    <defs>
      <filter id="filter0_di_215_225" x={-2} y={-3} width={46} height={46} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation="7.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_215_225" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_215_225" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_215_225" />
      </filter>
    </defs>
  </svg>

);
export default CopyIcon;
