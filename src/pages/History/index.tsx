import { Box } from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import { LIST_TABLE } from 'data/history';
import React from 'react';

import WrapHistoryTab from './WrapHistoryTab';

export default function History() {
  return (
    <WrapHistoryTab>
      {LIST_TABLE.map((item, index) => (
        <Box key={index} mt='20px'>
          <TemplateText txt={item.createAt} />
          <Box mt='20px'>{item.table}</Box>
        </Box>
      ))}
    </WrapHistoryTab>
  );
}
