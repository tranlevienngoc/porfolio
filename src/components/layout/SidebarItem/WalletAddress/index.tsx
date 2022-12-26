import { Box, BoxProps, Flex } from '@chakra-ui/react';
import PopoverItem from 'components/common/PopoverItem/PopoverItem';

import MyWallet from '../MyWallet';
import WrapWallet from '../WrapWallet';
import TemplateText from '../../../common/Text/TemplateText';
import TextBold from '../../../common/Text/TextBold';
import ArrowBottom from '../../../svg/ArrowBottom';
import CoinIcon from '../../../svg/CoinIcon';
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
  return (
    <Box>
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
                    fontSize={fsAddressWallet}
                    fontWeight={fwAddressWallet}
                    txt='Ox9a4e1...1eea'
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
