import { Box, Flex } from '@chakra-ui/react';
import Divider from 'components/common/Divider';
import FlexCenter from 'components/common/Flex/FlexCenter';
import TemplateText from 'components/common/Text/TemplateText';
import TextBold from 'components/common/Text/TextBold';
import ArrowBottomBold from 'components/svg/ArrowBottomBold';
import Chain from 'components/svg/Chain';
import DoubleCircle from 'components/svg/DoubleCircle';
import Mercuryo from 'components/svg/Mercuryo';
import Moonpay from 'components/svg/Moonpay';
import Ramp from 'components/svg/Ramp';
import Visa from 'components/svg/Visa';

const FiatBox = () => {
  const options = [
    {
      value: 'moonpay',
      label: 'Moonpay',
      icon: <Moonpay />,
    },
    {
      value: 'ramp',
      label: 'Ramp',
      icon: <Ramp />,
    },
    {
      value: 'mercuryo',
      label: 'Mercuryo',
      icon: <Mercuryo />,
    },
  ];
  return (
    <Flex textAlign='center' flexDirection='column' gap='16px'>
      <TextBold mt='5px' txt='Buy Crypto With Fiat' fontSize={18} />
      <Flex alignItems='center' bg='bg.600' p='16px' borderRadius={16}>
        <Chain />
        <Box ml='16px' mr='auto' textAlign='start'>
          <TemplateText color='text.200' txt='Network' />
          <TextBold txt='Ethereum' />
        </Box>
        <ArrowBottomBold />
      </Flex>

      <TextBold txt='Choose one of the available options' fontSize={18} />
      {options.map((item) => (
        <Flex borderRadius={16} gap='16px' p='16px' border='1px solid #9B9B9E'>
          {item.icon}
          <TextBold txt={item.label} />
        </Flex>
      ))}
      <Divider />
      <FlexCenter gap='16px'>
        <TextBold txt='Pay with' />
        <DoubleCircle />
        <Visa />
      </FlexCenter>
    </Flex>
  );
};

export default FiatBox;
