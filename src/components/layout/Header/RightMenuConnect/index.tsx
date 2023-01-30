import { Box } from '@chakra-ui/react';
import MoreActionBox from 'components/common/Header/MoreActionBox';
import { useMemo, useState } from 'react';

import CurrencyItem from './CurrencyItem';
import FiatItem from './FiatItem';
import GasFeeItem from './GasFeeItem';
import Helps from '../../../svg/Helps';
import ToggleBalanceBig from '../../../svg/ToggleBalanceBig';

const RightMenuConnect = () => {
  const [selected, setSeleted] = useState('');
  const menus = useMemo(
    () => [
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
          <Box p='8px' cursor='pointer'>
            <Helps h='24px' w='24px' />
          </Box>
        ),
        class: 'helps-item',
      },
      {
        item: (
          <Box p='8px' cursor='pointer'>
            <ToggleBalanceBig />
          </Box>
        ),
        class: 'toggle-balance-big',
      },
      {
        item: <MoreActionBox />,
        class: 'more-actions-item',
      },
    ],
    []
  );

  return (
    <>
      {menus.map((it) => (
        <Box
          key={it.class}
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
