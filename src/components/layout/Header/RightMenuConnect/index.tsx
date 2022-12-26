import { Box } from '@chakra-ui/react';
import MoreActionBox from 'components/common/Header/MoreActionBox';
import { useState } from 'react';

import CurrencyItem from './CurrencyItem';
import FiatItem from './FiatItem';
import GasFeeItem from './GasFeeItem';
import Helps from '../../../svg/Helps';
import ToggleBalanceBig from '../../../svg/ToggleBalanceBig';

const RightMenuConnect = () => {
  const [selected, setSeleted] = useState('');
  const menus = [
    {
      item: <GasFeeItem />,
      class: 'gas-fee-item',
    },
    {
      item: <CurrencyItem />,
      class: 'currency-item',
    },
    {
      item: <FiatItem />,
      class: 'fiat-item',
    },
    {
      item: (
        <Box p='8px'>
          <Helps h='24px' w='24px' />
        </Box>
      ),
      class: 'helps-item',
    },
    {
      item: (
        <Box p='8px'>
          <ToggleBalanceBig />
        </Box>
      ),
      class: 'toggle-balance-big',
    },
    {
      item: <MoreActionBox />,
      class: 'more-actions-item',
    },
  ];
  return (
    <>
      {menus.map((it) => (
        <Box
          onClick={() => setSeleted(it.class)}
          className={selected === it.class ? it.class : ''}
        >
          {it.item}
        </Box>
      ))}
    </>
  );
};

export default RightMenuConnect;
