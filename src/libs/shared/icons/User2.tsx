const User2Icon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={125} height={132} viewBox="0 0 125 132" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={23} y="15.5" width={79} height={79} rx="39.5" fill="url(#paint0_linear_1043336_1141)" />
      <rect x={23} y="15.5" width={79} height={79} rx="39.5" stroke="white" />
      <g filter="url(#filter0_di_1043336_1141)">
        <path d="M62.5003 29.4014C59.1056 29.4014 55.8498 30.7499 53.4494 33.1504C51.0489 35.5509 49.7003 38.8066 49.7003 42.2014C49.7003 45.5961 51.0489 48.8519 53.4494 51.2523C55.8498 53.6528 59.1056 55.0014 62.5003 55.0014C65.8951 55.0014 69.1508 53.6528 71.5513 51.2523C73.9518 48.8519 75.3003 45.5961 75.3003 42.2014C75.3003 38.8066 73.9518 35.5509 71.5513 33.1504C69.1508 30.7499 65.8951 29.4014 62.5003 29.4014ZM46.5291 58.2014C45.6863 58.1976 44.8509 58.3603 44.0711 58.6802C43.2913 59.0002 42.5824 59.471 41.985 60.0657C41.3877 60.6603 40.9137 61.3672 40.5903 62.1455C40.2668 62.9239 40.1003 63.7585 40.1003 64.6014C40.1003 70.0126 42.7659 74.0926 46.9323 76.7518C51.0347 79.3662 56.5643 80.6014 62.5003 80.6014C68.4363 80.6014 73.9659 79.3662 78.0683 76.7518C82.2347 74.0958 84.9003 70.0094 84.9003 64.6014C84.9003 62.904 84.2261 61.2761 83.0258 60.0759C81.8256 58.8757 80.1977 58.2014 78.5003 58.2014H46.5291Z" fill="#E6F7FF" />
      </g>
      <defs>
        <filter id="filter0_di_1043336_1141" x="-9.5" y="-6.33333" width={144} height={144} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="10.6667" />
          <feGaussianBlur stdDeviation={20} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1043336_1141" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1043336_1141" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="10.6667" />
          <feGaussianBlur stdDeviation="5.33333" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1043336_1141" />
        </filter>
        <linearGradient id="paint0_linear_1043336_1141" x1="62.6356" y1={15} x2="62.6356" y2="91.0784" gradientUnits="userSpaceOnUse">
          <stop stopColor="#68DAF2" />
          <stop offset={1} stopColor="#1C5BB9" />
        </linearGradient>
      </defs>
    </svg>

  );
};

export default User2Icon;
