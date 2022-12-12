import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props extends BoxProps {
  children?: ReactNode;
}
const BoxRound = ({ children, borderRadius = 8, ...props }: Props) => {
  return (
    <Box borderRadius={borderRadius} {...props}>
      {children}
    </Box>
  );
};

export default BoxRound;
