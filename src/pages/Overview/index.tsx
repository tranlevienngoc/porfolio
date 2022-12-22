import { Box } from '@chakra-ui/react';
import { Connected } from 'constants/app';

import ConnectedWallet from './ConnectedWallet';
import NoConnectWallet from './NoConnectWallet';

const Overview = () => {
  return (
    <Box w='100%'>{Connected ? <ConnectedWallet /> : <NoConnectWallet />}</Box>
  );
};

export default Overview;
