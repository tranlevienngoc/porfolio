import {
  Box,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverContentProps,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react';
import { ReactNode, useEffect, useState } from 'react';

import useLightMode from '../../../helpers/lightMode/isLightMode';
import useColorModeValueItem from '../../../hook/useColorModeValueItem/useColorModeValueItem';

interface PopoverItemProps extends PopoverContentProps {
  buttonItem?: ReactNode;
  children?: ReactNode;
  isDetail?: boolean;
  callback?: (val: boolean) => void;
}

export default function PopoverItem({
  buttonItem,
  children,
  callback,
  isDetail,
  ...props
}: PopoverItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  const { isLightMode } = useLightMode();
  const { darkmodeColors } = useColorModeValueItem();
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
          <PopoverArrow
            bg={isDetail ? darkmodeColors.bg150 : darkmodeColors.bg200}
            boxShadow='none'
          />
          {children}
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
