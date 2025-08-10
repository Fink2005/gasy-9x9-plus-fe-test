const Shield2Icon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={42} height={44} viewBox="0 0 42 44" fill="none" {...props}>
      <g filter="url(#filter0_di_2107_5715)">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.2517 13.3883C15 13.7468 15 14.8127 15 16.9444V17.9942C15 21.7529 17.826 23.577 19.599 24.3515C20.08 24.5616 20.3205 24.6666 21 24.6666C21.6795 24.6666 21.92 24.5616 22.4009 24.3515C24.174 23.577 27 21.7529 27 17.9942V16.9444C27 14.8127 27 13.7468 26.7483 13.3883C26.4967 13.0297 25.4945 12.6866 23.4901 12.0005L23.1082 11.8698C22.0633 11.5121 21.5409 11.3333 21 11.3333C20.4591 11.3333 19.9367 11.5121 18.8918 11.8698L18.5099 12.0005C16.5055 12.6866 15.5034 13.0297 15.2517 13.3883ZM20.2409 15.5755L20.1535 15.7323C20.0575 15.9045 20.0095 15.9906 19.9347 16.0474C19.8598 16.1042 19.7666 16.1253 19.5802 16.1675L19.4105 16.2059C18.7546 16.3543 18.4267 16.4285 18.3486 16.6794C18.2706 16.9303 18.4942 17.1917 18.9414 17.7146L19.057 17.8499C19.1841 17.9985 19.2476 18.0728 19.2762 18.1647C19.3048 18.2566 19.2952 18.3557 19.276 18.554L19.2585 18.7345C19.1909 19.4321 19.1571 19.781 19.3614 19.936C19.5656 20.0911 19.8727 19.9497 20.4869 19.667L20.6457 19.5938C20.8203 19.5134 20.9075 19.4732 21 19.4732C21.0925 19.4732 21.1797 19.5134 21.3543 19.5938L21.5131 19.667C22.1273 19.9497 22.4343 20.0911 22.6386 19.936C22.8429 19.781 22.8091 19.4321 22.7415 18.7345L22.724 18.554C22.7048 18.3558 22.6952 18.2566 22.7238 18.1647C22.7523 18.0728 22.8159 17.9985 22.9429 17.8499L23.0587 17.7146C23.5058 17.1917 23.7294 16.9303 23.6513 16.6794C23.5733 16.4285 23.2454 16.3543 22.5895 16.2059L22.4197 16.1675C22.2334 16.1253 22.1402 16.1042 22.0653 16.0474C21.9905 15.9906 21.9425 15.9045 21.8465 15.7323L21.7591 15.5755C21.4214 14.9696 21.2525 14.6666 21 14.6666C20.7475 14.6666 20.5786 14.9696 20.2409 15.5755Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_2107_5715" x={-2} y={-1} width={46} height={46} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2107_5715" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2107_5715" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2107_5715" />
        </filter>
      </defs>
    </svg>
  );
};

export default Shield2Icon;
