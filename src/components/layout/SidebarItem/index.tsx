import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
} from '@chakra-ui/react';

import MenuBottom from './MenuBottom';
import MyWallet from './MyWallet';
import SidebarContent from './SidebarContent';
import WalletAddress from './WalletAddress';
import Web3Portal from './Web3Portal';
import Divider from '../../common/Divider';
import DownloadApp from '../../common/DownloadApp';
import Close from '../../svg/Close';
import { Connected } from '../../../constants';

interface Props {
  onClose: () => void;
  isOpen: boolean;
  variant: string;
  showLeftItem: boolean;
}

const SidebarItem = ({ isOpen, variant, onClose, showLeftItem }: Props) => {
  const renderMyWallet = (onClose: () => void) => {
    return Connected ? (
      <MyWallet onClose={onClose} />
    ) : (
      <Box mt='180px'>
        <Web3Portal />
      </Box>
    );
  };
  return variant === 'sidebar' ? (
    <Flex
      top={0}
      h='100%'
      left={0}
      w='228px'
      bg='#F6F7F9'
      position='fixed'
      className='sidebar-box'
      flexDirection='column'
      justifyContent='space-between'
    >
      <Box p='0 22px'>
        {Connected ? <WalletAddress /> : <Web3Portal />}
        <Divider w='180px' m='24px 0' />
        <SidebarContent />
      </Box>
      <DownloadApp justifyContent='center' mt='auto' />
    </Flex>
  ) : (
    <Drawer
      isOpen={isOpen}
      placement={showLeftItem ? 'left' : 'right'}
      onClose={onClose}
    >
      <DrawerOverlay>
        <DrawerContent bg='white'>
          <Box>
            <Flex justifyContent={showLeftItem ? 'left' : 'right'} p='16px'>
              <Close onClick={onClose} />
            </Flex>
          </Box>
          <DrawerBody>
            {showLeftItem ? (
              <Flex
                h='100%'
                flexDirection='column'
                className='sidebar-box'
                justifyContent='space-between'
              >
                <SidebarContent onClose={onClose} />
                <Divider mt='20px' />
                <MenuBottom onCloseMenuBottom={onClose} />
                <DownloadApp mt='auto' />
              </Flex>
            ) : (
              renderMyWallet(onClose)
            )}
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default SidebarItem;
