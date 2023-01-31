import { Box } from '@chakra-ui/react';
import CurrencyBox from 'components/common/Header/CurrencyBox';
import FiatBox from 'components/common/Header/FiatBox';
import GasFeeBox from 'components/common/Header/GasFeeBox';
import AddressBook from 'components/svg/AddressBook';
import BuyWithFiat from 'components/svg/BuyWithFiat';
import Developer from 'components/svg/Developer';
import GasFee from 'components/svg/Gasfee';
import Helps from 'components/svg/Helps';
import LogOut from 'components/svg/LogOut';
import MoreActions from 'components/svg/MoreActions';
import Setting from 'components/svg/Setting';
import Supports from 'components/svg/Supports';
import ToggleBalance from 'components/svg/ToggleBalance';

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
  item: <Box>assad</Box>,
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

export const MENU_CONNECT = [
  {
    icon: <Helps />,
    title: 'Helps',
    value: 'helps',
    item: <Box>abc</Box>,
    children: [],
  },
  {
    icon: <GasFee />,
    title: 'Gas fee',
    value: 'gas-fee',
    item: <GasFeeBox />,

    children: [],
  },
  {
    icon: <BuyWithFiat />,
    title: 'Buy with fiat',
    item: <FiatBox />,
    value: 'buy-with-fiat',
    children: [],
  },
  {
    icon: <ToggleBalance />,
    title: 'Toggle balance',
    item: <GasFeeBox />,
    value: 'toggle-balance',
    children: [],
  },
  {
    icon: '',
    title: 'Currency',
    item: <CurrencyBox />,
    value: 'currency',
    children: [],
  },
  {
    icon: <MoreActions />,
    title: 'More Actions',
    value: 'more-actions',
    item: '',
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
  },
];

export const MENU_NOT_CONNECT = [MORE_ACTION];
