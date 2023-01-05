import {
  Box,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useDisclosure,
} from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import TextStatistical from 'components/common/Text/TextStatistical';
import ArrowBottom from 'components/svg/ArrowBottom';
import RefeshCircle from 'components/svg/RefeshCircle';
import { AppContext } from 'Context/AppContext';
import React, { useContext } from 'react';
import truncateEthAddress from 'utils/truncateEthAddress';

export default function Balance() {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const { addressWallet } = useContext(AppContext);
  return (
    <Box ml='16px'>
      <Popover
        trigger='click'
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onToggle}
        returnFocusOnClose={false}
        closeOnBlur={true}
      >
        <PopoverTrigger>
          <Box>
            <Flex
              w='100px'
              h='20px'
              ml='4px'
              cursor='pointer'
              borderRadius={400}
            >
              <TemplateText
                mr='3.5px'
                txt={truncateEthAddress(addressWallet)}
                fontSize={11}
              />
              <ArrowBottom />
            </Flex>
          </Box>
        </PopoverTrigger>
        <Portal>
          <PopoverContent
            zIndex={999}
            bg='white'
            w='200px'
            mr='50px'
            mt='-10px'
            p='10px'
          >
            <TemplateText txt={addressWallet} />
          </PopoverContent>
        </Portal>
      </Popover>
      <Flex alignItems='center' gap='16px'>
        <TemplateText fontSize='24px' fontWeight={600} txt='$ 3,424.95' />
        <RefeshCircle />
      </Flex>

      <TextStatistical fontSize='16px' txt='0,22% ($7,57)' isIncrease={false} />
    </Box>
  );
}
