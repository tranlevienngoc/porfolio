import { LIST_TAB_OVERVIEW } from 'data/overview';

import AccountHeader from './AccountHeader';
import ListTabOverview from './ListTabOverview/ListTabOverview';

const ConnectedWallet = () => {
  return (
    <AccountHeader>
      {LIST_TAB_OVERVIEW.map((item, index) => (
        <ListTabOverview
          title={item.label}
          icon={item.icon}
          children={item.children}
          key={index}
        />
      ))}
    </AccountHeader>
  );
};

export default ConnectedWallet;
