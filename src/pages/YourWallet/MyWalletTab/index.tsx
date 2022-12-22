import { Box, Flex, Image } from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import { LIST_YOUR_WALLET } from 'data/your-wallet/your-wallet';
import React from 'react';
import truncateEthAddress from 'utils/truncateEthAddress';

import MoreOptionWallet from './MoreOptionWallet';

export default function MyWalletTab() {
  return (
    <Box mt='16px'>
      {LIST_YOUR_WALLET.map((item, index) => (
        <Flex
          p='12px'
          justifyContent='space-between'
          alignItems='center'
          border='1px solid #EFF0F2'
          borderRadius='16px'
          mb={index === LIST_YOUR_WALLET.length - 1 ? 'unset' : '16px'}
        >
          <Flex gap='10px' alignItems='center'>
            <Image h='48px' w='48px' src={item.img} />
            <Box>
              <TemplateText
                fontSize='13px'
                txt={truncateEthAddress(item.address)}
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
