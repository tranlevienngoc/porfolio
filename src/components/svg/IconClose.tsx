import useLightMode from '../../helpers/lightMode/isLightMode';

export default function IconClose() {
  const { isLightMode } = useLightMode();
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_3021_27142)'>
        <path
          d='M16.0002 14.586L20.9502 9.63599L22.3642 11.05L17.4142 16L22.3642 20.95L20.9502 22.364L16.0002 17.414L11.0502 22.364L9.63623 20.95L14.5862 16L9.63623 11.05L11.0502 9.63599L16.0002 14.586Z'
          fill={isLightMode ? '#7C7C7E' : '#D4D4D6'}
        />
      </g>
      <defs>
        <clipPath id='clip0_3021_27142'>
          <rect
            width='24'
            height='24'
            fill='white'
            transform='translate(4 4)'
          />
        </clipPath>
      </defs>
    </svg>
  );
}
