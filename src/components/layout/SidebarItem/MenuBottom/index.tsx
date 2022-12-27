import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  BoxProps,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
} from '@chakra-ui/react';
import ArrowLeft from 'components/svg/ArrowLeft';
import Close from 'components/svg/Close';
import { MENU_CONNECT, MENU_NOT_CONNECT } from 'config/menuBottom';
import { useState } from 'react';

import { Connected } from '../../../../constants';
import TemplateText from '../../../common/Text/TemplateText';

interface props extends BoxProps {
  onCloseMenuBottom?: () => void;
}

const MenuBottom = ({ onCloseMenuBottom = () => ({}), ...props }: props) => {
  const [isselected, setIsSelected] = useState(false);
  const [renderitem, setRenderItem] = useState(null);
  const [chooseItem, setChooseItem] = useState('');
  const MENU = Connected ? MENU_CONNECT : MENU_NOT_CONNECT;

  return (
    <Box {...props}>
      {MENU.map((item) => (
        <Box key={item.value}>
          <Accordion allowMultiple>
            <AccordionItem border='none' p='4px 0'>
              <AccordionButton
                ml='-15px'
                onClick={() => {
                  setIsSelected(!isselected);
                  setRenderItem(item.item);
                  setChooseItem(item.value);
                }}
                className={isselected ? item.value : ''}
              >
                <Flex mr='auto' alignItems='center'>
                  <Box w='20px'>{item.icon}</Box>
                  <TemplateText
                    fontSize={13}
                    txt={item.title}
                    ml='12px'
                    mr='auto'
                  />
                </Flex>
                {item.children.length > 0 && <AccordionIcon />}
              </AccordionButton>
              {item.children.length > 0 && (
                <AccordionPanel pb={4}>
                  <>
                    <MenuChildren menuChildren={item.children} />
                  </>
                </AccordionPanel>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
      ))}

      <Drawer
        placement='left'
        size={chooseItem === 'buy-with-fiat' ? 'full' : 'xs'}
        isOpen={chooseItem !== 'more-actions' && chooseItem !== ''}
        onClose={() => onCloseMenuBottom()}
      >
        <DrawerOverlay bg='transparent'>
          <DrawerContent bg='white'>
            <Box>
              <Flex justifyContent='space-between' p='16px'>
                <Box onClick={() => setChooseItem('')}>
                  <ArrowLeft />
                </Box>
                <Close onClick={() => onCloseMenuBottom()} />
              </Flex>
            </Box>
            <DrawerBody p='16px'>{renderitem}</DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

const MenuChildren = ({ menuChildren }) => {
  return (
    <Box ml='15px' w='200px'>
      {menuChildren.map((item) => (
        <Box
          key={item.title}
          h='40px'
          mt='12px'
          display='flex'
          cursor='pointer'
          alignItems='center'
        >
          {item.icon}
          <TemplateText fontSize={13} txt={item.title} ml='12px' />
        </Box>
      ))}
    </Box>
  );
};

export default MenuBottom;
