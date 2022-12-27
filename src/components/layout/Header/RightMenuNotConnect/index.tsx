import { useDisclosure } from '@chakra-ui/react';
import ButtonConnectWallet from 'components/common/Buttons/ButtonConnectWallet';
import ConnectWallet from 'components/common/ConnectWallet';
import DrawerItem from 'components/common/DrawerItem';

import MoreIcon from 'components/svg/MoreIcon';

const RightMenuNotConnect = () => {
  const connectwallet = useDisclosure();
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
        isOpen={connectwallet.isOpen}
        pbody='0px'
      >
        <ConnectWallet />
      </DrawerItem>
    </>
  );
};

export default RightMenuNotConnect;
