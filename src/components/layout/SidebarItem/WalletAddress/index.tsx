import { Box, BoxProps, Flex, useBreakpointValue } from '@chakra-ui/react';
import FlexCenter from 'components/common/Flex/FlexCenter';
import PopoverItem from 'components/common/PopoverItem/PopoverItem';
import TemplateText from 'components/common/Text/TemplateText';
import TextBold from 'components/common/Text/TextBold';
import ArrowBottom from 'components/svg/ArrowBottom';
import CoinIcon from 'components/svg/CoinIcon';
import Logo from 'components/svg/Logo';
import { AppContext } from 'Context/AppContext';
import { useContext } from 'react';
import truncateEthAddress from 'utils/truncateEthAddress';

import MyWallet from '../MyWallet';
import WrapWallet from '../WrapWallet';

interface Props extends BoxProps {
  fsAddressWallet?: number;
  fwAddressWallet?: number;
  fsMoney?: number;
  fwMoney?: number;
}
const WalletAddress = ({
  fsAddressWallet = 13,
  fwAddressWallet = 500,
  fsMoney = 16,
  fwMoney = 600,
  ...props
}: Props) => {
  const { addressWallet } = useContext(AppContext);
  const isLargerThan1024 = useBreakpointValue(
    {
      base: false,
      lg: true,
    },
    { ssr: false }
  );
  return (
    <Box>
      <FlexCenter mt='24px'>
        <Logo w={isLargerThan1024 ? 150 : 118} h={isLargerThan1024 ? 36 : 28} />
      </FlexCenter>
      <PopoverItem
        m='5px 5px 0px 0px'
        ml='20px'
        buttonItem={
          <WrapWallet {...props}>
            <Flex gap='8px' p='8px' bg='white' borderRadius={12}>
              <CoinIcon />
              <Flex alignItems='center' gap='10px'>
                <Box>
                  <TextBold
                    w='auto'
                    fontSize={fsAddressWallet}
                    fontWeight={fwAddressWallet}
                    txt={truncateEthAddress(addressWallet)}
                  />
                  <TemplateText
                    fontSize={fsMoney}
                    fontWeight={fwMoney}
                    txt='$3,424.95'
                  />
                </Box>
                <ArrowBottom />
              </Flex>
            </Flex>
          </WrapWallet>
        }
        boxShadow='0px 2px 14px rgba(0, 0, 0, 0.16), 0px 16px 40px rgba(0, 0, 0, 0.16)'
        w='auto'
        borderRadius={16}
        border='none'
      >
        <Box w='272px' zIndex={999} p='16px' bg='white' borderRadius={16}>
          <TextBold txt='MY WALLET' mb='21px' />
          <MyWallet bg='white' />
        </Box>
      </PopoverItem>
    </Box>
  );
};

export default WalletAddress;
