const Arrow3Icon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={68} height={67} viewBox="0 0 68 67" fill="none" {...props}>
      <g filter="url(#filter0_di_2121_5439)">
        <path d="M24.668 22.6667C26.8771 22.6667 28.668 20.8758 28.668 18.6667C28.668 16.4575 26.8771 14.6667 24.668 14.6667C22.4588 14.6667 20.668 16.4575 20.668 18.6667C20.668 20.8758 22.4588 22.6667 24.668 22.6667Z" fill="#BAE7FF" />
        <path d="M43.332 41.3333C45.5412 41.3333 47.332 39.5425 47.332 37.3333C47.332 35.1242 45.5412 33.3333 43.332 33.3333C41.1229 33.3333 39.332 35.1242 39.332 37.3333C39.332 39.5425 41.1229 41.3333 43.332 41.3333Z" fill="#BAE7FF" />
        <path fillRule="evenodd" clipRule="evenodd" d="M31.6655 18.6667C31.6655 18.1144 32.1132 17.6667 32.6655 17.6667H39.508C43.1763 17.6667 44.5714 22.4573 41.4766 24.4268L27.5949 33.2605C26.1881 34.1557 26.8222 36.3333 28.4896 36.3333H32.9179L32.6251 36.0404C32.2346 35.6499 32.2346 35.0168 32.6251 34.6263C33.0156 34.2357 33.6487 34.2357 34.0392 34.6263L36.0392 36.6263C36.4298 37.0168 36.4298 37.6499 36.0392 38.0404L34.0392 40.0404C33.6487 40.4309 33.0156 40.4309 32.6251 40.0404C32.2346 39.6499 32.2346 39.0168 32.6251 38.6263L32.9179 38.3333H28.4896C24.8213 38.3333 23.4263 33.5427 26.5211 31.5732L40.4028 22.7394C41.8095 21.8442 41.1754 19.6667 39.508 19.6667H32.6655C32.1132 19.6667 31.6655 19.2189 31.6655 18.6667Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_2121_5439" x={-2} y="-2.66667" width={72} height={72} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="5.33333" />
          <feGaussianBlur stdDeviation={10} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2121_5439" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2121_5439" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="5.33333" />
          <feGaussianBlur stdDeviation="2.66667" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2121_5439" />
        </filter>
      </defs>
    </svg>

  );
};

export default Arrow3Icon;
