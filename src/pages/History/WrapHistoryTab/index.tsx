import { Box } from '@chakra-ui/react';
import FilterBox from 'components/common/FilterBox';
import { LIST_OPTION_HISTORY } from 'data/history';
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
        optionFilters={LIST_OPTION_HISTORY}
        isShowButtonFilter={false}
      />
      <Box>{children}</Box>
    </AccountHeader>
  );
}
