import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import ButtonBase from 'components/common/Buttons/ButtonBase';
import ButtonConnectWallet from 'components/common/Buttons/ButtonConnectWallet';
import ConnectWallet from 'components/common/ConnectWallet';
import DrawerItem from 'components/common/DrawerItem';
import FlexCenter from 'components/common/Flex/FlexCenter';
import TemplateText from 'components/common/Text/TemplateText';
import DemoWallet from 'components/svg/DemoWallet';
import IconCloseBlue from 'components/svg/IconCloseBlue';
import NoWallet from 'components/svg/NoWallet';

const Connect = () => {
  return (
    <Flex
      justifyContent='center'
      className='connect-page'
      width='100%'
      height='100%'
    >
      <Box h='224px' w='428px' mt='25vh' textAlign='center'>
        <FlexCenter
          h='96px'
          w='96px'
          bg='#EFF0F2'
          borderRadius='50%'
          position='relative'
          m='0 auto'
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
          txt='Get started by connecting your wallet'
          color='#505052'
        />
        <Flex mt='16px' justifyContent='space-between'>
          <ButtonConnectWallet
            h='40px'
            w='206px'
            hIcon={24}
            wIcon={24}
            p='8px 24px 8px 24px'
          />
          <ButtonBase
            fsText={16}
            fwText={500}
            bg='white'
            leftIcon={<DemoWallet />}
            colorText='black'
            content='Try Demo Wallet'
            border='1px solid #D4D4D6'
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Connect;
