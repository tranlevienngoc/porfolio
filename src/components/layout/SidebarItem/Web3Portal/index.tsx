import { Box, BoxProps, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import ConnectWallet from 'components/common/ConnectWallet';
import DrawerItem from 'components/common/DrawerItem';
import FlexCenter from 'components/common/Flex/FlexCenter';
import Logo from 'components/svg/Logo';

import WrapWallet from '../WrapWallet';
import ButtonConnectWallet from '../../../common/Buttons/ButtonConnectWallet';
import TemplateText from '../../../common/Text/TemplateText';

interface props extends BoxProps {
  onClose?: () => void;
}

const Web3Portal = ({ onClose = () => ({}), ...props }: props) => {
  const connectWallet = useDisclosure();
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');

  return (
    <Box>
      <FlexCenter mt='24px'>
        <Logo w={isLargerThan1024 ? 150 : 118} h={isLargerThan1024 ? 36 : 28} />
      </FlexCenter>
      <WrapWallet {...props}>
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
          className='abc'
          txt='Connect a Web3 wallet to manage your Defi portfolio'
        />
        <ButtonConnectWallet
          h='28px'
          w='147px'
          _focusVisible={{ boxShadow: 'none !important' }}
          p='4px 16px 5px 16px'
          mt={{ base: '16px', lg: '24px' }}
          onClick={() => {
            connectWallet.onToggle();
          }}
        />
      </WrapWallet>

      <DrawerItem
        onCloseRightSideBar={onClose}
        onClose={connectWallet.onClose}
        isOpen={connectWallet.isOpen}
        pbody='0px'
      >
        <ConnectWallet />
      </DrawerItem>
    </Box>
  );
};

export default Web3Portal;
