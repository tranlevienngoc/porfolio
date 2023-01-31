import { Box, Flex } from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import IconCheck from 'components/svg/IconCheck';
import { ChildrenConvertCoin } from 'constants/types';
import useColorModeValueItem from 'hook/useColorModeValueItem/useColorModeValueItem';

interface Props {
  arrCoin?: ChildrenConvertCoin[];
  Coin?: ChildrenConvertCoin;
  setCoin?: (value: ChildrenConvertCoin) => void;
  onClose?: () => void;
  name: string;
}
export default function SelectCoin({
  arrCoin = [],
  setCoin = () => ({}),
  onClose = () => ({}),
  name,
}: Props) {
  const { darkmodeColors } = useColorModeValueItem();
  const handleSelectOption = (item: ChildrenConvertCoin) => {
    setCoin(item);
    onClose();
  };
  return (
    <Box
      p='16px'
      bg={{ base: darkmodeColors.bg100, xl: darkmodeColors.bg200 }}
      borderRadius='8px'
      border='none'
      w={{ base: '100%', md: '250px' }}
      boxShadow={{
        base: 'none',
        xl: '0px 2px 10px rgba(0, 0, 0, 0.08), 0px 10px 32px rgba(0, 0, 0, 0.06)',
      }}
      zIndex={999}
    >
      <Box
        cursor='pointer'
        bg={darkmodeColors.bg100}
        display={{ base: 'flex', xl: 'unset' }}
        flexWrap='wrap'
      >
        {arrCoin.map((item, index) => (
          <Box key={item.name} w={{ base: '100%', xl: 'unset' }}>
            <Flex
              mb={index === arrCoin.length - 1 ? 'unset' : '16px'}
              gap='8px'
              onClick={() => handleSelectOption(item)}
              borderRadius='8px'
              _hover={{
                backgroundColor: darkmodeColors.bg50,
              }}
              justifyContent='space-between'
              p='5px 0px'
            >
              <Flex gap='8px'>
                {item.icon}
                <TemplateText
                  fontSize='16px'
                  fontWeight={400}
                  txt={item.name}
                />
                <TemplateText
                  txt={item.label ? `(${item.label})` : ''}
                  color='text.100'
                />
              </Flex>
              {item.name === name && <IconCheck />}
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
