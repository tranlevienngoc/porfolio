import { Box, Flex, Image } from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import { AppContext } from 'Context/AppContext';
import React, { useContext, useMemo } from 'react';
import truncateEthAddress from 'utils/truncateEthAddress';
import { v4 as uuidv4 } from 'uuid';

import MoreOptionWallet from './MoreOptionWallet';

export default function MyWalletTab() {
  const { walletAddress } = useContext(AppContext);

  const YOUR_WALLETS = useMemo(
    () => [
      {
        label: 'Metamask',
        walletAddress: walletAddress,
        value: '$3,429.65',
        img: './svg/Image-Wallet.svg',
      },
      {
        label: 'Metamask',
        walletAddress: walletAddress,
        value: '$3,429.65',
        img: './svg/Image-Wallet.svg',
      },
      {
        label: 'Metamask',
        walletAddress: walletAddress,
        value: '$3,429.65',
        img: './svg/Image-Wallet.svg',
      },
      {
        label: 'Metamask',
        walletAddress: walletAddress,
        value: '$3,429.65',
        img: './svg/Image-Wallet.svg',
      },
      {
        label: 'Metamask',
        walletAddress: walletAddress,
        value: '$3,429.65',
        img: './svg/Image-Wallet.svg',
      },
      {
        label: 'Metamask',
        walletAddress: walletAddress,
        value: '$3,429.65',
        img: './svg/Image-Wallet.svg',
      },
    ],
    []
  );
  return (
    <Box mt='16px'>
      {YOUR_WALLETS.map((item, index) => (
        <Flex
          key={uuidv4()}
          p='12px'
          justifyContent='space-between'
          alignItems='center'
          border='1px solid #EFF0F2'
          borderRadius='16px'
          mb={index === YOUR_WALLETS.length - 1 ? 'unset' : '16px'}
        >
          <Flex gap='10px' alignItems='center'>
            <Image h='48px' w='48px' src={item.img} />
            <Box>
              <TemplateText
                fontSize='13px'
                txt={truncateEthAddress(item.walletAddress)}
              />
              <TemplateText
                fontSize='13px'
                fontWeight={400}
                color='gray.500'
                txt={item.label}
              />
            </Box>
          </Flex>
          <Flex alignItems='center'>
            <TemplateText fontSize='13px' txt={item.value} />
            <MoreOptionWallet />
          </Flex>
        </Flex>
      ))}
    </Box>
  );
}
