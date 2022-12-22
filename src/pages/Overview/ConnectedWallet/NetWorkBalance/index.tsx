import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import { LIST_NETWORK_BALANCE } from 'data/overview';
import useColorModeValueItem from 'hook/useColorModeValueItem/useColorModeValueItem';

export default function NetWorkBalance() {
  const { darkmodeColors } = useColorModeValueItem();
  return (
    <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} gridGap='16px' w='100%'>
      {LIST_NETWORK_BALANCE.map((item, index) => (
        <Flex
          alignItems='center'
          gap={{ base: '12px', xl: '15px' }}
          key={index}
        >
          {item.icon}

          <Box>
            <TemplateText
              fontSize={{ base: '13px', xl: '14px' }}
              color={darkmodeColors.text100}
              txt={item.label}
            />
            <TemplateText
              fontSize={16}
              fontWeight={600}
              color={darkmodeColors.text100}
              txt={item.value}
            />
          </Box>
        </Flex>
      ))}
    </SimpleGrid>
  );
}
