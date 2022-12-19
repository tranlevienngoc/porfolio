import Chain from '../../components/svg/Chain';
import Token from '../../components/svg/Token';
import { addressWallet } from '../../constants';

export const LIST_COIN = [
  {
    name: 'Select network',
    children: [
      {
        name: 'Ethereum ',

        value: '1',
        icon: <Chain isSendPage={true} />,
      },
      {
        name: 'Aurora',

        value: '1',
        icon: <Chain isSendPage={true} />,
      },
    ],
  },
  {
    name: 'Select token',
    children: [
      {
        name: 'Bitcoin',
        label: 'USD',
        value: '19137.45',
        icon: <Token isSendPage={true} />,
      },

      {
        name: 'The Graph',
        label: 'GRT',
        value: '1000000',
        icon: <Token isSendPage={true} />,
      },
    ],
  },
];

export const LIST_WALLET = [
  {
    name: 'Trust Wallet',
    addresswallet: addressWallet,
    value: '$3,429.65',
    img: './svg/Image-Wallet.svg',
  },
  {
    name: 'CoinBase Wallet',
    addresswallet: addressWallet,
    value: '$3,429.65',
    img: './svg/Image-Wallet.svg',
  },
  {
    name: 'Trust Wallet',
    addresswallet: addressWallet,
    value: '$3,429.65',
    img: './svg/Image-Wallet.svg',
  },
  {
    name: 'Metamask',
    addresswallet: addressWallet,
    value: '$3,429.65',
    img: './svg/Image-Wallet.svg',
  },
];
