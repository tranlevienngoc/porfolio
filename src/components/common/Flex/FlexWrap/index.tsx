import { Flex } from '@chakra-ui/react';
import { FlexItemProps } from 'constants/interface';

export default function FlexWrap({ children, ...props }: FlexItemProps) {
  return (
    <Flex flexWrap='wrap' {...props}>
      {children}
    </Flex>
  );
}
