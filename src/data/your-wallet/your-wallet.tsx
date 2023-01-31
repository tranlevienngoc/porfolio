import BellIcon from 'components/svg/BellIcon';
import ClipBoard from 'components/svg/ClipBoard';
import CloudChange from 'components/svg/CloudChange';
import RemoveIcon from 'components/svg/RemoveIcon';
import Rename from 'components/svg/Rename';

export const LIST_TAB_YOUR_WALLET = [
  {
    label: 'My wallet',
    value: '05',
  },
  {
    label: 'Tracking wallet',
    value: '05',
  },
];

export const LIST_MORE_OPTION = [
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
