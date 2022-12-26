interface Props {
  w?: string;
  h?: string;
  color?: string;
}
export default function BuyWithFiat({
  w = '16px',
  h = '16px',
  color = '#343436',
}: Props) {
  return (
    <svg
      width={h}
      height={w}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.6666 6.16602H1.33325C1.05992 6.16602 0.833252 5.93935 0.833252 5.66602C0.833252 5.39268 1.05992 5.16602 1.33325 5.16602H14.6666C14.9399 5.16602 15.1666 5.39268 15.1666 5.66602C15.1666 5.93935 14.9399 6.16602 14.6666 6.16602Z'
        fill={color}
      />
      <path
        d='M5.33333 11.5H4C3.72667 11.5 3.5 11.2733 3.5 11C3.5 10.7267 3.72667 10.5 4 10.5H5.33333C5.60667 10.5 5.83333 10.7267 5.83333 11C5.83333 11.2733 5.60667 11.5 5.33333 11.5Z'
        fill={color}
      />
      <path
        d='M9.66667 11.5H7C6.72667 11.5 6.5 11.2733 6.5 11C6.5 10.7267 6.72667 10.5 7 10.5H9.66667C9.94 10.5 10.1667 10.7267 10.1667 11C10.1667 11.2733 9.94 11.5 9.66667 11.5Z'
        fill={color}
      />
      <path
        d='M11.7066 14.1673H4.29325C1.63992 14.1673 0.833252 13.3673 0.833252 10.7407V5.26065C0.833252 2.63398 1.63992 1.83398 4.29325 1.83398H11.6999C14.3533 1.83398 15.1599 2.63398 15.1599 5.26065V10.734C15.1666 13.3673 14.3599 14.1673 11.7066 14.1673ZM4.29325 2.83398C2.19992 2.83398 1.83325 3.19398 1.83325 5.26065V10.734C1.83325 12.8007 2.19992 13.1607 4.29325 13.1607H11.6999C13.7933 13.1607 14.1599 12.8007 14.1599 10.734V5.26065C14.1599 3.19398 13.7933 2.83398 11.6999 2.83398H4.29325Z'
        fill={color}
      />
    </svg>
  );
}