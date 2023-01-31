import { Flex, PopoverContent, PopoverTrigger, Portal } from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import ArrowBottom from 'components/svg/ArrowBottom';
import React, { ReactNode } from 'react';

interface props {
  text?: string;
  children?: ReactNode;
}

export default function PopupItem({ text, children }: props) {
  return (
    <>
      <PopoverTrigger>
        <Flex
          w='159px'
          p='8px 16px'
          ml='4px'
          cursor='pointer'
          borderRadius='10px'
          border='1px solid #E6E6E8'
          justifyContent='space-between'
          alignItems='center'
        >
          <TemplateText mr='3.5px' txt={text || ''} fontSize={13} />
          <ArrowBottom />
        </Flex>
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          top='-7px'
          w='100%'
          outline='none'
          justifyContent='center'
          bg='white'
          ml='1px'
        >
          {children}
        </PopoverContent>
      </Portal>
    </>
  );
}
