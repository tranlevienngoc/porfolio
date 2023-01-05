import { ReactNode } from 'react';

export type Merge<P, T> = Omit<P, keyof T> & T;
export type Nullable<T> = T | null;
export type Undefinedable<T> = T | undefined;
export type TokenType<T> = T | T[] | null;

export type OptionType = {
  value: string;
  label: string;
};
export type OptionCoinType = {
  value: string;
  name: string;
  label: string;
  icon: ReactNode;
};

export type OptionFilters = {
  url?: string;
  label: string;
  value: string;
  title?: string;
  description?: string;
};

export type children = {
  title: string;
  content: string;
};

export type ErrorMsg = Error | string | string[];

export type TypeButton = 'submit' | 'button' | 'reset' | undefined;

export type PointType = { series: { color: string; name: string }; y: string };

export type ChakraType =
  | undefined
  | string
  | {
      base?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
      '2xl'?: string;
    };

export type ErrorType =
  | string
  | {
      base?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
      '2xl'?: string;
    };

export type ErrorFormType = { [key: string]: { message?: string } };

export type ChangeTypeCoin = {
  coin: ChildrenConvertCoin;
  mony: ChildrenConvertCoin;
};

export type ChildrenConvertCoin = {
  name: string;
  value: string;
  label?: string;
  icon: ReactNode;
};

export type ConvertCoin = {
  name: string;
  children: ChildrenConvertCoin[];
};

export type Content = {
  name: string;
  value: string;
  islink?: boolean;
  href?: string;
  children?: {
    name: string;
    value: string;
    children?: {
      value1?: string;
      link?: string;
      value2?: string;
      href?: string;
    }[];
  }[];
};

export type Introduction = {
  title: string;
  content: Content[];
};

export type TrendingCoin = {
  name: string;
  value: string;
  icon: ReactNode;
  percent: string;
  isIncrease: boolean;
  image: string;
};

export type TrendingCoinOption = {
  name: string;
  icon: ReactNode;
  bg: string;
  href?: string;
  iconbgtop?: ReactNode;
  iconbg?: ReactNode;
  iconmb?: ReactNode;
  iconmbtop?: ReactNode;
};

export type Point = {
  series: {
    color: string;
    name: string;
  };
  y: string;
};

export type DatasGainersLosersBox = {
  icon: string;
  name: string;
  sign: string;
  volume: string;
  price: string;
  percent: string;
  isIncrease: boolean;
};
export type Original = {
  name: string;
};

export type CellOfTable = {
  cell: {
    row: Row;
  };
};

export type Row = {
  index: number;
  original: DatasTable;
};

export type DatasExchangesTable = {
  name: string;
  label: string;
  icon: string;
  sign: string;
  trustScore: string;
  volume24hNormalized: string;
  volume24h: string;
  visitsSimilarWeb: string;
  coins: string;
  pairs: string;
  last7Days: number;
  url: string;
};

export type DatasTable = {
  btc: string;
  usd: string;
  Date: string;
  Dayoftheweek: string;
  BTCtoUSD: string;
  hrChanges: string;
  change: string;
  text: 'center';
  balance: string;
  value: string;
  name: string;
  pairs: string;
  time: string;
  price: string;
  depth2Plus: string;
  depth2: string;
  volume: string;
  volumePercent: string;
  liquidity: string;
  updated: string;
  label: string;
  sign: string;
  marketCap: string;
  volum24h: string;
  last7Days: number;
  categories: string;
  ofCoins: string;
  open: string;
  trustScore: string;
  volume24hNormalized: string;
  volume24h: string;
  visitsSimilarWeb: string;
  coins: string;
  date: string;
  url: string;
  high: string;
  low: string;
  close: string;
  marketcap: string;
  percent: string;
  isIncrease: boolean;
  wallet: string;
  last_update: string;
  approved_spender: string;
  allowance: string;
  txn_hash: string;
};

export type ProductItem = {
  image: string;
  name: string;
  author: string;
  label: string;
  price: string;
};

export type ListSelect = {
  value: string;
  label?: string;
  lang?: string;
};

export type MenuChildren = {
  icon?: ReactNode;
  title?: string;
  value?: string;
}[];
