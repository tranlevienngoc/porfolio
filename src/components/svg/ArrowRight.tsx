import { Box, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {
  w?: string;
  h?: string;
}
export default function ArrowRight({ w = '7px', h = '10px', ...props }: Props) {
  return (
    <Box
      as='svg'
      {...props}
      width={w}
      height={h}
      viewBox='0 0 7 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.73993 9.28016C1.54993 9.28016 1.35993 9.21016 1.20993 9.06016C0.919932 8.77016 0.919932 8.29016 1.20993 8.00016L4.20993 5.00016L1.20993 2.00016C0.919932 1.71016 0.919932 1.23016 1.20993 0.940156C1.49993 0.650156 1.97993 0.650156 2.26993 0.940156L5.79993 4.47016C6.08993 4.76016 6.08993 5.24016 5.79993 5.53016L2.26993 9.06016C2.11993 9.21016 1.92993 9.28016 1.73993 9.28016Z'
        fill='#343436'
      />
    </Box>
  );
}
