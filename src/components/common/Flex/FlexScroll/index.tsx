import { Flex } from '@chakra-ui/react';

import { FlexItemProps } from '../../../../constants/interface';

export default function FlexScroll({ children, ...props }: FlexItemProps) {
  return (
    <Flex overflow='auto' alignItems='center' whiteSpace='nowrap' {...props}>
      {children}
    </Flex>
  );
}
