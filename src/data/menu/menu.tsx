import Average from 'components/svg/Average';
import Bitcoin from 'components/svg/Bitcoin';
import Fiat from 'components/svg/Fiat';

import Chain from '../../components/svg/Chain';

export const LIST_CHAIN = [
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
];

export const LIST_GAS = [
  {
    name: 'Fast ',

    value: '13 GWEI',
    icon: <Average />,
  },
  {
    name: 'Average',

    value: '11 GWEI',
    icon: <Average />,
  },
  {
    name: 'Slow',

    value: '9 GWEI',
    icon: <Average />,
  },
];

export const LIST_CURRENCY = [
  {
    name: 'POPULAR',
    children: [
      {
        name: 'Ether ',
        sign: 'ETH',
        icon: <Bitcoin />,
      },
      {
        name: 'Bitcoin',
        sign: 'BTC',
        icon: <Bitcoin />,
      },
      {
        name: 'US Dollar',
        sign: 'USD',
        icon: <Bitcoin />,
      },
    ],
  },
  {
    name: 'FIAT',
    children: [
      {
        name: 'Australian Dollar ',
        sign: 'AUD',
        icon: <Fiat />,
      },
      {
        name: 'Canaidian Dollar',
        sign: 'CAD',
        icon: <Fiat />,
      },
    ],
  },
];
