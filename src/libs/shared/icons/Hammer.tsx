import type { SVGProps } from 'react';

const HammerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={58}
    height={58}
    viewBox="0 0 58 58"
    fill="none"
    {...props}
  >
    <g filter="url(#a)" fill="#BAE7FF">
      <path d="M23.138 15.138c2.315-2.314 3.472-3.471 4.91-3.471s2.595 1.157 4.91 3.471l5.892 5.892c2.314 2.315 3.471 3.472 3.471 4.91s-1.157 2.595-3.471 4.91-3.472 3.471-4.91 3.471-2.595-1.157-4.91-3.471l-5.892-5.892c-2.314-2.314-3.471-3.472-3.471-4.91s1.157-2.595 3.471-4.91m-.426 12.222-5.944 5.944c-.457.457-.685.685-.822.922a2.08 2.08 0 0 0 0 2.084c.137.237.365.465.822.922.456.456.685.685.922.822a2.08 2.08 0 0 0 2.083 0c.238-.137.466-.366.922-.822l5.945-5.944z" />
      <path d="m24.126 25.946.006-.006 3.928 3.928-.006.006zm15.099-7.369c.34-.634.329-1.4-.032-2.026-.137-.237-.365-.465-.822-.922s-.685-.685-.922-.822a2.08 2.08 0 0 0-2.026-.032z" />
    </g>
    <defs>
      <filter
        id="a"
        x={-2}
        y={-2}
        width={62}
        height={62}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={7.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.568627 0 0 0 0 0.835294 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_38_100" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_38_100"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0" />
        <feBlend in2="shape" result="effect2_innerShadow_38_100" />
      </filter>
    </defs>
  </svg>
);
export default HammerIcon;
