import {
  Box,
  Popover,
  PopoverContent,
  PopoverContentProps,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react';
import useLightMode from 'helpers/lightMode/isLightMode';
import { ReactNode, useEffect, useState } from 'react';

interface PopoverItemProps extends PopoverContentProps {
  buttonItem?: ReactNode;
  children?: ReactNode;

  callback?: (val: boolean) => void;
}

export default function PopoverItem({
  buttonItem,
  children,
  callback,

  ...props
}: PopoverItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  const { isLightMode } = useLightMode();

  useEffect(() => {
    if (callback) callback(isOpen);
  }, [callback, isOpen]);

  return (
    <Popover
      returnFocusOnClose={false}
      isOpen={isOpen}
      onClose={close}
      onOpen={open}
      closeOnBlur={true}
    >
      <PopoverTrigger>
        <Box>{buttonItem}</Box>
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          {...props}
          borderColor={isLightMode ? '#e3e3e4' : '#54545a'}
        >
          {children}
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
