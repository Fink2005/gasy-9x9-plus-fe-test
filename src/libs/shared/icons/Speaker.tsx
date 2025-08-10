interface SpeakerIconProps extends React.SVGProps<SVGSVGElement> {}

const SpeakerIcon = (props: SpeakerIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
      <g filter="url(#filter0_di_932_2801)" {...props}>
        <path d="M26 11.23V13.29C28.89 14.15 31 16.83 31 20C31 23.17 28.89 25.84 26 26.7V28.77C30 27.86 33 24.28 33 20C33 15.72 30 12.14 26 11.23ZM28.5 20C28.5 18.23 27.5 16.71 26 15.97V24C27.5 23.29 28.5 21.76 28.5 20ZM15 17V23H19L24 28V12L19 17H15Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_932_2801" x={-3} y={-3} width={54} height={54} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_932_2801" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_932_2801" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_932_2801" />
        </filter>
      </defs>
    </svg>

  );
};

export default SpeakerIcon;
