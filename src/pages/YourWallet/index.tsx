import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import BoxRound from 'components/common/BoxRound';
import TemplateText from 'components/common/Text/TemplateText';
import { LIST_TAB_YOUR_WALLET } from 'data/your-wallet/your-wallet';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import MyWalletTab from './MyWalletTab';

export default function YourWalletPage() {
  return (
    <Box p='24px' h='100vh'>
      <Box>
        <TemplateText fontSize='16px' fontWeight={600} txt='Manage Wallets' />
        <TemplateText
          fontSize='13px'
          fontWeight={400}
          color='#343436'
          txt='CoinsPlus helps you to find easy way to send any tokens or NFTs with fews click'
        />
      </Box>

      <Box>
        <Tabs>
          <TabList w={{ base: '100%', md: '45%', xl: '35%' }}>
            {LIST_TAB_YOUR_WALLET.map((item) => (
              <Tab
                key={uuidv4()}
                _selected={{
                  color: 'blue.100',
                  borderBottom: '2px solid  #106CFF',
                }}
                color='gray.500'
                fontSize={{ base: '13px', xl: '16px' }}
                fontWeight={600}
                w='50%'
                p='8px 12px'
              >
                <Flex gap='16px' alignItems='center'>
                  {item.label}
                  <BoxRound bg='#E2F4FD' p='4px 8px'>
                    {item.value}
                  </BoxRound>
                </Flex>
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel p='-10px'>
              <MyWalletTab />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
