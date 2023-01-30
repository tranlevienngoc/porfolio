import { Box, Flex } from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import TextBold from 'components/common/Text/TextBold';
import IconCheck from 'components/svg/IconCheck';
import { LIST_CURRENCY } from 'data/menu/menu';
import React, { ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface props {
  setContent?: (value: string) => void;
  setIcon?: (value: ReactNode) => void;
}

const CurrencyBox = ({
  setContent = () => ({}),
  setIcon = () => ({}),
}: props) => {
  const [selected, setSelected] = useState('USD');

  const handleSetItem = (it: {
    name: string;
    sign: string;
    icon: ReactNode;
  }) => {
    setSelected(it.sign);
    setContent(it.sign);
    setIcon(it.icon);
  };

  return (
    <Box
      w={{ base: '280px', xl: '317px' }}
      p={{ base: '0px', xl: '16px' }}
      borderRadius='4px'
    >
      {LIST_CURRENCY.map((item, index) => (
        <Box key={uuidv4()} mb={index % 2 == 0 ? '20px' : ''}>
          <TextBold txt={item.name} />
          <Box>
            {item.children.map((it, idx) => (
              <Flex
                key={idx}
                mt='16px'
                cursor='pointer'
                onClick={() => handleSetItem(it)}
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
};

export default CurrencyBox;
