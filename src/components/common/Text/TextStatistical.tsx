import { TextProps } from '@chakra-ui/react';

import TemplateText from './TemplateText';

interface Props extends TextProps {
  txt: string;
  isIncrease?: boolean;
}
const TextStatistical = ({
  txt,
  fontSize = 13,
  fontWeight = 400,
  isIncrease = true,
  ...props
}: Props) => {
  const sign = isIncrease ? '+' : '-';
  return (
    <TemplateText
      {...props}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={isIncrease ? 'green.200' : 'red.200'}
      txt={`${sign}${txt}`}
    />
  );
};

export default TextStatistical;
