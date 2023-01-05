import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import LeftModalConnect from './LeftModalConnect';
import RightModalConnect from './RightModalConnect';

export default function ConnectWallet() {
  return (
    <Box zIndex={2} w='100%' h='100%'>
      <Flex h='100%'>
        <LeftModalConnect />
        <RightModalConnect />
      </Flex>
    </Box>
  );
}
