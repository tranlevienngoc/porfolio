import Activity from '../components/svg/Activity';
import Bridge from '../components/svg/Bridge';
import Earn from '../components/svg/Earn';
import MoreActions from '../components/svg/MoreActions';
import Portfolio from '../components/svg/Portfolio';
import Send from '../components/svg/Send';
import Setting from '../components/svg/Setting';
import Swap from '../components/svg/Swap';
import YourWallet from '../components/svg/YourWallet';
import Approvals from '../pages/Approvals';
import History from '../pages/History';
import NFT from '../pages/NFT';
import Overview from '../pages/Overview';
import Settings from '../pages/Settings';

const routes = [
  {
    path: '/',
    component: Overview,
    title: 'Overview',
    icon: <Portfolio />,
    disable: false,
  },
  {
    path: '/activity',
    component: Settings,
    title: 'Activity',
    icon: <Activity />,
    disable: false,
  },
  {
    path: '/send',
    component: Settings,
    title: 'Send',
    icon: <Send />,
    disable: false,
  },
  {
    path: '/swap',
    component: Settings,
    title: 'Swap',
    icon: <Swap />,
    disable: true,
  },
  {
    path: '/bridge',
    component: Settings,
    title: 'Bridge',
    icon: <Bridge />,
    disable: true,
  },
  {
    path: '/earn',
    component: Settings,
    title: 'Earn',
    icon: <Earn />,
    disable: true,
  },
  {
    path: '/settings',
    component: Settings,
    title: 'Setting',
    icon: <Setting />,
    disable: false,
  },
  {
    path: '/nft',
    component: NFT,
    title: 'NFT',
    disable: false,
  },
  {
    path: '/history',
    component: History,
    title: 'History',
    disable: false,
  },
  {
    path: '/your-wallet',
    component: Approvals,
    title: 'Approvals',
    icon: <YourWallet />,
    disable: false,
  },
  {
    path: '/more-actions',
    component: Approvals,
    title: 'Approvals',
    icon: <MoreActions />,
    disable: false,
  },
];

export default routes;
