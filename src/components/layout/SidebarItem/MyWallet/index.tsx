import { Box, BoxProps, Flex } from '@chakra-ui/react';

import Divider from '../../../common/Divider';
import TemplateText from '../../../common/Text/TemplateText';
import TextBold from '../../../common/Text/TextBold';
import CoinIcon from '../../../svg/CoinIcon';
import ConnectWallet from '../../../svg/ConnectWallet';
import NoWalletChildren from '../../../svg/NoWalletChildren';
import Tick from '../../../svg/Tick';

const MyWallet = ({ ...props }: BoxProps) => {
  const menu = [
    {
      icon: <ConnectWallet h={24} w={24} color='#343436' />,
      name: 'connectAnotherWallet',
      label: 'Connect another wallet',
    },
    {
      icon: <NoWalletChildren />,
      name: 'manageWallets',
      label: 'Manage Wallets',
    },
  ];
  return (
    <Box {...props}>
      <Flex
        p='8px 0'
        gap='8px'
        bg='white'
        borderRadius={12}
        alignItems='center'
      >
        <CoinIcon />
        <Box mr='auto'>
          <TextBold txt='Ox9a4e1...1eea' />
          <TemplateText
            fontSize={13}
            txt='$3,413 - Metamask'
            color='text.200'
          />
        </Box>
        <Tick />
      </Flex>
      <Divider m='15px 0' />
      <Box>
        {menu.map((item) => (
          <Flex mt='16px' key={item.name} alignItems='center'>
            <Box w='30px'>{item.icon}</Box>
            <TextBold fontWeight={500} txt={item.label} />
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default MyWallet;
