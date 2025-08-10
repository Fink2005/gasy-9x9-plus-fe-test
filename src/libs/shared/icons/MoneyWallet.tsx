import type { SVGProps } from 'react';

const MoneyWalletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 50 50" fill="none" {...props}>
    <g filter="url(#filter0_di_1589_2739)">
      <path fillRule="evenodd" clipRule="evenodd" d="M33.4127 18.8609C33.3581 18.8574 33.2986 18.8574 33.237 18.8574H33.2216H30.8037C28.8108 18.8574 27.1055 20.4385 27.1055 22.5003C27.1055 24.5621 28.8108 26.1432 30.8037 26.1432H33.2216H33.237C33.2986 26.1432 33.3581 26.1432 33.4127 26.1397C34.2222 26.0882 34.9381 25.4498 34.9983 24.558C35.0023 24.4995 35.0022 24.4365 35.0022 24.3781V24.3622V20.6384V20.6225C35.0022 20.5641 35.0023 20.5011 34.9983 20.4426C34.9381 19.5509 34.2222 18.9124 33.4127 18.8609ZM30.5894 23.4717C31.1024 23.4717 31.5184 23.0368 31.5184 22.5003C31.5184 21.9638 31.1024 21.5289 30.5894 21.5289C30.0763 21.5289 29.6603 21.9638 29.6603 22.5003C29.6603 23.0368 30.0763 23.4717 30.5894 23.4717Z" fill="#BAE7FF" />
      <path fillRule="evenodd" clipRule="evenodd" d="M33.2341 27.6C33.3778 27.5963 33.4866 27.7304 33.4476 27.8699C33.2541 28.562 32.947 29.1518 32.4542 29.6485C31.7329 30.3755 30.8183 30.6981 29.6882 30.8512C28.5902 31 27.1872 31 25.4158 31H23.3794C21.608 31 20.205 31 19.107 30.8512C17.9769 30.6981 17.0623 30.3755 16.341 29.6485C15.6196 28.9215 15.2995 27.9997 15.1476 26.8608C15 25.7541 15 24.3401 15 22.5548V22.4452C15 20.6599 15 19.2459 15.1476 18.1392C15.2995 17.0003 15.6196 16.0785 16.341 15.3515C17.0623 14.6245 17.9769 14.3019 19.107 14.1488C20.205 14 21.608 14 23.3794 14H25.4158C27.1872 14 28.5902 14 29.6882 14.1488C30.8183 14.3019 31.7329 14.6245 32.4542 15.3515C32.947 15.8482 33.2541 16.438 33.4476 17.1301C33.4866 17.2696 33.3778 17.4038 33.2341 17.4L30.8015 17.4C28.0673 17.4 25.6575 19.5769 25.6575 22.5C25.6575 25.4231 28.0673 27.6 30.8015 27.6H33.2341ZM18.6145 17.8857C18.2152 17.8857 17.8916 18.2119 17.8916 18.6143C17.8916 19.0167 18.2152 19.3429 18.6145 19.3429H22.4699C22.8691 19.3429 23.1928 19.0167 23.1928 18.6143C23.1928 18.2119 22.8691 17.8857 22.4699 17.8857H18.6145Z" fill="#BAE7FF" />
      <path d="M20.7773 13.0244L22.7362 11.5813C23.7881 10.8062 25.2133 10.8062 26.2652 11.5813L28.2343 13.032C27.411 12.9999 26.4916 13 25.4836 13H23.313C22.3919 13 21.5448 13 20.7773 13.0244Z" fill="#BAE7FF" />
    </g>
    <defs>
      <filter id="filter0_di_1589_2739" x={-2} y={-2} width={54} height={54} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation="7.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1589_2739" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1589_2739" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1589_2739" />
      </filter>
    </defs>
  </svg>

);
export default MoneyWalletIcon;
