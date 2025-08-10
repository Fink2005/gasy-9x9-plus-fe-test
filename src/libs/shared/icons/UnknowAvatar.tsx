interface UnknowAvatarIconProps extends React.SVGProps<SVGSVGElement> {}

const UnknowAvatarIcon = (props: UnknowAvatarIconProps) => {
  return (
    <svg width={58} height={58} viewBox="0 -4 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#filter0_di_466_325)">
        <rect x={15} y={11} width={28} height={28} rx={14} fill="#E6F7FF" shapeRendering="crispEdges" />
        <path d="M28.9996 15.4C27.7266 15.4 26.5057 15.9057 25.6055 16.8059C24.7053 17.7061 24.1996 18.927 24.1996 20.2C24.1996 21.473 24.7053 22.6939 25.6055 23.5941C26.5057 24.4943 27.7266 25 28.9996 25C30.2726 25 31.4935 24.4943 32.3937 23.5941C33.2939 22.6939 33.7996 21.473 33.7996 20.2C33.7996 18.927 33.2939 17.7061 32.3937 16.8059C31.4935 15.9057 30.2726 15.4 28.9996 15.4ZM23.0104 26.2C22.6943 26.1986 22.3811 26.2596 22.0887 26.3796C21.7962 26.4995 21.5304 26.6761 21.3064 26.8991C21.0824 27.1221 20.9046 27.3872 20.7833 27.6791C20.662 27.9709 20.5996 28.2839 20.5996 28.6C20.5996 30.6292 21.5992 32.1592 23.1616 33.1564C24.7 34.1368 26.7736 34.6 28.9996 34.6C31.2256 34.6 33.2992 34.1368 34.8376 33.1564C36.4 32.1604 37.3996 30.628 37.3996 28.6C37.3996 27.9635 37.1468 27.353 36.6967 26.9029C36.2466 26.4529 35.6361 26.2 34.9996 26.2H23.0104Z" fill="#595959" />
      </g>
      <defs>
        <filter id="filter0_di_466_325" x={0} y={0} width={58} height={58} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_466_325" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_466_325" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_466_325" />
        </filter>
      </defs>
    </svg>
  );
};

export default UnknowAvatarIcon;
