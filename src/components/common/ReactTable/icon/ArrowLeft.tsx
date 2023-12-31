interface props {
  color: string;
}

export default function ArrowLeft({ color }: props) {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.91 7.41L14.5 6L8.5 12L14.5 18L15.91 16.59L11.33 12L15.91 7.41Z'
        fill={color}
      />
    </svg>
  );
}
