import { Box } from '@chakra-ui/react';
import CurrencyBox from 'components/common/Header/CurrencyBox';
import PopoverItem from 'components/common/PopoverItem/PopoverItem';
import TagBox from 'components/common/TagBox';
import ArrowBottom from 'components/svg/ArrowBottom';
import Currency from 'components/svg/Currency';
import useColorModeValueItem from 'hook/useColorModeValueItem/useColorModeValueItem';
import { ReactNode, useState } from 'react';

const CurrencyItem = () => {
  const { darkmodeColors } = useColorModeValueItem();

  const [content, setContent] = useState('USD');
  const [icon, setIcon] = useState<ReactNode>(<Currency />);

  return (
    <PopoverItem
      m='5px 5px 0px 0px'
      buttonItem={
        <Box>
          <TagBox
            content={content}
            iconLeft={icon}
            iconRight={
              <Box mt='-4px'>
                <ArrowBottom />
              </Box>
            }
            p='8px'
            borderRadius={8}
            bd='none'
            className='border-box'
          />
        </Box>
      }
      boxShadow='0px 2px 14px rgba(0, 0, 0, 0.16), 0px 16px 40px rgba(0, 0, 0, 0.16)'
      w='auto'
      bg={darkmodeColors.bg200}
      border='none'
    >
      <CurrencyBox setContent={setContent} setIcon={setIcon} />
    </PopoverItem>
  );
};

export default CurrencyItem;
