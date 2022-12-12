import ConnectedWallet from './ConnectedWallet';
import NoConnectWallet from './NoConnectWallet';
import { Connected } from '../../constants';

const Overview = () => {
  return <>{Connected ? <ConnectedWallet /> : <NoConnectWallet />}</>;
};

export default Overview;
