import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalContentProps,
  ModalOverlay,
} from '@chakra-ui/react';
import IconCloseBold from 'components/svg/IconCloseBold';
import { ReactNode } from 'react';

interface PopoverItemProps extends ModalContentProps {
  title?: string;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  children?: ReactNode;
  p?: string;
  pHeader?: string;
  pBody?: string;
}

export default function ModalItem({
  children,
  isOpen = false,
  onClose = () => ({}),
  p = '16px',
  pBody,
  ...props
}: PopoverItemProps) {
  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      motionPreset='slideInBottom'
    >
      <ModalOverlay />
      <ModalContent {...props} p={p} position='relative'>
        <ModalCloseButton
          boxShadow='none !important'
          position='absolute'
          top='16px'
          right='16px'
        >
          <IconCloseBold />
        </ModalCloseButton>
        <ModalBody p={pBody}>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
