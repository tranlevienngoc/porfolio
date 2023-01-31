import Chain from 'components/svg/Chain';
import Chart from 'components/svg/Chart';
import Element from 'components/svg/Element';
import FollowerIcon from 'components/svg/FollowerIcon';
import ProfileStick from 'components/svg/ProfileStick';
import ReceivedIcon from 'components/svg/ReceivedIcon';
import SendIcon from 'components/svg/SendIcon';
import ShareIcon from 'components/svg/ShareIcon';
import WalletCheck from 'components/svg/WalletCheck';
import { ListItem } from 'constants/interface';
import ElementContent from 'pages/Overview/ConnectedWallet/Element';
import NetWorkBalance from 'pages/Overview/ConnectedWallet/NetWorkBalance';
import Wallet from 'pages/Overview/ConnectedWallet/Wallet';

export const FOLLOW = [
  {
    name: 'following',
    label: 'Following',
    value: '133',
    icon: <ProfileStick />,
  },
  {
    name: 'follower',
    label: 'Followers',
    value: '131',
    icon: <FollowerIcon />,
  },
];

export const TAGS = [
  {
    name: 'follow',
    label: 'Follow',
    icon: <ProfileStick />,
  },
  {
    name: 'send',
    label: 'Send',
    icon: <SendIcon />,
  },
  {
    name: 'received',
    label: 'Received',
    icon: <ReceivedIcon />,
  },
  {
    name: 'share',
    label: 'Share',
    icon: <ShareIcon />,
  },
];

export const LIST_TAB = [
  {
    label: 'OverView',
    url: '/',
    value: '',
  },
  {
    label: 'NFT',
    url: '/nft',
    value: 'nft',
  },
  {
    label: 'History',
    url: '/history',
    value: 'history',
  },
  {
    label: 'Approvals',
    url: '/approvals',
    value: 'approvals',
  },
];

export const LIST_TAB_OVERVIEW: Array<ListItem> = [
  {
    label: 'Network Balance',
    icon: <Chart />,
    children: <NetWorkBalance />,
  },
  {
    label: 'Wallet',
    icon: <WalletCheck />,
    children: <Wallet />,
  },
  {
    label: 'Element',
    icon: <Element />,
    children: <ElementContent />,
  },
];

export const LIST_NETWORK_BALANCE = [
  {
    label: 'Ethereum',
    value: '$1,436.85',
    icon: <Chain />,
  },
  {
    label: 'Cronos',
    value: '$1,436.85',
    icon: <Chain />,
  },
  {
    label: 'Optimism',
    value: '$1,436.85',
    icon: <Chain />,
  },
  {
    label: 'Avalanche',
    value: '$1,436.85',
    icon: <Chain />,
  },
  {
    label: 'Binance',
    value: '$1,436.85',
    icon: <Chain />,
  },
];
