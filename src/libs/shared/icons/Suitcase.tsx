import React from 'react';

const SuitcaseIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={64} height={66} viewBox="0 0 64 66" fill="none" {...props}>
      <g filter="url(#filter0_di_1918_5795)">
        <path fillRule="evenodd" clipRule="evenodd" d="M32.0863 11.4834H31.913C30.4155 11.4834 29.1668 11.4833 28.1755 11.6166C27.1292 11.7573 26.1846 12.0667 25.4254 12.8258C24.6663 13.585 24.3569 14.5296 24.2162 15.5759C24.0829 16.5672 24.083 17.8159 24.083 19.3134V19.4429C20.7144 19.5532 18.6915 19.9468 17.2856 21.3527C15.333 23.3053 15.333 26.4481 15.333 32.7334C15.333 39.0187 15.333 42.1616 17.2856 44.1141C19.2383 46.0667 22.3809 46.0667 28.6663 46.0667H35.333C41.6183 46.0667 44.7612 46.0667 46.7137 44.1141C48.6663 42.1616 48.6663 39.0187 48.6663 32.7334C48.6663 26.4481 48.6663 23.3053 46.7137 21.3527C45.3078 19.9468 43.285 19.5532 39.9163 19.4429V19.3134C39.9163 17.816 39.9165 16.5672 39.7832 15.5759C39.6425 14.5296 39.333 13.585 38.5738 12.8258C37.8148 12.0667 36.8702 11.7573 35.8238 11.6166C34.8325 11.4833 33.5838 11.4834 32.0863 11.4834ZM37.4163 19.4032V19.4001C37.4163 17.7934 37.4137 16.7141 37.3055 15.9091C37.202 15.14 37.0233 14.8108 36.8062 14.5936C36.589 14.3764 36.2598 14.1977 35.4907 14.0943C34.6857 13.9861 33.6063 13.9834 31.9997 13.9834C30.393 13.9834 29.3137 13.9861 28.5087 14.0943C27.7396 14.1977 27.4104 14.3764 27.1932 14.5936C26.976 14.8108 26.7973 15.14 26.6939 15.9091C26.5857 16.7141 26.583 17.7934 26.583 19.4001V19.4032C27.2364 19.4001 27.9298 19.4001 28.6663 19.4001H35.333C36.0695 19.4001 36.763 19.4001 37.4163 19.4032ZM40.333 24.4001C40.333 25.3205 39.5868 26.0667 38.6663 26.0667C37.7458 26.0667 36.9997 25.3205 36.9997 24.4001C36.9997 23.4796 37.7458 22.7334 38.6663 22.7334C39.5868 22.7334 40.333 23.4796 40.333 24.4001ZM25.333 26.0667C26.2535 26.0667 26.9997 25.3205 26.9997 24.4001C26.9997 23.4796 26.2535 22.7334 25.333 22.7334C24.4125 22.7334 23.6663 23.4796 23.6663 24.4001C23.6663 25.3205 24.4125 26.0667 25.333 26.0667Z" fill="#BAE7FF" />
      </g>
      <defs>
        <filter id="filter0_di_1918_5795" x={-3} y="-1.59998" width={70} height={70} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1918_5795" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1918_5795" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1918_5795" />
        </filter>
      </defs>
    </svg>

  );
};

export default SuitcaseIcon;
