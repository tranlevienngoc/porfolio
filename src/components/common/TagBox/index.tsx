import { Box, Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

import TemplateText from '../Text/TemplateText';
import { ChakraType } from '../../../constants/types';
import useColorModeValueItem from '../../../hook/useColorModeValueItem/useColorModeValueItem';

interface Props extends FlexProps {
  fsText?: ChakraType;

  fwText?: number;
  content: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  colorText?: string;
  gap?: ChakraType;
  p?: ChakraType;
  bd?: ChakraType;
  isdetail?: boolean;
}
const TagBox = ({
  content = '',
  fsText,
  fwText = 500,
  iconLeft,
  iconRight,
  colorText,
  p = '4px 8px',
  gap,
  bd,
  isdetail,
  ...props
}: Props) => {
  const { darkmodeColors } = useColorModeValueItem();
  return (
    <Flex
      {...props}
      p={p}
      gap={gap ? gap : '8px'}
      alignItems='center'
      border={bd || darkmodeColors.border200}
      cursor='pointer'
      justifyContent='center'
    >
      {iconLeft}
      <TemplateText
        txt={content}
        fontSize={fsText ? fsText : '13px'}
        fontWeight={fwText}
        color={colorText || darkmodeColors.text100}
      />

      {isdetail ? (
        <Box mt='3px' display={{ base: 'none', md: 'unset' }}>
          {iconRight}
        </Box>
      ) : (
        <Box mt='3px'>{iconRight}</Box>
      )}
    </Flex>
  );
};

export default TagBox;
