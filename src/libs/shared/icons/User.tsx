const UserIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={42}
      height={42}
      viewBox="0 0 42 42"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_di_596_1458)">
        <path fillRule="evenodd" clipRule="evenodd" d="M26.6668 16C26.6668 19.6819 23.682 22.6667 20.0002 22.6667C16.3183 22.6667 13.3335 19.6819 13.3335 16C13.3335 12.3181 16.3183 9.33334 20.0002 9.33334C23.682 9.33334 26.6668 12.3181 26.6668 16ZM22.0002 14.6667C22.0002 15.7713 21.1048 16.6667 20.0002 16.6667C18.8956 16.6667 18.0002 15.7713 18.0002 14.6667C18.0002 13.5621 18.8956 12.6667 20.0002 12.6667C21.1048 12.6667 22.0002 13.5621 22.0002 14.6667ZM20.0002 21.6667C21.1895 21.6667 22.2933 21.3003 23.2048 20.6741C23.6074 20.3976 23.7794 19.8708 23.5454 19.4421C23.0602 18.5535 22.0603 18 20.0001 18C17.94 18 16.9401 18.5535 16.4549 19.4421C16.2209 19.8708 16.3929 20.3975 16.7955 20.6741C17.7069 21.3002 18.8108 21.6667 20.0002 21.6667Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_596_1458" x={-3} y={-3} width={46} height={46} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_596_1458" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_596_1458" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_596_1458" />
        </filter>
      </defs>
    </svg>

  );
};

export default UserIcon;
