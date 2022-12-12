import React from 'react';

import AccountHeader from '../Overview/ConnectedWallet/AccountHeader';
import TemplateText from '../../components/common/Text/TemplateText';

export default function History() {
  return (
    <AccountHeader>
      <TemplateText txt='history' />
    </AccountHeader>
  );
}
