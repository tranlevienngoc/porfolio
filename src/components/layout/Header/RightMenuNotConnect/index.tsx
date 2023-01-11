import { useDisclosure, useMediaQuery } from '@chakra-ui/react';
import ButtonConnectWallet from 'components/common/Buttons/ButtonConnectWallet';
import ConnectWallet from 'components/common/ConnectWallet';
import DrawerItem from 'components/common/DrawerItem';
import ModalItem from 'components/common/ModalItem';
import MoreIcon from 'components/svg/MoreIcon';

const RightMenuNotConnect = () => {
  const connectwallet = useDisclosure();
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
  return (
    <>
      <ButtonConnectWallet
        h='40px'
        w='197px'
        hIcon={24}
        wIcon={24}
        p='8px 24px 8px 24px'
        onClick={() => {
          connectwallet.onToggle();
        }}
      />
      <MoreIcon ml='20px' />

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
    </>
  );
};

export default RightMenuNotConnect;
