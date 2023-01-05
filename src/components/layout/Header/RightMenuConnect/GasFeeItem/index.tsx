import { Box } from '@chakra-ui/react';
import GasFeeBox from 'components/common/Header/GasFeeBox';
import PopoverItem from 'components/common/PopoverItem/PopoverItem';
import TagBox from 'components/common/TagBox';
import ArrowBottom from 'components/svg/ArrowBottom';
import GasFee from 'components/svg/Gasfee';
import useColorModeValueItem from 'hook/useColorModeValueItem/useColorModeValueItem';

const GasFeeItem = () => {
  const { darkmodeColors } = useColorModeValueItem();

  return (
    <PopoverItem
      m='5px 5px 0px 0px'
      buttonItem={
        <Box>
          <TagBox
            content='12'
            iconLeft={<GasFee />}
            iconRight={<ArrowBottom />}
            p='8px'
            borderRadius={8}
            className='border-box'
            bd='none'
          />
        </Box>
      }
      boxShadow='0px 2px 14px rgba(0, 0, 0, 0.16), 0px 16px 40px rgba(0, 0, 0, 0.16)'
      w='auto'
      bg={darkmodeColors.bg200}
      border='none'
    >
      <GasFeeBox />
    </PopoverItem>
  );
};

export default GasFeeItem;
