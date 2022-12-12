import { Flex } from '@chakra-ui/react';

import { FlexItemProps } from '../../../../constants/interface';

export default function FlexCenter({ children, ...props }: FlexItemProps) {
  return (
    <Flex alignItems='center' justifyContent='center' {...props}>
      {children}
    </Flex>
  );
}
