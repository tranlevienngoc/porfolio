import { Box, Flex } from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import Logo from 'components/svg/Logo';
import { STEP_CONNECT_FINISH } from 'data/connectwallet/connectwalet';
import { v4 as uuidv4 } from 'uuid';
export default function LeftModalConnect() {
  return (
    <Flex
      justifyContent='space-between'
      flexDirection='column'
      p='16px'
      bg='#F6F7F9'
      w='30%'
      borderRadius='20px 0px 0px 20px'
      display={{ base: 'none', lg: 'flex' }}
    >
      <Box>
        <Box mb='28px'>
          <Logo w={114} h={27} />
        </Box>

        <TemplateText
          fontSize='16px'
          fontWeight={600}
          txt='Let’s get started'
        />
        <TemplateText
          mt='8px'
          fontSize='13px'
          fontWeight={400}
          color='black.100'
          txt='Connecting your wallet is like “logging in” to Web3. Please select your wallet from the options to get started.'
        />
      </Box>
      <Flex gap='10px'>
        {STEP_CONNECT_FINISH.map((item) => (
          <Box key={uuidv4()}>{item.icon}</Box>
        ))}
      </Flex>
    </Flex>
  );
}
