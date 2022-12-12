import { Box, BoxProps } from '@chakra-ui/react';

import useColorModeValueItem from '../../../hook/useColorModeValueItem/useColorModeValueItem';

function Divider({ ...props }: BoxProps) {
  const { darkmodeColors } = useColorModeValueItem();

  return <Box {...props} border={darkmodeColors.border700} />;
}

export default Divider;
