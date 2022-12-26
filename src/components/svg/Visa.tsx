import { Box, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {
  w?: string;
  h?: string;
}
export default function Visa({ w = '38px', h = '25px', ...props }: Props) {
  return (
    <Box
      as='svg'
      {...props}
      width={w}
      height={h}
      viewBox='0 0 38 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0 2.83133C0 1.28489 1.24272 0.03125 2.79423 0.03125H35.2058C36.749 0.03125 38 1.2878 38 2.83133V21.2312C38 22.7776 36.7573 24.0312 35.2058 24.0312H2.79423C1.25102 24.0312 0 22.7747 0 21.2312V2.83133Z'
        fill='#0066B2'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M31.8975 15.2853C31.8975 15.0295 32.1053 14.8223 32.3615 14.8223C32.6182 14.8223 32.8255 15.0295 32.8255 15.2853C32.8255 15.5408 32.6182 15.7483 32.3615 15.7483C32.1053 15.7483 31.8975 15.5408 31.8975 15.2853ZM32.3615 15.6369C32.5568 15.6369 32.7145 15.4794 32.7145 15.2853C32.7145 15.0905 32.5568 14.9335 32.3615 14.9335C32.1671 14.9335 32.0092 15.0905 32.0092 15.2853C32.0092 15.4794 32.1671 15.6369 32.3615 15.6369ZM32.299 15.4883H32.2041V15.0816H32.3763C32.4121 15.0816 32.4485 15.0821 32.4803 15.102C32.5132 15.1251 32.5318 15.1634 32.5318 15.2037C32.5318 15.2502 32.5053 15.2932 32.4617 15.3091L32.5362 15.4883H32.4305L32.3688 15.3272H32.299V15.4883ZM32.299 15.2576H32.3513C32.371 15.2576 32.3922 15.2595 32.4094 15.2502C32.4251 15.24 32.4333 15.221 32.4333 15.2028C32.4333 15.1879 32.4237 15.1698 32.4103 15.1618C32.3935 15.1521 32.3672 15.1541 32.3495 15.1541H32.299V15.2576Z'
        fill='white'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M29.8707 7.23438L31.6665 15.7777H29.6068L29.3439 14.509H26.492L26.0245 15.7777H23.6865L27.0316 7.87075C27.0316 7.87075 27.2348 7.23438 28.0677 7.23438H29.8707ZM28.317 9.55808L27.1385 12.7559H28.9804L28.317 9.55808Z'
        fill='white'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M23.8609 9.28921L24.1812 7.45449C24.1812 7.45449 23.1931 7.08203 22.1636 7.08203C21.0503 7.08203 18.4067 7.56449 18.4067 9.91034C18.4067 12.1179 21.5098 12.1455 21.5098 13.3039C21.5098 14.463 18.7267 14.2561 17.8078 13.5249L17.4746 15.4428C17.4746 15.4428 18.4759 15.9256 20.0069 15.9256C21.5372 15.9256 23.8473 15.1393 23.8473 13.0007C23.8473 10.7794 20.7164 10.5721 20.7164 9.60649C20.7164 8.64049 22.9013 8.76464 23.8609 9.28921Z'
        fill='white'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M16.0927 15.7777H13.8496L15.2514 7.23438H17.4953L16.0927 15.7777Z'
        fill='white'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M14.3762 7.23438L10.8071 15.7777H8.4699L6.5215 8.35539C6.47105 8.32535 6.4209 8.29615 6.37109 8.26778C6.73765 8.47651 7.12279 8.73004 7.50412 9.03605C9.0049 10.2407 9.53101 11.7305 9.56792 11.8392L9.57003 11.8451L9.82338 13.1106L11.9618 7.23438H14.3762Z'
        fill='white'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M9.57042 11.8455L8.81551 8.00362C8.81551 8.00362 8.72472 7.23438 7.75162 7.23438H4.21617L4.1748 7.37886C4.17517 7.37886 5.87462 7.72808 7.5045 9.03605C9.063 10.287 9.57042 11.8455 9.57042 11.8455Z'
        fill='#F9A533'
      />
    </Box>
  );
}