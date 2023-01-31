import { Box, BoxProps } from '@chakra-ui/react';
import useColorModeValueItem from 'hook/useColorModeValueItem/useColorModeValueItem';

function Divider({ h = '1px', ...props }: BoxProps) {
  const { darkmodeColors } = useColorModeValueItem();

  return <Box {...props} h={h} border={darkmodeColors.border700} />;
}

export default Divider;
