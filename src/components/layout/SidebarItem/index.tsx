import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
} from '@chakra-ui/react';

import SidebarContent from './SidebarContent';
import Web3Portal from './Web3Portal';
import Divider from '../../common/Divider';
import TemplateText from '../../common/Text/TemplateText';
import AppStore from '../../svg/AppStore';
import CHPlay from '../../svg/CHPlay';

interface Props {
  onClose: () => void;
  isOpen: boolean;
  variant: 'drawer' | 'sidebar';
  showLeftItem: boolean;
  //test
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
        <Divider h='1px' w='180px' m='24px 0' />
        <SidebarContent />
      </Box>
      <Box mt='170px'>
        <Flex
          w='204px'
          borderRadius='8px'
          p='8px 16px'
          border='1px solid #D4D4D6'
          m='0 auto'
          cursor='pointer'
        >
          <TemplateText
            fontSize={16}
            fontWeight={500}
            color='#1E1E1E'
            txt='Download App'
          />
          <AppStore ml='auto' mr='5px' />
          <CHPlay />
        </Flex>
        <TemplateText
          mt='16px'
          fontSize={12}
          fontWeight={400}
          color='#505052'
          txt='Terms of Service - Privacy Policy'
        />
      </Box>
    </Box>
  ) : (
    <Drawer
      isOpen={isOpen}
      placement={showLeftItem ? 'left' : 'right'}
      onClose={onClose}
    >
      <DrawerOverlay>
        <DrawerContent bg='gray.200'>
          <DrawerCloseButton boxShadow='none !important' />
          <DrawerBody>
            {showLeftItem ? (
              <SidebarContent />
            ) : (
              <Box>
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
