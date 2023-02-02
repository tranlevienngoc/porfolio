import { Box } from '@chakra-ui/react';
import FilterBox from 'components/common/FilterBox';
import { HISTORY_OPTIONS } from 'data/history';
import AccountHeader from 'pages/Overview/ConnectedWallet/AccountHeader';
import React, { ReactNode, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface props {
  children?: ReactNode;
}

export default function WrapHistoryTab({ children }: props) {
  const router = useLocation();

  const [selected, setSelected] = useState(router.pathname);
  return (
    <AccountHeader>
      <FilterBox
        selected={selected}
        setSelected={setSelected}
        optionFilters={HISTORY_OPTIONS}
        isShowButtonFilter={false}
      />
      <Box>{children}</Box>
    </AccountHeader>
  );
}
