import { LIST_TAB_OVERVIEW } from 'data/overview';
import { v4 as uuidv4 } from 'uuid';

import AccountHeader from './AccountHeader';
import ListTabOverview from './ListTabOverview/ListTabOverview';

const ConnectedWallet = () => {
  return (
    <AccountHeader>
      {LIST_TAB_OVERVIEW.map((item) => (
        <ListTabOverview
          title={item.label}
          icon={item.icon}
          children={item.children}
          key={uuidv4()}
        />
      ))}
    </AccountHeader>
  );
};

export default ConnectedWallet;
