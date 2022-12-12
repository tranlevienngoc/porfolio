import { Paths as _Paths } from '../components/common/lib';

const Paths = new _Paths({
  basename: 'frontier',
});

Paths.routePaths = {
  ...Paths.routePaths,
  overview: '/overview',
  settings: '/settings',
  // assets: "/assets",
  // exchange: "/exchange",
  // earn: "/earn",
  // earnPool: "/earn/pool",
  // earnLend: "/earn/lend",
  // earnFarms: "/earn/farms",
  // earnStake: "/earn/stake",
  // exchangeSwap: "/exchange/swap",
  // exchangeBridge: "/exchange/bridge",
  // nft: "/nft",
  // activity: "/activity",
  // walletManagement: "/wallet-management",
  // collectionDetails: ids => `/nft/collection/${ids[0]}/details`,
  // nftDetails: ids => `/nft/${ids[0]}/details`,
  // tokens: token => `/overview/tokens/${token[0]}`,
  // farmOpportunityPoolDetails: ids => `/farm/${ids[0]}/pool/${ids[1]}/details`,
  // lendOpportunityDetails: ids => `/lend/opportunity/protocol/${ids[0]}/details`,
  // lendPositionDetails: ids => `/lend/positions/protocol/${ids[0]}/details`,
  // poolOpportunityDetails: ids => `/pool/opportunity/protocol/${ids[0]}/details`,
  // poolPositionDetails: ids => `/pool/positions/protocol/${ids[0]}/details`,
};

Paths.servicePaths = {
  ...Paths.servicePaths,
  // nfts: ids =>
  //   `/nft-collections?address=${ids[0]}&chain=${ids[1]}&currency=${ids[2]}`,
  // history: ids =>
  //   `/nft-history?nft-id=${ids[0]}&address=${ids[1]}&chain=${ids[2]}`,
  // receiveDetails: ids =>
  //   `/pool/liquidityQuote?tokenA=${ids[0]}&tokenB=${ids[1]}&poolProvider=${ids[2]}&from=${ids[3]}`,
};

export default Paths;
