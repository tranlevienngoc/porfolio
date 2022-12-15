import {
  Box,
  Drawer,
  DrawerBody, DrawerContent,
  DrawerOverlay,
  Flex
} from '@chakra-ui/react';

import SidebarContent from './SidebarContent';
import Web3Portal from './Web3Portal';
import Divider from '../../common/Divider';
import DownloadApp from '../../common/DownloadApp';
import Close from '../../svg/Close';

interface Props {
  onClose: () => void;
  isOpen: boolean;
  variant: 'drawer' | 'sidebar';
  showLeftItem: boolean;
}

const SidebarItem = ({ isOpen, variant, onClose, showLeftItem }: Props) => {
  return variant === 'sidebar' ? (
    <Box
      top={0}
      h='100%'
      left={0}
      w='228px'
      bg='#F6F7F9'
      position='fixed'
      className='sidebar-box'
    >
      <Box p='0 22px'>
        <Web3Portal />
        <Divider w='180px' m='24px 0' />
        <SidebarContent />
      </Box>
      <DownloadApp justifyContent='center' />
    </Box>
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
              <Box className='sidebar-box'>
                <SidebarContent />
                <DownloadApp />
              </Box>
            ) : (
              <Box mt='180px'>
                <Web3Portal />
              </Box>
            )}
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default SidebarItem;
