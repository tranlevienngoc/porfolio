import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import TemplateText from '../Text/TemplateText';
import { ListSelect } from '../../../constants/types';

interface props {
  onClose?: () => void;
  setValue?: (value: string) => void;
  setLang?: (value: string) => void;
  onChange?: (value: string) => void;
  LIST_SELECT: ListSelect[];
}

export default function SelectItem({
  onClose = () => ({}),
  onChange = () => ({}),

  LIST_SELECT,
}: props) {
  return (
    <Box w='153px'>
      {LIST_SELECT.map((item, index) => (
        <Box key={index}>
          <Box>
            <Flex
              cursor='pointer'
              mb={{ base: 'unset', xl: '7px' }}
              gap='8px'
              alignItems='center'
              borderRadius='4px'
              p='4px 8px'
              h='30px'
              onClick={() => {
                onClose();

                onChange(item.label || '');
              }}
            >
              <TemplateText fontSize='13px' txt={item.label || ''} />
            </Flex>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
