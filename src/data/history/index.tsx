import TableHistory from '../../pages/History/Table';

export const LIST_OPTION_HISTORY = [
  {
    label: 'All Transactions',
    url: '/history',
    value: 'all transactions',
  },
  {
    label: 'Send',
    url: '/history/send',
    value: 'send',
  },

  {
    label: 'Received',
    url: '/history/received',
    value: 'string',
  },

  {
    label: 'Swap',
    url: '/history/swap',
    value: 'swap',
  },
  {
    label: 'Pool',
    url: '/history/pool',
    value: 'pool',
  },

  {
    label: 'Withdraw',
    url: '/history/withdraw',
    value: 'withdraw',
  },
];

export const LIST_TABLE = [
  {
    createAt: 'December 15, 2022',
    table: <TableHistory length={3} />,
  },
  {
    createAt: 'December 14, 2022',
    table: <TableHistory length={9} />,
  },
];
