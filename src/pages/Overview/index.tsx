import { Box } from '@chakra-ui/react';
import { AppContext } from 'Context/AppContext';
import { useContext } from 'react';

import ConnectedWallet from './ConnectedWallet';
import NoConnectWallet from './NoConnectWallet';

const Overview = () => {
  const { isConnect } = useContext(AppContext);
  return (
    <Box w='100%'>{isConnect ? <ConnectedWallet /> : <NoConnectWallet />}</Box>
  );
};

export default Overview;
