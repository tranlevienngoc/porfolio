import { ChakraProvider } from '@chakra-ui/react';

import '../src/styles/main.scss';

import Layout from './components/layout/Layout';
import customTheme from './styles/theme';

export const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout />
    </ChakraProvider>
  );
};
