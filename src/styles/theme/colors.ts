import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['blackAlpha']>
> = {
  text: {
    100: '#1E1E1E',
  },
  black: {
    100: '#505052',
  },
  red: {
    100: '#F94243',
    200: '#E53A35',
  },
  green: {
    100: '#5CFEA7',
    200: '#009A51',
  },
  gray: {
    100: '#777E90',
    200: '#E5E5E5',
    300: '#9B9B9E',
    400: '#252A3F',
  },
  white: {
    100: '#FFFF',
  },
  bg: {
    100: '#0F1017',
    200: '#E4F7ED',
    300: '#FFECEF',
    500: '#0B132E',
    600: '#EFF0F2',
  },
  blue: {
    100: '#106CFF',
    200: '#116CFF',
    300: '#116BFF',
    400: '#116CFF',
    500: '#008FFF',
  },
  blueWhite: {
    100: '#008FFF',
    200: '#E2F2FF',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
