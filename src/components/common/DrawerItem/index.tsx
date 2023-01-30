import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import IconClose from 'components/svg/IconClose';
import useColorModeValueItem from 'hook/useColorModeValueItem/useColorModeValueItem';
import { ReactNode } from 'react';

import FlexBox from '../FlexBox';
import TemplateText from '../Text/TemplateText';

interface Props {
  onClose: () => void;
  onCloseRightSideBar?: () => void;
  isOpen: boolean;
  txt?: string;
  children?: ReactNode;
  mb?: string;
  pbody?: string;
  mt?: string;
}

export default function DrawerItem({
  onClose,
  onCloseRightSideBar = () => ({}),
  isOpen = false,
  txt,
  children,
  mb,
  pbody,
  mt,
}: Props) {
  const { darkmodeColors } = useColorModeValueItem();

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size='full'>
      <DrawerOverlay zIndex={20} />
      <DrawerContent zIndex={20} p='16px' bg={darkmodeColors.bg100}>
        <DrawerBody zIndex={20} mt={mt} p={pbody}>
          <FlexBox justifyContent='space-between' mb={mb}>
            <DrawerCloseButton
              onClick={onCloseRightSideBar}
              _focusVisible={{ boxShadow: 'none !important' }}
            >
              <IconClose />
            </DrawerCloseButton>
            {txt && <TemplateText txt={txt} fontSize={20} fontWeight={700} />}
          </FlexBox>
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
