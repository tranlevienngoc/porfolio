import { Button, ButtonProps } from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import { ReactNode } from 'react';

interface Props extends ButtonProps {
  fsText?: number;
  fwText?: number;
  content: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  colorText?: string;
}
export default function ButtonBase({
  content = '',
  fsText,
  fwText,
  iconLeft,
  iconRight,
  colorText,
  ...props
}: Props) {
  return (
    <Button _hover={{}} _active={{}} {...props} alignItems='center'>
      {iconLeft}
      <TemplateText
        ml={iconLeft ? '8px' : 'unset'}
        mr={iconRight ? '8px' : 'unset'}
        txt={content}
        fontSize={fsText}
        fontWeight={fwText}
        color={colorText}
      />
      {iconRight}
    </Button>
  );
}
