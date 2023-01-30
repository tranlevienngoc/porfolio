import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import TemplateText from '../Text/TemplateText';
import { SelectOption } from '../../../constants/types';

interface props {
  onClose?: () => void;
  setValue?: (value: string) => void;
  setLang?: (value: string) => void;
  onChange?: (value: string) => void;
  options: SelectOption[];
}

export default function SelectItem({
  onClose = () => ({}),
  onChange = () => ({}),
  options,
}: props) {
  const handleSelectOption = (value: string) => {
    onClose();

    onChange(value);
  };
  return (
    <Box w='153px'>
      {options.map((item) => (
        <Box key={uuidv4()}>
          <Box>
            <Flex
              cursor='pointer'
              mb={{ base: 'unset', xl: '7px' }}
              gap='8px'
              alignItems='center'
              borderRadius='4px'
              p='4px 8px'
              h='30px'
              onClick={() => handleSelectOption(item.label || '')}
            >
              <TemplateText fontSize='13px' txt={item.label || ''} />
            </Flex>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
