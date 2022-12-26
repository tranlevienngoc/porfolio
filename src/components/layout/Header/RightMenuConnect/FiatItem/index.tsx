import { Box, useDisclosure } from '@chakra-ui/react';
import FiatBox from 'components/common/Header/FiatBox';
import ModalItem from 'components/common/ModalItem';
import BuyWithFiat from 'components/svg/BuyWithFiat';
import useColorModeValueItem from 'hook/useColorModeValueItem/useColorModeValueItem';

const FiatItem = () => {
  const { darkmodeColors } = useColorModeValueItem();

  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box p='8px' cursor='pointer' onClick={() => onToggle()}>
      <BuyWithFiat h='24px' w='24px' />
      <ModalItem
        onClose={onClose}
        isOpen={isOpen}
        maxW={{ base: '287px', sm: '574px' }}
        bg={darkmodeColors.bg900}
      >
        <FiatBox />
      </ModalItem>
    </Box>
  );
};

export default FiatItem;
