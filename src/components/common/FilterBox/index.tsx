import { Box } from '@chakra-ui/react';
import { useCallback } from 'react';

import ButtonBase from '../Buttons/ButtonBase';
import FlexScroll from '../Flex/FlexScroll';
import ArrowBottom from '../../svg/ArrowBottom';
import Category from '../../svg/Category';
import { OptionFilters } from '../../../constants/types';
import useColorModeValueItem from '../../../hook/useColorModeValueItem/useColorModeValueItem';
import LinkItem from '../LinkItem';
import { Link } from 'react-router-dom';

interface Props {
  selected?: string;
  optionFilters?: OptionFilters[];
  isCryptocurrency?: boolean;
  setSelected?: (value: string) => void;
  isShowButtonFilter?: boolean;
}

const FilterBox = ({
  selected,
  optionFilters = [],
  isCryptocurrency = false,
  setSelected = () => ({}),
  isShowButtonFilter = true,
}: Props) => {
  const { darkmodeColors } = useColorModeValueItem();
  const renderValue = useCallback(
    (firstValue: string, secondValue: string) => {
      return isCryptocurrency ? firstValue : secondValue;
    },
    [isCryptocurrency]
  );

  return (
    <>
      <FlexScroll
        justifyContent='flex-start'
        mt={{ base: renderValue('14px', '14px'), xl: 'unset' }}
        order={{ base: 4, xl: 'unset' }}
        alignItems='center'
        gap='4px'
        w={{ base: '100%', xl: 'unset' }}
      >
        {optionFilters.map((item, index) => (
          <Box
            w='auto'
            p='0px 12px'
            cursor='pointer'
            borderRadius='8px'
            key={index}
            bg={item.value === selected ? 'blue.200' : 'unset'}
            onClick={() => setSelected(item.value)}
            _hover={{
              background:
                item.value === selected ? 'blue.200' : darkmodeColors.bg470,
            }}
          >
            <Link to={renderValue(item.value, item?.url || '')}>
              {item.label}
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
    </>
  );
};

export default FilterBox;
