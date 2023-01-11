import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import LeftModalConnect from './LeftModalConnect';
import RightModalConnect from './RightModalConnect';

interface props {
  onCloseRightSideBar?: () => void;
}

export default function ConnectWallet({
  onCloseRightSideBar = () => ({}),
}: props) {
  return (
    <Box
      zIndex={2}
      w={{ base: '100%', lg: '720px' }}
      h={{ base: '100%', lg: '450px' }}
    >
      <Flex h='100%'>
        <LeftModalConnect />
        <RightModalConnect onCloseRightSideBar={onCloseRightSideBar} />
      </Flex>
    </Box>
  );
}
