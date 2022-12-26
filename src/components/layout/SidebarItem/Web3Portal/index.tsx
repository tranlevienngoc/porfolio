import { Box, BoxProps, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import ButtonConnectWallet from 'components/common/Buttons/ButtonConnectWallet';
import ConnectWallet from 'components/common/ConnectWallet';
import DrawerItem from 'components/common/DrawerItem';
import FlexCenter from 'components/common/Flex/FlexCenter';
import TemplateText from 'components/common/Text/TemplateText';
import Logo from 'components/svg/Logo';

interface props extends BoxProps {
  onClose?: () => void;
}

const Web3Portal = ({ onClose = () => ({}), ...props }: props) => {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');

  const connectwallet = useDisclosure();

  return (
    <Box
      {...props}
      textAlign='center'
      w={{ base: '180px', lg: '184px' }}
      m='0 auto'
    >
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
        _focusVisible={{ boxShadow: 'none !important' }}
        p='4px 16px 5px 16px'
        mt={{ base: '16px', lg: '24px' }}
        onClick={() => {
          connectwallet.onToggle();
        }}
      />

      <DrawerItem
        onCloseRightSideBar={onClose}
        onClose={connectwallet.onClose}
        isOpen={connectwallet.isOpen}
        pbody='0px'
      >
        <ConnectWallet />
      </DrawerItem>
    </Box>
  );
};

export default Web3Portal;
