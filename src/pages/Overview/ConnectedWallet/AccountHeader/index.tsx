import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import TagBox from 'components/common/TagBox';
import TemplateText from 'components/common/Text/TemplateText';
import Ava from 'components/svg/Ava';
import { FOLLOW, TAGS } from 'data/overview';
import useColorModeValueItem from 'hook/useColorModeValueItem/useColorModeValueItem';
import { ReactNode } from 'react';

import Balance from './Balance';
import ListTabs from '../ListTabs';

interface Props {
  children?: ReactNode;
}

const AccountHeader = ({ children }: Props) => {
  const { darkmodeColors } = useColorModeValueItem();
  return (
    <Box w='100%' p={{ base: '16px', md: '24px' }}>
      <Flex>
        <Ava />
        <Balance />
      </Flex>
      <Flex
        justifyContent={{ base: 'space-between', md: 'unset' }}
        w='100%'
        gap={{ base: '32px', md: '24px' }}
        mt='16px'
      >
        {FOLLOW.map((item, index) => (
          <Flex ml='-3px' alignItems='center' gap='4px' key={index}>
            {item.icon}
            <TemplateText
              fontWeight={{ base: 500, md: 400 }}
              fontSize={{ base: '13px', md: '16px' }}
              txt={item.value}
            />
            <TemplateText
              fontWeight={{ base: 500, md: 400 }}
              fontSize={{ base: '13px', md: '16px' }}
              txt={item.label}
            />
          </Flex>
        ))}
      </Flex>
      <SimpleGrid
        columns={{ base: 2, md: 4 }}
        w={{ base: 'unset', xl: '50%' }}
        gap='8px'
        mt='16px'
      >
        {TAGS.map((item, index) => (
          <TagBox
            w='100%'
            h='40px'
            key={index}
            borderRadius='8px'
            bd='1px solid #D4D4D6'
            content={item.label}
            iconLeft={item.icon}
          />
        ))}
      </SimpleGrid>
      <Box mt='40px'>
        <ListTabs />
      </Box>
      <Box
        mt={{ base: '-20px', md: 'unset' }}
        bg={darkmodeColors.bgColorRowOdd}
      >
        <Box mt='30px'>{children}</Box>
      </Box>
    </Box>
  );
};
export default AccountHeader;
