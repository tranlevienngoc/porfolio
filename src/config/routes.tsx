import Activity from '../components/svg/Activity';
import Portfolio from '../components/svg/Portfolio';
import Send from '../components/svg/Send';
import Setting from '../components/svg/Setting';
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
    path: '/approvals',
    component: Approvals,
    title: 'Approvals',
    disable: false,
  },
  // {
  //   path: Paths.absolute('overview'),
  //   component: Overview,
  //   title: 'overview',
  // },
  // {
  //   path: Paths.absolute("walletManagement"),
  //   component: WalletManagement,
  //   title: translate("sidebar.walletManagment"),
  //   merge: true,
  // },
  // {
  //   path: Paths.absolute("nft"),
  //   component: NFT,
  //   title: translate("sidebar.nft"),
  // },
  // {
  //   path: Paths.absolute("assets"),
  //   component: Asset,
  //   title: translate("sidebar.assets"),
  // },
  // {
  //   path: Paths.absolute("collectionDetails", [":slug"]),
  //   component: CollectionDetails,
  //   title: translate("sidebar.nft"),
  //   ifContext: "NFT",
  // },
  // {
  //   path: Paths.absolute("activity"),
  //   component: Activity,
  //   title: translate("sidebar.activity"),
  //   subtitle: translate("sidebar.activitySubTitle"),
  //   ifContext: "Activity",
  // },
  // {
  //   path: Paths.absolute("nftDetails", [":id"]),
  //   component: NFTDetails,
  //   title: translate("sidebar.nft"),
  //   ifContext: "NFT",
  // },
  // {
  //   path: Paths.absolute("tokens", [":token"]),
  //   component: TokensDetails,
  //   title: translate("sidebar.tokens"),
  //   ifContext: "Token",
  // },
  // {
  //   path: Paths.absolute("earnPool"),
  //   component: EarnPool,
  //   title: translate("sidebar.liquidityPools"),
  //   merge: true,
  // },
  // {
  //   path: Paths.absolute("poolOpportunityDetails", [":provider"]),
  //   component: Opportunities,
  //   title: translate("sidebar.liquidityPools"),
  //   merge: true,
  // },
  // {
  //   path: Paths.absolute("poolPositionDetails", [":provider"]),
  //   component: DepositedPools,
  //   title: translate("sidebar.liquidityPools"),
  //   merge: true,
  // },
  // {
  //   path: Paths.absolute("earnLend"),
  //   component: EarnLend,
  //   title: translate("sidebar.lending"),
  //   merge: true,
  // },
  // {
  //   path: Paths.absolute("lendOpportunityDetails", [":protocol"]),
  //   component: EarnLendOpportunities,
  //   title: translate("sidebar.lending"),
  //   parent:Paths.absolute("earnLend"),
  //   merge: true,
  // },
  // {
  //   path: Paths.absolute("lendPositionDetails", [":protocol"]),
  //   component: LentPositions,
  //   title: translate("sidebar.lending"),
  //   parent:Paths.absolute("earnLend"),
  //   merge: true,
  // },
  // {
  //   path: Paths.absolute("farmOpportunityPoolDetails", [":type", ":slug"]),
  //   component: EarnFarms,
  //   title: translate("sidebar.farms"),
  //   merge: true,
  // },
  // {
  //   path: Paths.absolute("earnFarms"),
  //   component: EarnFarms,
  //   title: translate("sidebar.farms"),
  //   merge: true,
  // },
  // {
  //   path: Paths.absolute("earnStake"),
  //   component: EarnStake,
  //   title: translate("sidebar.stake"),
  //   merge: true,
  // },
  // {
  //   path: Paths.absolute("exchangeSwap"),
  //   component: ExchangeSwap,
  //   title: translate("sidebar.swap"),
  //   merge: true,
  // },
  // {
  //   path: Paths.absolute("exchangeBridge"),
  //   component: ExchangeBridge,
  //   title: translate("sidebar.bridge"),
  //   merge: true,
  // },
];

export default routes;
