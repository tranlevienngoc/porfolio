import BellIcon from 'components/svg/BellIcon';
import ClipBoard from 'components/svg/ClipBoard';
import CloudChange from 'components/svg/CloudChange';
import RemoveIcon from 'components/svg/RemoveIcon';
import Rename from 'components/svg/Rename';

export const YOUR_WALLET_TAB = [
  {
    label: 'My wallet',
    value: '05',
  },
  {
    label: 'Tracking wallet',
    value: '05',
  },
];

export const MORE_OPTIONS = [
  {
    lable: 'Copy Address',
    icon: <ClipBoard />,
  },
  {
    lable: 'Rename Wallet',
    icon: <Rename />,
  },
  {
    lable: 'Subcribe',
    icon: <BellIcon />,
  },
  {
    lable: 'Move to my Wallet',
    icon: <CloudChange />,
  },

  {
    lable: 'Remove',
    icon: <RemoveIcon />,
  },
];
