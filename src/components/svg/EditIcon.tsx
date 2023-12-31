interface props {
  color?: string;
}

export default function EditIcon({ color }: props) {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.5 18.875C10.5 19.975 11.4 20.875 12.5 20.875C13.6 20.875 14.5 19.975 14.5 18.875C14.5 17.775 13.6 16.875 12.5 16.875C11.4 16.875 10.5 17.775 10.5 18.875ZM10.5 6.875C10.5 7.975 11.4 8.875 12.5 8.875C13.6 8.875 14.5 7.975 14.5 6.875C14.5 5.775 13.6 4.875 12.5 4.875C11.4 4.875 10.5 5.775 10.5 6.875ZM10.5 12.875C10.5 13.975 11.4 14.875 12.5 14.875C13.6 14.875 14.5 13.975 14.5 12.875C14.5 11.775 13.6 10.875 12.5 10.875C11.4 10.875 10.5 11.775 10.5 12.875Z'
        fill={color}
      />
    </svg>
  );
}
