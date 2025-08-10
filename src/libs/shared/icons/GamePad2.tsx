import type { SVGProps } from 'react';

const GamePad2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={50}
    height={42}
    viewBox="0 0 50 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {
      ...props
    }
  >
    <g filter="url(#filter0_di_827_1516)">
      <path fillRule="evenodd" clipRule="evenodd" d="M28.001 11.25C28.4152 11.25 28.751 11.5858 28.751 12V13C28.751 13.9665 27.9675 14.75 27.001 14.75H26.001C25.8629 14.75 25.751 14.8619 25.751 15V16H26.1726C28.7117 16 29.9812 16 30.9573 16.6137C31.2043 16.769 31.4336 16.9508 31.641 17.156C32.4608 17.9668 32.7498 19.203 33.3277 21.6753L34.3501 26.0491C34.7096 27.5866 33.7542 29.1243 32.2165 29.483C30.9198 29.7856 29.586 29.1527 29.0003 27.9569L28.8797 27.7106C28.3419 26.6127 27.226 25.9167 26.0035 25.9167H23.9985C22.776 25.9167 21.6601 26.6127 21.1223 27.7106L21.0017 27.9569C20.416 29.1527 19.0822 29.7856 17.7855 29.483C16.2478 29.1243 15.2924 27.5866 15.6518 26.0491L16.6743 21.6753C17.2522 19.203 17.5412 17.9668 18.361 17.156C18.5684 16.9508 18.7977 16.769 19.0447 16.6137C20.0208 16 21.2903 16 23.8293 16H24.251V15C24.251 14.0335 25.0345 13.25 26.001 13.25H27.001C27.1391 13.25 27.251 13.1381 27.251 13V12C27.251 11.5858 27.5868 11.25 28.001 11.25ZM29.001 20C29.001 20.5523 28.5533 21 28.001 21C27.4487 21 27.001 20.5523 27.001 20C27.001 19.4477 27.4487 19 28.001 19C28.5533 19 29.001 19.4477 29.001 20ZM21.501 19.25C21.9152 19.25 22.251 19.5858 22.251 20V20.75H23.001C23.4152 20.75 23.751 21.0858 23.751 21.5C23.751 21.9142 23.4152 22.25 23.001 22.25H22.251V23C22.251 23.4142 21.9152 23.75 21.501 23.75C21.0868 23.75 20.751 23.4142 20.751 23V22.25H20.001C19.5868 22.25 19.251 21.9142 19.251 21.5C19.251 21.0858 19.5868 20.75 20.001 20.75H20.751V20C20.751 19.5858 21.0868 19.25 21.501 19.25ZM30.001 23.5C30.5533 23.5 31.001 23.0523 31.001 22.5C31.001 21.9477 30.5533 21.5 30.001 21.5C29.4487 21.5 29.001 21.9477 29.001 22.5C29.001 23.0523 29.4487 23.5 30.001 23.5Z" fill="#BAE7FF" />
    </g>
    <defs>
      <filter id="filter0_di_827_1516" x={-2} y={-3} width={54} height={54} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation="7.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_827_1516" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_827_1516" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_827_1516" />
      </filter>
    </defs>
  </svg>
);
export default GamePad2;
