import { Box, Flex, useOutsideClick } from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import TextBold from 'components/common/Text/TextBold';
import ArrowBottom from 'components/svg/ArrowBottom';
import IconCheck from 'components/svg/IconCheck';
import { LIST_CHAIN, LIST_GAS } from 'data/menu/menu';
import useColorModeValueItem from 'hook/useColorModeValueItem/useColorModeValueItem';
import React, { useRef, useState } from 'react';

export default function GasFeeItemMobile() {
  const { darkmodeColors } = useColorModeValueItem();
  const [selected, setSeleted] = useState(false);
  const [coin, setCoin] = useState(LIST_CHAIN[0]);
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  useOutsideClick({
    ref: ref,
    handler: () => setSeleted(false),
  });
  return (
    <Box w='100%' borderRadius='16px'>
      <TextBold txt='Realtime gas price' mb='16px' />
      <Flex
        alignItems='center'
        onClick={() => setSeleted(!selected)}
        p='8px'
        borderRadius={8}
        border='1px solid #7C7C7E'
        cursor='pointer'
      >
        {coin.icon}
        <TextBold ml='4px' mr='auto' txt={coin.name} fontWeight={500} />
        <ArrowBottom />
      </Flex>
      {selected && (
        <Box
          position='absolute'
          mt='4px'
          w='287px'
          p='16px'
          borderRadius={8}
          bg='white'
          boxShadow='0px 2px 6px -1px rgba(0, 0, 0, 0.1), 0px 6px 24px rgba(0, 0, 0, 0.1)'
          flexDirection='column'
          ref={ref}
        >
          <TextBold txt='Select chain' mb='20px' />
          {LIST_CHAIN.map((item, index) => (
            <Box
              key={item.name}
              w={{ base: '100%', xl: 'unset' }}
              mb={index === LIST_CHAIN.length - 1 ? 'unset' : '16px'}
            >
              <Flex
                gap='8px'
                onClick={() => {
                  setCoin(item);
                  setSeleted(!selected);
                }}
                borderRadius='8px'
                _hover={{
                  backgroundColor: darkmodeColors.bg50,
                }}
                justifyContent='space-between'
                p='5px 0px'
              >
                <Flex gap='8px'>
                  {item.icon}
                  <TemplateText
                    fontSize='16px'
                    fontWeight={400}
                    txt={item.name}
                  />
                  <TemplateText txt={item.name && ''} color='text.100' />
                </Flex>
                {item.name === coin.name && <IconCheck />}
              </Flex>
            </Box>
          ))}
        </Box>
      )}

      <Flex flexDirection='column' gap='20px' mt='20px'>
        {LIST_GAS.map((it) => (
          <Flex key={it.value}>
            {it.icon}
            <TextBold ml='8px' fontWeight={500} txt={it.name} mr='auto' />
            <TemplateText fontWeight={500} txt={it.value} />
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
