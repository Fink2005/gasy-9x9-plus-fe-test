const ExitIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={45}
      viewBox="0 0 50 45"
      fill="none"
      {
        ...props
      }
    >
      <g filter="url(#filter0_di_2121_5446)">
        <path fillRule="evenodd" clipRule="evenodd" d="M23.6669 12.1344L23.165 11.7792C22.4486 11.2723 21.5926 11 20.715 11H20.1026C19.6984 11 19.2901 11.0255 18.9091 11.1606C16.5264 12.0057 14.8875 15.095 15.006 22.1026C15.0299 23.5145 15.3603 25.075 16.6342 25.6842C17.0312 25.8741 17.4967 26 18.0267 26C18.6627 26 19.1678 25.8187 19.5576 25.5632C19.9664 25.2953 20.3263 24.9471 20.6861 24.599C21.1307 24.1688 21.5751 23.7389 22.1112 23.4609C22.6952 23.1581 23.3434 23 24.0011 23H25.9989C26.6566 23 27.3048 23.1581 27.8888 23.4609C28.4249 23.7389 28.8693 24.1688 29.3139 24.599C29.6737 24.9471 30.0336 25.2953 30.4424 25.5632C30.8322 25.8187 31.3373 26 31.9733 26C32.5033 26 32.9688 25.8741 33.3658 25.6842C34.6397 25.075 34.9701 23.5145 34.994 22.1026C35.1125 15.095 33.4735 12.0057 31.0908 11.1606C30.7099 11.0255 30.3016 11 29.8974 11H29.2849C28.4074 11 27.5514 11.2723 26.8351 11.7792L26.3332 12.1344C25.9434 12.4103 25.4776 12.5584 25 12.5584C24.5225 12.5584 24.0567 12.4103 23.6669 12.1344ZM29.75 15C30.1642 15 30.5 15.3358 30.5 15.75C30.5 16.1642 30.1642 16.5 29.75 16.5C29.3358 16.5 29 16.1642 29 15.75C29 15.3358 29.3358 15 29.75 15ZM20.5 15.25C20.9142 15.25 21.25 15.5858 21.25 16V16.75H22C22.4142 16.75 22.75 17.0858 22.75 17.5C22.75 17.9142 22.4142 18.25 22 18.25H21.25V19C21.25 19.4142 20.9142 19.75 20.5 19.75C20.0858 19.75 19.75 19.4142 19.75 19V18.25H19C18.5858 18.25 18.25 17.9142 18.25 17.5C18.25 17.0858 18.5858 16.75 19 16.75H19.75V16C19.75 15.5858 20.0858 15.25 20.5 15.25ZM32 17.25C32 17.6642 31.6642 18 31.25 18C30.8358 18 30.5 17.6642 30.5 17.25C30.5 16.8358 30.8358 16.5 31.25 16.5C31.6642 16.5 32 16.8358 32 17.25ZM28.25 18C28.6642 18 29 17.6642 29 17.25C29 16.8358 28.6642 16.5 28.25 16.5C27.8358 16.5 27.5 16.8358 27.5 17.25C27.5 17.6642 27.8358 18 28.25 18ZM30.5 18.75C30.5 18.3358 30.1642 18 29.75 18C29.3358 18 29 18.3358 29 18.75C29 19.1642 29.3358 19.5 29.75 19.5C30.1642 19.5 30.5 19.1642 30.5 18.75Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_2121_5446" x={-2} y={-5} width={54} height={54} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2121_5446" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2121_5446" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2121_5446" />
        </filter>
      </defs>
    </svg>

  );
};

export default ExitIcon;
