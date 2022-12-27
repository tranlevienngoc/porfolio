import { Box, Flex } from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import TextBold from 'components/common/Text/TextBold';
import IconCheck from 'components/svg/IconCheck';
import { LIST_CURRENCY } from 'data/menu/menu';
import React, { useState } from 'react';

export default function CurrencyMobile() {
  const [selected, setSelected] = useState('');
  return (
    <Box w='285px' borderRadius='4px'>
      {LIST_CURRENCY.map((item, index) => (
        <Box key={item.name} mb={index % 2 == 0 ? '20px' : ''}>
          <TextBold txt={item.name} />
          <Box>
            {item.children.map((it) => (
              <Flex
                key={it.name}
                mt='16px'
                cursor='pointer'
                onClick={() => setSelected(it.sign)}
              >
                {it.icon}

                <TextBold txt={it.sign} m='0 12px 0 8px' />
                <TemplateText
                  txt={it.name}
                  fontSize={16}
                  fontWeight={400}
                  mr='auto'
                />
                {selected === it.sign && <IconCheck />}
              </Flex>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
