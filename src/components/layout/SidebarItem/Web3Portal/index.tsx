import { Box, useMediaQuery } from '@chakra-ui/react';

import ButtonConnectWallet from '../../../common/Buttons/ButtonConnectWallet';
import FlexCenter from '../../../common/Flex/FlexCenter';
import TemplateText from '../../../common/Text/TemplateText';
import Logo from '../../../svg/Logo';

const Web3Portal = () => {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');

  return (
    <Box textAlign='center' w={{ base: '180px', lg: 'unset' }} m='0 auto'>
      <FlexCenter mt='24px'>
        <Logo w={isLargerThan1024 ? 150 : 118} h={isLargerThan1024 ? 36 : 28} />
      </FlexCenter>
      <TemplateText
        fontSize={16}
        fontWeight={600}
        txt='Your Web3 Portal'
        mt={{ base: '24px', lg: '48px' }}
      />
      <TemplateText
        mt='8px'
        fontSize={13}
        fontWeight={400}
        txt='Connect a Web3 wallet to manage your Defi portfolio'
      />
      <ButtonConnectWallet
        h='28px'
        w='147px'
        p='4px 16px 5px 16px'
        mt={{ base: '16px', lg: '24px' }}
      />
    </Box>
  );
};

export default Web3Portal;
