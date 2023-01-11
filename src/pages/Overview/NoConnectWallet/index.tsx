import { Box, Flex, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import ButtonBase from 'components/common/Buttons/ButtonBase';
import ButtonConnectWallet from 'components/common/Buttons/ButtonConnectWallet';
import ConnectWallet from 'components/common/ConnectWallet';
import DrawerItem from 'components/common/DrawerItem';
import FlexCenter from 'components/common/Flex/FlexCenter';
import ModalItem from 'components/common/ModalItem';
import TemplateText from 'components/common/Text/TemplateText';
import DemoWallet from 'components/svg/DemoWallet';
import IconCloseBlue from 'components/svg/IconCloseBlue';
import NoWallet from 'components/svg/NoWallet';
import React from 'react';

const NoConnectWallet = () => {
  const connectwallet = useDisclosure();
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
  return (
    <Flex
      width='100%'
      height='100vh'
      justifyContent='center'
      className='overview-page'
    >
      <Box
        h='224px'
        mt={{ base: '68px', md: '132px', xl: '215px' }}
        textAlign='center'
        w={{ base: '285px', md: '428px' }}
      >
        <FlexCenter
          h='96px'
          w='96px'
          m='0 auto'
          bg='#EFF0F2'
          borderRadius='50%'
          position='relative'
        >
          <NoWallet />
          <IconCloseBlue position='absolute' top='10px' right='0px' />
        </FlexCenter>
        <TemplateText
          mt='48px'
          fontSize={16}
          fontWeight={600}
          txt='No Wallet Connected'
        />
        <TemplateText
          mt='8px'
          fontSize={16}
          fontWeight={400}
          color='#505052'
          txt='Get started by connecting your wallet'
        />
        <Flex
          mt='16px'
          w={{ base: '100%' }}
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          justifyContent={{ base: 'center', md: 'space-between' }}
        >
          <ButtonConnectWallet
            h='40px'
            w='206px'
            hIcon={24}
            wIcon={24}
            p='8px 24px 8px 24px'
            onClick={() => {
              connectwallet.onToggle();
            }}
          />
          <ButtonBase
            fsText={16}
            fwText={500}
            w='206px'
            bg='white'
            colorText='black'
            leftIcon={<DemoWallet />}
            content='Try Demo Wallet'
            border='1px solid #D4D4D6'
            mt={{ base: '16px', md: '0px' }}
          />
        </Flex>
      </Box>
      <DrawerItem
        onClose={connectwallet.onClose}
        isOpen={connectwallet.isOpen && !isLargerThan1024}
        pbody='0px'
      >
        <ConnectWallet />
      </DrawerItem>
      <ModalItem
        p='0px'
        pBody='0px'
        maxW='720px'
        onClose={connectwallet.onClose}
        isOpen={connectwallet.isOpen && isLargerThan1024}
      >
        <ConnectWallet />
      </ModalItem>
    </Flex>
  );
};

export default NoConnectWallet;
