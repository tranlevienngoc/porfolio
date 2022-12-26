import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalContentProps,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

import IconClose from '../../svg/IconClose';
import useColorModeValueItem from '../../../hook/useColorModeValueItem/useColorModeValueItem';

interface PopoverItemProps extends ModalContentProps {
  title?: string;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  children?: ReactNode;
  p?: string;
  pheader?: string;
  pbody?: string;
}

export default function ModalItem({
  children,
  title,
  isOpen = false,
  onClose = () => ({}),
  p = '16px',
  pheader,
  pbody,
  ...props
}: PopoverItemProps) {
  const { darkmodeColors } = useColorModeValueItem();

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      motionPreset='slideInBottom'
    >
      <ModalOverlay />
      <ModalContent {...props} p={p} borderRadius='20px'>
        <ModalHeader as='h4' p={pheader} color={darkmodeColors.text100}>
          {title}
        </ModalHeader>
        <ModalCloseButton boxShadow='none !important'>
          <IconClose />
        </ModalCloseButton>
        <ModalBody p={pbody}>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
