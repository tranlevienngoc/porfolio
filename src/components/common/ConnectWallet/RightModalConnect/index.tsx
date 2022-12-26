import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import BoxRound from 'components/common/BoxRound';
import ButtonBase from 'components/common/Buttons/ButtonBase';
import FlexCenter from 'components/common/Flex/FlexCenter';
import SearchInput from 'components/common/Input/SearchInput';
import TemplateText from 'components/common/Text/TemplateText';
import {
  LIST_OPTION_WALLET,
  TEXT_GUIDE,
} from 'data/connectwallet/connectwalet';
import React, { useCallback, useState } from 'react';

export default function RightModalConnect() {
  const [valueSearch, setValueSearch] = useState('');
  const handleChangeInput = useCallback((value: string) => {
    setValueSearch(value);
  }, []);
  return (
    <Flex
      flexDirection='column'
      justifyContent={{ base: 'unset', xl: 'space-between' }}
      p={{ base: '0px', xl: '16px' }}
      w='100%'
    >
      <Box>
        <TemplateText txt='Connect Wallet' fontSize='16px' fontWeight={600} />
        <TemplateText
          display={{ base: 'block', xl: 'none' }}
          mt='8px'
          fontSize='13px'
          fontWeight={400}
          txt='Connecting your wallet is like “logging in” to Web3. Please select your wallet from the options to get started.'
        />
        <Box display={{ base: 'none', xl: 'block' }}>
          {TEXT_GUIDE.map((item, index) => (
            <TemplateText
              key={index}
              fontSize='13px'
              fontWeight={400}
              color='black.100'
              txt={item.content}
            />
          ))}
        </Box>
        <SimpleGrid mt='16px' columns={{ base: 2, md: 4, xl: 2 }} gap='10px'>
          {LIST_OPTION_WALLET.map((item, index) => (
            <Box
              key={index}
              textAlign='center'
              display={{ base: 'block', xl: 'flex' }}
              alignItems='center'
              borderRadius='12px'
              border={{ base: 'none', xl: '1px solid #EFF0F2' }}
              p='8px 12px'
              justifyContent={{ base: 'center', xl: 'space-between' }}
              opacity={item.disable ? 0.5 : 1}
            >
              <Box
                display={{ base: 'block', xl: 'flex' }}
                alignItems='center'
                gap='5px'
              >
                <FlexCenter>{item.icon}</FlexCenter>
                <TemplateText
                  fontSize={{ base: '13px', xl: '16px' }}
                  txt={item.label}
                />
              </Box>
              {item.disable && (
                <FlexCenter>
                  <BoxRound
                    bg='#E2F4FD'
                    fontSize='13px'
                    w={{ base: '40%', xl: 'unset' }}
                    p='2px 4px'
                  >
                    soon
                  </BoxRound>
                </FlexCenter>
              )}
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box mt={{ base: '20px', xl: 'unset' }}>
        <TemplateText txt='Track any wallet' fontSize='16px' fontWeight={600} />
        <TemplateText
          txt='Copy address from any body which you want to figure out their wallet'
          fontSize='13px'
          fontWeight={400}
          color='black.100'
        />
        <Flex gap='5px' alignItems='center' mt='16px'>
          <SearchInput
            h='40px'
            w='100%'
            value={valueSearch}
            backgroundColor='white'
            onChange={(value) => handleChangeInput(value)}
            placeholder='Enter address, domain or identity'
          />
          <ButtonBase
            content='Add'
            bg='white'
            w='20%'
            border='1px solid #D4D4D6'
          />
        </Flex>
      </Box>
    </Flex>
  );
}