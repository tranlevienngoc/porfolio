import { Text, TextProps } from '@chakra-ui/react';
import useColorModeValueItem from 'hook/useColorModeValueItem/useColorModeValueItem';

interface Props extends TextProps {
  txt: string;
}
const TemplateText = ({
  txt,
  fontSize = 14,
  fontWeight = 500,
  color = 'black',
  ...props
}: Props) => {
  const { darkmodeColors } = useColorModeValueItem();

  return (
    <Text
      {...props}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color || darkmodeColors.text100}
      dangerouslySetInnerHTML={{ __html: txt }}
    />
  );
};

export default TemplateText;
