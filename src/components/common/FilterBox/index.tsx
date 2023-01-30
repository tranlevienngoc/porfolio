import { Box } from '@chakra-ui/react';
import ArrowBottom from 'components/svg/ArrowBottom';
import Category from 'components/svg/Category';
import { OptionFilters } from 'constants/types';
import useColorModeValueItem from 'hook/useColorModeValueItem/useColorModeValueItem';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import ButtonBase from '../Buttons/ButtonBase';
import FlexScroll from '../Flex/FlexScroll';
import SearchInput from '../Input/SearchInput';
import TemplateText from '../Text/TemplateText';

interface Props {
  selected?: string;
  optionFilters?: OptionFilters[];
  isCryptocurrency?: boolean;
  setSelected?: (value: string) => void;
  isShowButtonFilter?: boolean;
  isShowSearchFilter?: boolean;
}

const FilterBox = ({
  selected,
  optionFilters = [],
  isCryptocurrency = false,
  setSelected = () => ({}),
  isShowButtonFilter = true,
  isShowSearchFilter = true,
}: Props) => {
  const { darkmodeColors } = useColorModeValueItem();
  const renderValue = useCallback(
    (firstValue: string, secondValue: string) => {
      return isCryptocurrency ? firstValue : secondValue;
    },
    [isCryptocurrency]
  );

  const [valueSearch, setValueSearch] = useState('');

  const handleChangeInput = useCallback((value: string) => {
    setValueSearch(value);
  }, []);

  return (
    <Box display={{ base: 'block', xl: 'flex' }} justifyContent='space-between'>
      <FlexScroll
        justifyContent='flex-start'
        mt={{ base: renderValue('14px', '14px'), xl: 'unset' }}
        order={{ base: 4, xl: 'unset' }}
        alignItems='center'
        gap='4px'
        w={{ base: '100%', xl: 'unset' }}
        mb={{ base: '20px', xl: 'unset' }}
      >
        {optionFilters.map((item) => (
          <Box
            w='auto'
            p='8px 24px'
            cursor='pointer'
            borderRadius='8px'
            border='1px solid #D4D4D6'
            key={uuidv4}
            bg={item.url === selected ? 'blue.200' : 'unset'}
            onClick={() => setSelected(item.value)}
            _hover={{
              background:
                item.url === selected ? 'blue.200' : darkmodeColors.bg470,
            }}
          >
            <Link to={renderValue(item.value, item?.url || '')}>
              <TemplateText
                color={item.url === selected ? 'white' : 'unset'}
                txt={item.label}
              />
            </Link>
          </Box>
        ))}
      </FlexScroll>
      {isShowButtonFilter && (
        <ButtonBase
          fsText={14}
          fwText={500}
          h='36px'
          w='82px'
          bg={darkmodeColors.bg100}
          content='All Network'
          borderRadius='8px'
          mt='2px'
          border={darkmodeColors.border500}
          _hover={{ background: darkmodeColors.bg470 }}
          iconLeft={<Category />}
          iconRight={<ArrowBottom />}
        />
      )}
      {isShowSearchFilter && (
        <SearchInput
          h='40px'
          w={{ base: '100%', xl: '359px' }}
          value={valueSearch}
          backgroundColor={darkmodeColors.bg900}
          onChange={handleChangeInput}
          placeholder='Search Transaction'
        />
      )}
    </Box>
  );
};

export default FilterBox;
