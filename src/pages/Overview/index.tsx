import ConnectedWallet from './ConnectedWallet';
import NoConnectWallet from './NoConnectWallet';
import { Connected } from '../../constants';
import { Box } from '@chakra-ui/react';

const Overview = () => {
  return (
    <Box w='100%'>{Connected ? <ConnectedWallet /> : <NoConnectWallet />}</Box>
  );
};

export default Overview;
