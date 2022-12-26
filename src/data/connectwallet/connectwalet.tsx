import MetaMaskIcon from 'components/svg/MetaMaskIcon';

export const TEXT_GUIDE = [
  { content: 'Connecting your wallet is like “logging in” to Web3.' },
  { content: 'Please select your wallet from the options to get started.' },
];

export const STEP_CONNECT_FINISH = [
  {
    finished: true,
  },
  {
    finished: true,
  },
  {
    finished: false,
  },
];

export const LIST_OPTION_WALLET = [
  {
    label: 'MetaMask',
    icon: <MetaMaskIcon />,
    disable: false,
  },
  {
    label: 'Trust Wallet',
    icon: <MetaMaskIcon />,
    disable: false,
  },
  {
    label: 'Coinbase Wallet',
    icon: <MetaMaskIcon />,
    disable: false,
  },
  {
    label: 'WalletConnect',
    icon: <MetaMaskIcon />,
    disable: false,
  },
  {
    label: 'Coins Plus',
    icon: <MetaMaskIcon />,
    disable: true,
  },
];
