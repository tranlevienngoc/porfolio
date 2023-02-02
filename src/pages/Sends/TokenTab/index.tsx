import {
  Box,
  Flex,
  Image,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react';
import ButtonBase from 'components/common/Buttons/ButtonBase';
import TemplateText from 'components/common/Text/TemplateText';
import WrapSelectCoin from 'components/common/WrapSelectCoin';
import ArrowBottom from 'components/svg/ArrowBottom';
import PersonCard from 'components/svg/PersonCard';
import { AppContext } from 'Context/AppContext';
import { LIST_COIN } from 'data/send/send';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import truncateEthAddress from 'utils/truncateEthAddress';
import { v4 as uuidv4 } from 'uuid';

export default function TokenTab() {
  const [valueSearch, setValueSearch] = useState('');
  const [valueTrading, setvalueTrading] = useState('134.430');

  const handleChangeInput = useCallback((value: string) => {
    setValueSearch(value);
  }, []);
  const handleChangeTrading = useCallback((value: string) => {
    setvalueTrading(value);
  }, []);

  const { walletAddress } = useContext(AppContext);
  const WALLETS = useMemo(
    () => [
      {
        name: 'Trust Wallet',
        walletAddress: walletAddress,
        value: '$3,429.65',
        img: './svg/Image-Wallet.svg',
      },
      {
        name: 'CoinBase Wallet',
        walletAddress: walletAddress,
        value: '$3,429.65',
        img: './svg/Image-Wallet.svg',
      },
      {
        name: 'Trust Wallet',
        walletAddress: walletAddress,
        value: '$3,429.65',
        img: './svg/Image-Wallet.svg',
      },
      {
        name: 'Metamask',
        walletAddress: walletAddress,
        value: '$3,429.65',
        img: './svg/Image-Wallet.svg',
      },
    ],
    []
  );
  return (
    <>
      <Flex w='100%'>
        <Box w='100%' borderRadius='10px'>
          <Box
            w='100%'
            display={{ base: 'block', md: 'flex' }}
            borderRadius='10px'
            justifyContent='space-between'
            gap='16px'
          >
            {LIST_COIN.map((item, index) => (
              <Box mt='20px' w='100%' key={uuidv4()}>
                <TemplateText mb='4px' fontSize='13px' txt={item.name} />
                <WrapSelectCoin key={item.name} item={item} index={index} />
              </Box>
            ))}
          </Box>
        </Box>
      </Flex>
      <Box mt='20px' bg='white' p='10px' borderRadius='16px'>
        <TemplateText fontSize='13px' color='gray.500' txt='Recipient' />
        <Flex alignItems='center'>
          <Input
            h='40px'
            w={{ base: '100%', xl: '90%' }}
            value={valueSearch}
            backgroundColor='white'
            onChange={(e) => handleChangeInput(e.target.value)}
            borderRight='1px solid #D9D9D9'
            border='none'
            borderRadius='0px'
            placeholder='Address, Domain, Identity...'
          />
          <Popover placement='bottom-end'>
            {({ onClose }) => (
              <>
                <PopoverTrigger>
                  <Box>
                    <Flex
                      w='50px'
                      h='40px'
                      p='0px 2px'
                      ml='4px'
                      gap='4px'
                      cursor='pointer'
                      borderRadius='10px'
                      alignItems='center'
                      border='1px solid #D9D9D9'
                    >
                      <PersonCard />
                      <ArrowBottom />
                    </Flex>
                  </Box>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent
                    zIndex={999}
                    top='0px'
                    border='none'
                    ml='12px'
                    bg='white'
                    p={{ base: '12px', md: '16px' }}
                    w={{ base: '100%', md: '526px' }}
                    boxShadow='0px 2px 6px -1px rgba(0, 0, 0, 0.1), 0px 6px 24px rgba(0, 0, 0, 0.1)'
                    borderRadius='16px'
                  >
                    {WALLETS.map((item, index) => (
                      <Box
                        key={uuidv4()}
                        _hover={{ border: '1px solid #106CFF' }}
                        p={{ base: '12px', md: '16px' }}
                        borderRadius='16px'
                        border={{ base: '1px solid #EFF0F2', md: 'unset' }}
                        mb={{
                          base: index === WALLETS.length - 1 ? 'unset' : '12px',
                          md: 'unset',
                        }}
                        onClick={() => {
                          setValueSearch(item.walletAddress);
                          onClose();
                        }}
                      >
                        <Flex
                          justifyContent='space-between'
                          alignItems='center'
                        >
                          <Flex gap='8px' alignItems='center'>
                            <Image h='48px' w='48px' src={item.img} />
                            <Box>
                              <TemplateText
                                txt={truncateEthAddress(item.walletAddress)}
                              />
                              <TemplateText txt={item.name} />
                            </Box>
                          </Flex>
                          <TemplateText txt={item.value} />
                        </Flex>
                      </Box>
                    ))}
                  </PopoverContent>
                </Portal>
              </>
            )}
          </Popover>
        </Flex>
      </Box>
      <Box p='16px' bg='white' mt='16px' borderRadius='16px'>
        <Flex alignItems='center' justifyContent='space-between'>
          <TemplateText txt='Asset' color='gray.500' />
          <TemplateText txt='Available: 134.43' color='gray.500' />
        </Flex>
        <Box p='12px 0px'>
          <Input
            h='40px'
            w={{ base: '100%', xl: '90%' }}
            value={valueTrading}
            backgroundColor='white'
            onChange={(e) => handleChangeTrading(e.target.value)}
            border='none'
            placeholder='Fill the amounts'
            borderRadius='0px'
            pl='0px'
            focusBorderColor='transparent'
          />
        </Box>
      </Box>
      <Box mt='16px'>
        <ButtonBase
          colorText='white'
          content='Send now'
          w='100%'
          bg='blue.100'
        />
      </Box>
    </>
  );
}
