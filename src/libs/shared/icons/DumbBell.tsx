import React from 'react';

const DumbBellIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={65} height={65} viewBox="0 0 65 65" fill="none" {...props}>
      <g filter="url(#filter0_di_1918_5769)">
        <path d="M26.9674 42.6803L18.7188 34.4318C17.2118 32.9248 16.4583 32.1713 16.3508 31.2511C16.3268 31.0457 16.3268 30.8382 16.3508 30.6328C16.4583 29.7127 17.2118 28.9592 18.7188 27.4522C20.2258 25.9452 20.9793 25.1917 21.8994 25.0843C22.1048 25.0603 22.3123 25.0603 22.5177 25.0843C23.4379 25.1917 24.1914 25.9452 25.6983 27.4522L26.9204 28.6743L33.2742 22.3205L32.0521 21.0984C30.5451 19.5914 29.7916 18.8379 29.6842 17.9178C29.6602 17.7124 29.6602 17.5049 29.6842 17.2995C29.7916 16.3793 30.5451 15.6259 32.0521 14.1189C33.5591 12.6119 34.3126 11.8584 35.2327 11.7509C35.4381 11.7269 35.6456 11.7269 35.851 11.7509C36.7712 11.8584 37.5247 12.6119 39.0317 14.1189L47.2802 22.3674C48.7872 23.8744 49.5407 24.6279 49.6482 25.5481C49.6722 25.7535 49.6722 25.961 49.6482 26.1664C49.5407 27.0865 48.7872 27.84 47.2802 29.347C45.7733 30.854 45.0198 31.6075 44.0996 31.7149C43.8942 31.7389 43.6867 31.7389 43.4813 31.7149C42.5612 31.6075 41.8077 30.854 40.3007 29.347L38.4475 27.4938L32.0938 33.8476L33.9469 35.7008C35.4539 37.2078 36.2074 37.9612 36.3149 38.8814C36.3388 39.0868 36.3388 39.2943 36.3149 39.4997C36.2074 40.4198 35.4539 41.1733 33.9469 42.6803C32.4399 44.1873 31.6864 44.9408 30.7663 45.0483C30.5609 45.0723 30.3534 45.0723 30.148 45.0483C29.2278 44.9408 28.4743 44.1873 26.9674 42.6803Z" fill="#BAE7FF" />
        <path fillRule="evenodd" clipRule="evenodd" d="M42.147 11.6795C42.6351 11.1914 43.4266 11.1914 43.9147 11.6795L49.0881 16.8529C49.5762 17.341 49.5762 18.1325 49.0881 18.6207C48.5999 19.1088 47.8085 19.1088 47.3203 18.6207L42.147 13.4473C41.6588 12.9591 41.6588 12.1677 42.147 11.6795ZM16.2782 37.546C16.7664 37.0579 17.5578 37.0579 18.046 37.546L23.2193 42.7194C23.7075 43.2075 23.7075 43.999 23.2193 44.4871C22.7312 44.9753 21.9397 44.9753 21.4516 44.4871L16.2782 39.3138C15.7901 38.8256 15.7901 38.0342 16.2782 37.546Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_1918_5769" x={-2} y="-2.59998" width={70} height={70} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1918_5769" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1918_5769" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1918_5769" />
        </filter>
      </defs>
    </svg>
  );
};

export default DumbBellIcon;
