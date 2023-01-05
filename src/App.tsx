import { ChakraProvider } from '@chakra-ui/react';
import { AppProvider } from 'Context/AppContext';

import '../src/styles/main.scss';

import Layout from './components/layout/Layout';
import customTheme from './styles/theme';

export const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <AppProvider>
        <Layout />
      </AppProvider>
    </ChakraProvider>
  );
};
