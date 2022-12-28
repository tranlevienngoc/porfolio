import React from 'react';

export default function HeartIcon() {
  return (
    <svg
      width='31'
      height='31'
      viewBox='0 0 31 31'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_b_835_33872)'>
        <rect
          x='0.5'
          y='0.5'
          width='30'
          height='30'
          rx='15'
          fill='#130C1A'
          fillOpacity='0.15'
        />
        <path
          d='M15.965 22.1075C15.71 22.1975 15.29 22.1975 15.035 22.1075C12.86 21.365 8 18.2675 8 13.0175C8 10.7 9.8675 8.82495 12.17 8.82495C13.535 8.82495 14.7425 9.48495 15.5 10.505C16.2575 9.48495 17.4725 8.82495 18.83 8.82495C21.1325 8.82495 23 10.7 23 13.0175C23 18.2675 18.14 21.365 15.965 22.1075Z'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <filter
          id='filter0_b_835_33872'
          x='-9.5'
          y='-9.5'
          width='50'
          height='50'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImageFix' stdDeviation='5' />
          <feComposite
            in2='SourceAlpha'
            operator='in'
            result='effect1_backgroundBlur_835_33872'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_backgroundBlur_835_33872'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
}
