import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  BoxProps,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';

import MENU_CONNECT, { MENU_NOT_CONNECT } from '../../../../config/menuBottom';
import { Connected } from '../../../../constants';
import TemplateText from '../../../common/Text/TemplateText';

const MenuBottom = ({ ...props }: BoxProps) => {
  const [selected, setSelected] = useState(false);
  const MENU = Connected ? MENU_CONNECT : MENU_NOT_CONNECT;
  return (
    <Box {...props}>
      {MENU.map((item) => (
        <Box>
          <Accordion allowMultiple>
            <AccordionItem border='none' p='4px 0'>
              <AccordionButton
                ml='-15px'
                onClick={() => setSelected(!selected)}
                className={selected ? item.value : ''}
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
                  <MenuChildren menuChildren={item.children} />
                </AccordionPanel>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
      ))}
    </Box>
  );
};

const MenuChildren = ({ menuChildren = [] }: any) => {
  return (
    <Box ml='15px' w='200px'>
      {menuChildren.map((item) => (
        <Box
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
