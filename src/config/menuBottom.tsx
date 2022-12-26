import AddressBook from '../components/svg/AddressBook';
import BuyWithFiat from '../components/svg/BuyWithFiat';
import Developer from '../components/svg/Developer';
import GasFee from '../components/svg/Gasfee';
import Helps from '../components/svg/Helps';
import LogOut from '../components/svg/LogOut';
import MoreActions from '../components/svg/MoreActions';
import Setting from '../components/svg/Setting';
import Supports from '../components/svg/Supports';
import ToggleBalance from '../components/svg/ToggleBalance';
import YourWallet from '../components/svg/YourWallet';

export const MORE_ACTION_NOT_CONNECT = [
  {
    icon: <AddressBook size='24px' />,
    title: 'Address Book',
    value: 'address-book',
    children: [],
  },
  {
    icon: <Setting size='24px' />,
    title: 'Setting',
    value: 'setting',
    children: [],
  },
  {
    icon: <Developer size='24px' />,
    title: 'Developers',
    value: 'developer',
    children: [
      {
        icon: <Supports />,
        title: 'Contact & Support',
        value: 'supports',
        children: [],
      },
    ],
  },
  {
    icon: <Supports size='24px' />,
    title: 'Contact & Support',
    value: 'supports',
    children: [
      {
        icon: <Supports />,
        title: 'Contact & Support',
        value: 'supports',
        children: [],
      },
    ],
  },
  {
    icon: <LogOut size='24px' />,
    title: 'Log out',
    value: 'log-out',
    children: [],
  },
];

export const MORE_ACTION = {
  icon: <MoreActions />,
  title: 'More Actions',
  value: 'more-actions',
  children: [
    {
      icon: <LogOut />,
      title: 'Log out',
      value: 'log-out',
    },
    {
      icon: <AddressBook />,
      title: 'Address Book',
      value: 'address-book',
    },
    {
      icon: <Setting size='16px' />,
      title: 'Setting',
      value: 'setting',
    },
    {
      icon: <Developer />,
      title: 'Developer',
      value: 'developer',
    },
    {
      icon: <Supports />,
      title: 'Supports',
      value: 'supports',
    },
  ],
};
const MENU_CONNECT = [
  {
    icon: <Helps />,
    title: 'Helps',
    value: 'helps',
    children: [],
  },
  {
    icon: <GasFee />,
    title: 'Gas fee',
    value: 'gas-fee',
    children: [],
  },
  {
    icon: <BuyWithFiat />,
    title: 'Buy with fiat',
    value: 'buy-with-fiat',
    children: [],
  },
  {
    icon: <ToggleBalance />,
    title: 'Toggle balance',
    value: 'toggle-balance',
    children: [],
  },
  {
    icon: '',
    title: 'Currency',
    value: 'currency',
    children: [],
  },
  MORE_ACTION,
];

export const MENU_NOT_CONNECT = [
  {
    icon: <YourWallet />,
    title: 'Your Wallet',
    value: 'yourWallet',
    children: [],
  },
  MORE_ACTION,
];

export default MENU_CONNECT;
