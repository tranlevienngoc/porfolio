import { Box, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {
  w?: string;
  h?: string;
}
export default function ArrowBottom({
  w = '16px',
  h = '16px',
  ...props
}: Props) {
  return (
    <Box
      as='svg'
      {...props}
      width={w}
      height={h}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.00001 11.2004C7.53335 11.2004 7.06668 11.0204 6.71335 10.6671L2.36668 6.32042C2.17335 6.12708 2.17335 5.80708 2.36668 5.61375C2.56001 5.42042 2.88001 5.42042 3.07335 5.61375L7.42001 9.96042C7.74001 10.2804 8.26001 10.2804 8.58001 9.96042L12.9267 5.61375C13.12 5.42042 13.44 5.42042 13.6333 5.61375C13.8267 5.80708 13.8267 6.12708 13.6333 6.32042L9.28668 10.6671C8.93335 11.0204 8.46668 11.2004 8.00001 11.2004Z'
        fill='#7C7C7E'
      />
    </Box>
  );
}
