interface QuestionCircleIconProps extends React.SVGProps<SVGSVGElement> {}

const QuestionCircleIcon = (props: QuestionCircleIconProps) => {
  return (
    <svg width={44} height={43} viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#filter0_di_827_1520)">
        <path fillRule="evenodd" clipRule="evenodd" d="M32 21C32 26.5228 27.5228 31 22 31C16.4771 31 12 26.5228 12 21C12 15.4771 16.4771 11 22 11C27.5228 11 32 15.4771 32 21ZM22 16.75C21.3787 16.75 20.875 17.2537 20.875 17.875C20.875 18.2892 20.5392 18.625 20.125 18.625C19.7108 18.625 19.375 18.2892 19.375 17.875C19.375 16.4253 20.5503 15.25 22 15.25C23.4497 15.25 24.625 16.4253 24.625 17.875C24.625 18.5858 24.3415 19.232 23.883 19.704C23.7907 19.7989 23.7027 19.8869 23.6187 19.9708C23.4029 20.1864 23.2138 20.3753 23.0479 20.5885C22.8289 20.8699 22.75 21.0768 22.75 21.25V22C22.75 22.4142 22.4142 22.75 22 22.75C21.5858 22.75 21.25 22.4142 21.25 22V21.25C21.25 20.5948 21.555 20.0644 21.8642 19.6672C22.0929 19.3733 22.3804 19.0863 22.6138 18.8535C22.6842 18.7832 22.7496 18.7179 22.807 18.6588C23.0046 18.4554 23.125 18.18 23.125 17.875C23.125 17.2537 22.6213 16.75 22 16.75ZM22 26C22.5523 26 23 25.5523 23 25C23 24.4477 22.5523 24 22 24C21.4477 24 21 24.4477 21 25C21 25.5523 21.4477 26 22 26Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_827_1520" x={-5} y={-2} width={54} height={54} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_827_1520" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_827_1520" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_827_1520" />
        </filter>
      </defs>
    </svg>

  );
};

export default QuestionCircleIcon;
