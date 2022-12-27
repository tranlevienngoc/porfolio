import { Box, BoxProps, useMediaQuery } from '@chakra-ui/react';
import { ReactNode } from 'react';

import FlexCenter from '../../../common/Flex/FlexCenter';
import Logo from '../../../svg/Logo';
interface props extends BoxProps {
  children?: ReactNode;
}
const WrapWallet = ({ children, ...props }: props) => {
  return (
    <Box {...props} textAlign='center' m='0 auto'>
      <Box mt='48px' mb='24px'>
        {children}
      </Box>
    </Box>
  );
};

export default WrapWallet;
