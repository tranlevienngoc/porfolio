import { Box, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {
  w?: string;
  h?: string;
}
export default function ArrowBottomBold({
  w = '24px',
  h = '24px',
  ...props
}: Props) {
  return (
    <Box
      as='svg'
      {...props}
      width={w}
      height={h}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M7 10L12 15L17 10H7Z' fill='#7C7C7E' />
    </Box>
  );
}
