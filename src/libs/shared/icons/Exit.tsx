const ExitIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={41}
      height={33}
      viewBox="0 0 41 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {
        ...props
      }
    >
      <g filter="url(#filter0_di_596_1462)">
        <path fillRule="evenodd" clipRule="evenodd" d="M14.3335 15.3784V18.6216C14.3335 20.1505 14.3335 20.9149 14.8146 21.3899C15.2516 21.8214 15.9307 21.8609 17.2125 21.8645C17.1447 21.4149 17.1306 20.8779 17.127 20.2459C17.1255 19.9773 17.3449 19.7583 17.617 19.7567C17.8891 19.7553 18.111 19.9719 18.1125 20.2405C18.1165 20.9498 18.1352 21.4526 18.2061 21.8341C18.2745 22.2018 18.3844 22.4146 18.5443 22.5725C18.7262 22.7521 18.9814 22.8691 19.4636 22.9331C19.9598 22.999 20.6176 23 21.5606 23H22.2176C23.1606 23 23.8184 22.999 24.3146 22.9331C24.7968 22.8691 25.052 22.7521 25.2338 22.5725C25.4157 22.393 25.5342 22.1409 25.599 21.665C25.6658 21.1751 25.6668 20.5257 25.6668 19.5946V14.4054C25.6668 13.4743 25.6658 12.825 25.599 12.335C25.5342 11.859 25.4157 11.607 25.2338 11.4275C25.052 11.2479 24.7968 11.1309 24.3146 11.0669C23.8184 11.001 23.1606 11 22.2176 11H21.5606C20.6176 11 19.9598 11.001 19.4636 11.0669C18.9814 11.1309 18.7262 11.2479 18.5443 11.4275C18.3844 11.5854 18.2745 11.7982 18.2061 12.1658C18.1352 12.5474 18.1165 13.0502 18.1125 13.7595C18.111 14.0281 17.8891 14.2447 17.617 14.2432C17.3449 14.2417 17.1255 14.0227 17.127 13.754C17.1306 13.1221 17.1447 12.5851 17.2125 12.1355C15.9307 12.1391 15.2516 12.1786 14.8146 12.6101C14.3335 13.0851 14.3335 13.8495 14.3335 15.3784ZM15.9561 17.344C15.7636 17.154 15.7636 16.846 15.9561 16.656L17.2701 15.3587C17.4625 15.1687 17.7745 15.1687 17.9669 15.3587C18.1593 15.5487 18.1593 15.8567 17.9669 16.0467L17.4941 16.5135H22.2174C22.4896 16.5135 22.7102 16.7313 22.7102 17C22.7102 17.2687 22.4896 17.4865 22.2174 17.4865H17.4941L17.9669 17.9533C18.1593 18.1433 18.1593 18.4513 17.9669 18.6413C17.7745 18.8313 17.4625 18.8313 17.2701 18.6413L15.9561 17.344Z" fill="#40A9FF" />
      </g>
      <defs>
        <filter id="filter0_di_596_1462" x={-3} y={-2} width={46} height={46} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_596_1462" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_596_1462" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_596_1462" />
        </filter>
      </defs>
    </svg>
  );
};

export default ExitIcon;
