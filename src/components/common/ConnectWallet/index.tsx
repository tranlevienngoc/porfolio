import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import LeftModalConnect from './LeftModalConnect';
import RightModalConnect from './RightModalConnect';

export default function ConnectWallet() {
  return (
    <Box
      zIndex={2}
      w={{ base: '100%', lg: '720px' }}
      h={{ base: '100%', lg: '450px' }}
    >
      <Flex h='100%'>
        <LeftModalConnect />
        <RightModalConnect />
      </Flex>
    </Box>
  );
}
