import TableApprovals from './TableApprovals';
import AccountHeader from '../Overview/ConnectedWallet/AccountHeader';

export default function Approvals() {
  return (
    <AccountHeader>
      <TableApprovals />
    </AccountHeader>
  );
}
