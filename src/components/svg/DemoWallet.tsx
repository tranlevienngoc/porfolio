interface Props {
  w?: number;
  h?: number;
}
export default function DemoWallet({ w = 24, h = 24 }: Props) {
  return (
    <svg
      width={w}
      height={h}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13 9.75H7C6.59 9.75 6.25 9.41 6.25 9C6.25 8.59 6.59 8.25 7 8.25H13C13.41 8.25 13.75 8.59 13.75 9C13.75 9.41 13.41 9.75 13 9.75Z'
        fill='#1E1E1E'
      />
      <path
        d='M19.0399 14.7992C17.5299 14.7992 16.2499 13.6792 16.1299 12.2392C16.0499 11.4092 16.3499 10.5992 16.9499 10.0092C17.4499 9.48922 18.1599 9.19922 18.9099 9.19922H20.9999C21.9899 9.22922 22.7499 10.0092 22.7499 10.9692V13.0292C22.7499 13.9892 21.9899 14.7692 21.0299 14.7992H19.0399ZM20.9699 10.6992H18.9199C18.5699 10.6992 18.2499 10.8292 18.0199 11.0692C17.7299 11.3492 17.5899 11.7292 17.6299 12.1092C17.6799 12.7692 18.3199 13.2992 19.0399 13.2992H20.9999C21.1299 13.2992 21.2499 13.1792 21.2499 13.0292V10.9692C21.2499 10.8192 21.1299 10.7092 20.9699 10.6992Z'
        fill='#292D32'
      />
      <path
        d='M16 21.25H7C3.56 21.25 1.25 18.94 1.25 15.5V8.5C1.25 5.42 3.14998 3.19001 6.09998 2.82001C6.36998 2.78001 6.68 2.75 7 2.75H16C16.24 2.75 16.55 2.76 16.87 2.81C19.82 3.15 21.75 5.39 21.75 8.5V9.95001C21.75 10.36 21.41 10.7 21 10.7H18.92C18.57 10.7 18.25 10.83 18.02 11.07L18.01 11.08C17.73 11.35 17.6 11.72 17.63 12.1C17.68 12.76 18.32 13.29 19.04 13.29H21C21.41 13.29 21.75 13.63 21.75 14.04V15.49C21.75 18.94 19.44 21.25 16 21.25ZM7 4.25C6.76 4.25 6.52999 4.26999 6.29999 4.29999C4.09999 4.57999 2.75 6.18 2.75 8.5V15.5C2.75 18.08 4.42 19.75 7 19.75H16C18.58 19.75 20.25 18.08 20.25 15.5V14.8H19.04C17.53 14.8 16.25 13.68 16.13 12.24C16.05 11.42 16.35 10.6 16.95 10.02C17.47 9.49002 18.17 9.20001 18.92 9.20001H20.25V8.5C20.25 6.16 18.88 4.54998 16.66 4.28998C16.42 4.24998 16.21 4.25 16 4.25H7Z'
        fill='#292D32'
      />
    </svg>
  );
}