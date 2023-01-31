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
import { LIST_PANEL } from 'data/send/send';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

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
              {LIST_PANEL.map((item) => (
                <Tab
                  key={uuidv4()}
                  _selected={{
                    color: 'blue.100',
                    borderBottom: '2px solid  #106CFF',
                  }}
                  color='gray.500'
                  fontSize={16}
                  fontWeight={600}
                  w='50%'
                >
                  {item.name}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {LIST_PANEL.map((item) => (
                <TabPanel key={uuidv4()} p='-10px'>
                  {item.element}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
}
