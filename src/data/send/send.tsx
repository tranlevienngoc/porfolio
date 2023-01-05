import Chain from '../../components/svg/Chain';
import Token from '../../components/svg/Token';

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
