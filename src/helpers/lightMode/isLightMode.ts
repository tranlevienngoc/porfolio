import { useColorMode } from '@chakra-ui/react';

const useLightMode = () => {
  const { colorMode } = useColorMode();

  return {
    isLightMode: colorMode === 'light',
  };
};

export default useLightMode;
