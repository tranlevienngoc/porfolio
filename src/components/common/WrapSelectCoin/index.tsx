import {
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';

import SelectCoin from '../SelectCoin/SelectCoin';
import TemplateText from '../Text/TemplateText';
import ArrowBottom from '../../svg/ArrowBottom';
import { ConvertCoin } from '../../../constants/types';
import useColorModeValueItem from '../../../hook/useColorModeValueItem/useColorModeValueItem';

interface Props {
  item: ConvertCoin;
  index: number;

  isDetail?: boolean;
}

export default function WrapSelectCoin({ item, index }: Props) {
  const { darkmodeColors } = useColorModeValueItem();

  const [coin, setCoin] = useState(item.children[0]);

  const { onToggle } = useDisclosure();

  return (
    <Popover>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Flex
              w='100%'
              onClick={onToggle}
              key={item.name}
              alignItems='center'
              borderRadius='8px'
              bg='white'
              border='1px solid  #E6E6E8'
              h='40px'
            >
              <Flex
                w='100%'
                cursor='pointer'
                alignItems='center'
                justifyContent='space-between'
                p='8px'
              >
                <Flex
                  alignItems='center'
                  w='100%'
                  ml={{ base: 'unset', md: index == 1 ? '5px' : 'unset' }}
                  gap='6px'
                >
                  {coin.icon}
                  <TemplateText
                    fontSize='16px'
                    color='black.100'
                    txt={coin.name}
                  />
                  <TemplateText
                    fontWeight={400}
                    color={darkmodeColors.text525}
                    txt={coin.label ? `(${coin.label})` : ''}
                  />
                </Flex>

                <ArrowBottom />
              </Flex>
            </Flex>
          </PopoverTrigger>
          <Portal>
            <PopoverContent
              zIndex={999}
              top='-8px'
              gap='8px'
              w={{ base: '290px', md: 'auto' }}
              justifyContent='center'
            >
              <SelectCoin
                onClose={onClose}
                name={coin.name}
                arrCoin={item.children}
                Coin={coin}
                setCoin={setCoin}
              />
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  );
}
