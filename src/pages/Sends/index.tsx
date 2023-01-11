import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import React from 'react';

import TokenTab from './TokenTab';

export default function Sends() {
  return (
    <Box p='24px' h='100vh'>
      <TemplateText
        txt='Send'
        fontSize={{ base: '16px', md: '36px' }}
        fontWeight={600}
      />
      <TemplateText
        txt='CoinsPlus helps you to find the easy way to send any tokens or NFTs with fews click.'
        fontSize={{ base: '13px', md: '16px' }}
        fontWeight={400}
      />
      <Flex justifyContent='center'>
        <Box
          w='574px'
          h='100%'
          bg='#F9FAFC'
          border='1px solid #EFF0F2'
          borderRadius='16px'
          mt='20px'
          p='20px'
        >
          <Tabs>
            <TabList w='100%'>
              <Tab
                _selected={{
                  color: 'blue.100',
                  borderBottom: '2px solid  #106CFF',
                }}
                color='gray.500'
                fontSize={16}
                fontWeight={600}
                w='50%'
              >
                Token
              </Tab>
              <Tab
                w='50%'
                _selected={{
                  color: 'blue.100',
                  borderBottom: '2px solid  #106CFF',
                }}
                color='gray.500'
                fontSize={16}
                fontWeight={600}
              >
                NFT
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel p='-10px'>
                <TokenTab />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
}
