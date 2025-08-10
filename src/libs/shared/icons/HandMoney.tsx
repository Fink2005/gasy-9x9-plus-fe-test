interface HandMoneyProps extends React.SVGProps<SVGSVGElement> {}

const HandMoney = (props: HandMoneyProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={63} height={67} viewBox="0 -4 63 67" fill="none" {...props}>
    <g filter="url(#filter0_di_38_113)">
      <path d="M23.3466 40.5179H23C21.7429 40.5179 21.1144 40.5179 20.7238 40.1273C20.3333 39.7368 20.3333 39.1083 20.3333 37.8512V36.3685C20.3333 35.6772 20.3333 35.3316 20.5109 35.0229C20.6885 34.7141 20.9563 34.5584 21.4921 34.2468C25.0194 32.1952 30.0286 31.0404 33.3721 33.0345C33.5966 33.1685 33.7988 33.3303 33.9713 33.5241C34.7154 34.36 34.6613 35.6215 33.8037 36.37C33.6225 36.528 33.4296 36.648 33.2352 36.6896C33.3949 36.6711 33.548 36.6499 33.6941 36.6265C34.9093 36.4327 35.9293 35.7833 36.8632 35.0779L39.2728 33.2577C40.1222 32.616 41.383 32.6159 42.2326 33.2573C42.9976 33.8349 43.2314 34.7859 42.7478 35.5609C42.184 36.4649 41.3894 37.6213 40.6265 38.3279C39.8625 39.0355 38.7252 39.6672 37.7966 40.1153C36.768 40.6119 35.6317 40.8979 34.4758 41.0851C32.1317 41.4644 29.6888 41.4065 27.3684 40.9285C26.0567 40.6583 24.6944 40.5179 23.3466 40.5179Z" fill="#BAE7FF" />
      <path d="M23.7813 15.4478C23.2922 15.9368 23.1094 16.6124 23.041 17.6664C24.6655 17.6448 25.9783 16.332 25.9999 14.7075C24.9459 14.7759 24.2703 14.9587 23.7813 15.4478Z" fill="#BAE7FF" />
      <path d="M38.2187 15.4478C37.7296 14.9587 37.054 14.7759 36 14.7075C36.0216 16.332 37.3344 17.6448 38.9589 17.6664C38.8905 16.6124 38.7077 15.9368 38.2187 15.4478Z" fill="#BAE7FF" />
      <path d="M38.2187 24.5522C37.7296 25.0413 37.054 25.2241 36 25.2925C36.0217 23.668 37.3344 22.3552 38.9589 22.3336C38.8905 23.3876 38.7077 24.0632 38.2187 24.5522Z" fill="#BAE7FF" />
      <path d="M23.7813 24.5522C24.2703 25.0413 24.9459 25.2241 25.9999 25.2925C25.9783 23.668 24.6655 22.3552 23.041 22.3336C23.1094 23.3876 23.2922 24.0632 23.7813 24.5522Z" fill="#BAE7FF" />
      <path fillRule="evenodd" clipRule="evenodd" d="M23 19.6667C25.7614 19.6667 28 17.4281 28 14.6667H34C34 17.4281 36.2385 19.6667 39 19.6667V20.3334C36.2385 20.3334 34 22.5719 34 25.3334H28C28 22.5719 25.7614 20.3334 23 20.3334V19.6667ZM31 21.3334C31.7364 21.3334 32.3333 20.7364 32.3333 20C32.3333 19.2636 31.7364 18.6667 31 18.6667C30.2636 18.6667 29.6667 19.2636 29.6667 20C29.6667 20.7364 30.2636 21.3334 31 21.3334Z" fill="#BAE7FF" />
    </g>
    <defs>
      <filter id="filter0_di_38_113" x={-5} y="-2.66667" width={72} height={72} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="5.33333" />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_113" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_113" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="5.33333" />
        <feGaussianBlur stdDeviation="2.66667" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_38_113" />
      </filter>
    </defs>
  </svg>
);
export default HandMoney;
