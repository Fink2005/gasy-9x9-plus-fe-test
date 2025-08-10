import React from 'react';

interface WalletIconProps extends React.SVGProps<SVGSVGElement> {}

const WalletIcon = (props: WalletIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} viewBox="0 0 44 44" fill="none" {...props}>
      <g filter="url(#filter0_di_2084_4783)">
        <path fillRule="evenodd" clipRule="evenodd" d="M27.6071 16.5735C27.5707 16.5712 27.5311 16.5712 27.49 16.5712H27.4797H25.8678C24.5392 16.5712 23.4023 17.6252 23.4023 18.9998C23.4023 20.3743 24.5392 21.4284 25.8678 21.4284H27.4797H27.49C27.5311 21.4284 27.5707 21.4284 27.6071 21.426C28.1468 21.3917 28.6241 20.9661 28.6642 20.3716C28.6669 20.3326 28.6668 20.2906 28.6668 20.2516V20.241V17.7585V17.7479C28.6668 17.709 28.6669 17.667 28.6642 17.628C28.6241 17.0335 28.1468 16.6078 27.6071 16.5735ZM25.7249 19.6474C26.0669 19.6474 26.3443 19.3574 26.3443 18.9998C26.3443 18.6421 26.0669 18.3522 25.7249 18.3522C25.3829 18.3522 25.1055 18.6421 25.1055 18.9998C25.1055 19.3574 25.3829 19.6474 25.7249 19.6474Z" fill="#BAE7FF" />
        <path fillRule="evenodd" clipRule="evenodd" d="M27.4881 22.4C27.5839 22.3975 27.6564 22.4869 27.6304 22.5799C27.5014 23.0413 27.2967 23.4345 26.9682 23.7657C26.4873 24.2503 25.8776 24.4654 25.1242 24.5675C24.3922 24.6667 23.4568 24.6667 22.2759 24.6667H20.9183C19.7374 24.6667 18.802 24.6667 18.07 24.5675C17.3166 24.4654 16.7069 24.2503 16.226 23.7657C15.7451 23.281 15.5317 22.6665 15.4304 21.9072C15.332 21.1694 15.332 20.2267 15.332 19.0365V18.9635C15.332 17.7733 15.332 16.8306 15.4304 16.0928C15.5317 15.3335 15.7451 14.719 16.226 14.2343C16.7069 13.7497 17.3166 13.5346 18.07 13.4325C18.802 13.3333 19.7374 13.3333 20.9183 13.3333H22.2759C23.4568 13.3333 24.3922 13.3333 25.1242 13.4325C25.8776 13.5346 26.4873 13.7497 26.9682 14.2343C27.2967 14.5654 27.5014 14.9587 27.6304 15.4201C27.6564 15.5131 27.5839 15.6025 27.4881 15.6L25.8664 15.6C24.0436 15.6 22.437 17.0513 22.437 19C22.437 20.9487 24.0436 22.4 25.8664 22.4H27.4881ZM17.7417 15.9238C17.4755 15.9238 17.2597 16.1413 17.2597 16.4095C17.2597 16.6778 17.4755 16.8953 17.7417 16.8953H20.312C20.5781 16.8953 20.7939 16.6778 20.7939 16.4095C20.7939 16.1413 20.5781 15.9238 20.312 15.9238H17.7417Z" fill="#BAE7FF" />
        <path d="M19.1836 12.6829L20.4895 11.7208C21.1907 11.2042 22.1409 11.2042 22.8421 11.7208L24.1549 12.688C23.606 12.6666 22.9931 12.6667 22.3211 12.6667H20.874C20.26 12.6667 19.6952 12.6666 19.1836 12.6829Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_2084_4783" x={-1} y={-1} width={46} height={46} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2084_4783" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2084_4783" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2084_4783" />
        </filter>
      </defs>
    </svg>

  );
};

export default WalletIcon;
