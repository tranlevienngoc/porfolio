import { Box, Flex } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import TagBox from '../../../../components/common/TagBox';
import TemplateText from '../../../../components/common/Text/TemplateText';
import ArrowBottom from '../../../../components/svg/ArrowBottom';
import Category from '../../../../components/svg/Category';
import { LIST_TAB } from '../../../../data/overview';
import useColorModeValueItem from '../../../../hook/useColorModeValueItem/useColorModeValueItem';

export default function ListTabs() {
  const router = useLocation();

  const [selected, setSelected] = useState(router.pathname);

  const [getindex] = useState(
    LIST_TAB.findIndex((item) => item.url === selected)
  );
  const seasonListRef = useRef<HTMLDivElement>(null);

  const { darkmodeColors } = useColorModeValueItem();

  const scroll = (offset: number) => {
    const curr = seasonListRef?.current;
    if (curr) {
      curr.scrollLeft += offset;
    }
  };
  useEffect(() => {
    if (getindex > 2) {
      scroll(120);
    }
  }, [getindex]);
  return (
    <>
      <Box
        overflow='auto'
        alignItems='center'
        whiteSpace='nowrap'
        border={darkmodeColors.bg450}
        justifyContent='space-between'
        ref={seasonListRef}
        w={{ base: '100%', xl: '100%' }}
        display={{ base: 'block', md: 'flex' }}
        mb='-1px'
      >
        <Flex w={{ base: '100%' }} mr='auto' gap='6px'>
          {LIST_TAB.map((item) => (
            <Link to={item.url} key={item.label}>
              <a>
                <Box
                  p='12px'
                  cursor='pointer'
                  key={item.value}
                  onClick={() => {
                    setSelected(item.url);
                  }}
                >
                  <TemplateText
                    fontSize={14}
                    fontWeight={700}
                    txt={item.label}
                    color={item.url === selected ? '#106CFF' : '#7C7C7E'}
                  />
                </Box>
              </a>
              <Box
                w='100%'
                h='2px'
                bg={item.url === selected ? ' #106CFF' : 'unset'}
              />
            </Link>
          ))}
        </Flex>
        <TagBox
          p='4px 16px'
          content='All Network'
          borderRadius={8}
          bd='1px solid #D4D4D6;'
          iconLeft={<Category />}
          iconRight={<ArrowBottom />}
        />
      </Box>
      <Box w='100%' h='1px' bg='#E6E6E8' />
    </>
  );
}