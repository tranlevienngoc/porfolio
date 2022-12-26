import { TextProps } from '@chakra-ui/react';

import TemplateText from './TemplateText';

interface Props extends TextProps {
  txt: string;
  isIncrease?: boolean;
}
const TextBold = ({
  txt,
  fontSize = 16,
  fontWeight = 600,
  ...props
}: Props) => {
  return (
    <TemplateText
      {...props}
      fontSize={fontSize}
      fontWeight={fontWeight}
      txt={txt}
    />
  );
};

export default TextBold;
