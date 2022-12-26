import { Box, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {
  w?: string;
  h?: string;
}
export default function Moonpay({ w = '32px', h = '33px', ...props }: Props) {
  return (
    <Box
      as='svg'
      {...props}
      width={w}
      height={h}
      viewBox='0 0 32 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M27.0922 9.83371C29.8156 9.83371 32 7.61686 32 4.91686C32 2.18843 29.7872 0 27.0922 0C24.3688 0 22.1844 2.21685 22.1844 4.91686C22.1844 7.61686 24.3688 9.83371 27.0922 9.83371ZM12 32.0306C5.3617 32.0306 0 26.659 0 20.0085C0 13.3579 5.3617 7.98634 12 7.98634C18.6383 7.98634 24 13.3579 24 20.0085C24 26.659 18.6383 32.0306 12 32.0306Z'
        fill='#7D00FF'
      />
    </Box>
  );
}
