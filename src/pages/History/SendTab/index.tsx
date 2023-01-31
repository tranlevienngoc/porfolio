import { Box } from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import { LIST_TABLE } from 'data/history';
import { v4 as uuidv4 } from 'uuid';

import WrapHistoryTab from '../WrapHistoryTab';

export default function SendTab() {
  return (
    <WrapHistoryTab>
      {LIST_TABLE.map((item) => (
        <Box key={uuidv4()} mt='20px'>
          <TemplateText txt={item.createAt} />
          <Box mt='20px'>{item.table}</Box>
        </Box>
      ))}
    </WrapHistoryTab>
  );
}
