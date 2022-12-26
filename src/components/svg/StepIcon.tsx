interface props {
  color?: string;
}

export default function StepIcon({ color }: props) {
  return (
    <svg
      width='28'
      height='2'
      viewBox='0 0 28 2'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_721_30168)'>
        <rect width='28' height='2' rx='1' fill={color} />
      </g>
      <defs>
        <clipPath id='clip0_721_30168'>
          <rect width='28' height='2' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
