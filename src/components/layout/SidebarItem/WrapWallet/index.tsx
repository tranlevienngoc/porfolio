import { Box, BoxProps, useMediaQuery } from '@chakra-ui/react';
import { ReactNode } from 'react';

import FlexCenter from '../../../common/Flex/FlexCenter';
import Logo from '../../../svg/Logo';
interface props extends BoxProps {
  children?: ReactNode;
}
const WrapWallet = ({ children, ...props }: props) => {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');

  return (
    <Box {...props} textAlign='center' m='0 auto'>
      <FlexCenter mt='24px'>
        <Logo w={isLargerThan1024 ? 150 : 118} h={isLargerThan1024 ? 36 : 28} />
      </FlexCenter>
      <Box mt='48px' mb='24px'>
        {children}
      </Box>
    </Box>
  );
};

export default WrapWallet;
