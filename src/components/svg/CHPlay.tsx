import { Box, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {
  size?: string;
}
export default function CHPlay({ size = '24px', ...props }: Props) {
  return (
    <Box
      as='svg'
      {...props}
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.33501 22.3786C4.12281 22.162 4 21.8248 4 21.3881V5.81147C4 5.37477 4.12281 5.03757 4.33501 4.82098L4.38739 4.77344L13.3398 13.4985V13.7045L4.38739 22.4296L4.33501 22.3786Z'
        fill='#1E1E1E'
      />
      <path
        d='M17.4042 10.5879L14.4233 13.4977V13.7037L17.4078 16.6136L17.4746 16.5757L21.009 14.615C22.0176 14.0586 22.0176 13.1429 21.009 12.5829L17.4746 10.6258L17.4042 10.5879Z'
        fill='#1E1E1E'
      />
      <path
        d='M16.933 10.0847L13.8817 13.0597L4.87695 4.27915C5.21197 3.93578 5.75829 3.8944 6.37956 4.23777L16.933 10.0847Z'
        fill='#1E1E1E'
      />
      <path
        d='M16.933 17.1176L6.37956 22.9645C5.75829 23.3043 5.21197 23.263 4.87695 22.9196L13.8817 14.1426L16.933 17.1176Z'
        fill='#1E1E1E'
      />
    </Box>
  );
}
