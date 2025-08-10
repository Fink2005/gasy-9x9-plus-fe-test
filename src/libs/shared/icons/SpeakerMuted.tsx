import type { SVGProps } from 'react';

const SpeakerMutedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
      <g filter="url(#filter0_di_2386_5703)">
        <path d="M24 12L21.91 14.09L24 16.18M16.27 11L15 12.27L19.73 17H15V23H19L24 28V21.27L28.25 25.53C27.58 26.04 26.83 26.46 26 26.7V28.77C27.38 28.45 28.63 27.82 29.68 26.96L31.73 29L33 27.73L24 18.73M31 20C31 20.94 30.8 21.82 30.46 22.64L31.97 24.15C32.6455 22.8709 32.999 21.4465 33 20C33 15.72 30 12.14 26 11.23V13.29C28.89 14.15 31 16.83 31 20ZM28.5 20C28.5 18.23 27.5 16.71 26 15.97V18.18L28.45 20.63C28.5 20.43 28.5 20.21 28.5 20Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_2386_5703" x={-3} y={-3} width={54} height={54} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2386_5703" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2386_5703" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2386_5703" />
        </filter>
      </defs>
    </svg>

  );
};

export default SpeakerMutedIcon;
