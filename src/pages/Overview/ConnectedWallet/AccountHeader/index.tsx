import {
  Box,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

import ListTabs from '../ListTabs';
import TagBox from '../../../../components/common/TagBox';
import TemplateText from '../../../../components/common/Text/TemplateText';
import ArrowBottom from '../../../../components/svg/ArrowBottom';
import Ava from '../../../../components/svg/Ava';
import RefeshCircle from '../../../../components/svg/RefeshCircle';
import { addressWallet } from '../../../../constants';
import { FOLLOW, TAGS } from '../../../../data/overview';
import useColorModeValueItem from '../../../../hook/useColorModeValueItem/useColorModeValueItem';
import truncateEthAddress from '../../../../utils/truncateEthAddress';

interface Props {
  children?: ReactNode;
}

const AccountHeader = ({ children }: Props) => {
  const { darkmodeColors } = useColorModeValueItem();
  return (
    <Box p='24px'>
      <Flex>
        <Ava />
        <Box ml='16px'>
          <Popover>
            <PopoverTrigger>
              <Box>
                <Flex
                  w='100px'
                  h='20px'
                  ml='4px'
                  cursor='pointer'
                  borderRadius={400}
                >
                  <TemplateText
                    mr='3.5px'
                    txt={truncateEthAddress(addressWallet)}
                    fontSize={11}
                  />
                  <ArrowBottom />
                </Flex>
              </Box>
            </PopoverTrigger>
            <Portal>
              <PopoverContent zIndex={999} top='0px' w='auto' outline='none'>
                <TemplateText txt='adadsda' />
              </PopoverContent>
            </Portal>
          </Popover>
          <Flex mt='8px' alignItems='center' gap='16px'>
            <TemplateText fontSize='24px' fontWeight={600} txt='$ 3,424.95' />
            <RefeshCircle />
          </Flex>
          <TemplateText
            mt='8px'
            txt='-0,22% ($7,57)'
            color='#E53A35'
            fontSize='16px'
          />
        </Box>
      </Flex>
      <Flex gap='24px' mt='16px'>
        {FOLLOW.map((item, index) => (
          <Flex gap='8px' key={index}>
            {item.icon}
            <TemplateText fontWeight={400} fontSize='16px' txt={item.value} />
            <TemplateText fontWeight={400} fontSize='16px' txt={item.label} />
          </Flex>
        ))}
      </Flex>
      <Flex gap='8px' mt='16px'>
        {TAGS.map((item, index) => (
          <TagBox
            w='139px'
            h='40px'
            key={index}
            borderRadius='8px'
            bd='1px solid #D4D4D6'
            content={item.label}
            iconLeft={item.icon}
          />
        ))}
      </Flex>
      <Box mt='40px'>
        <ListTabs />
      </Box>
      <Box
        mt={{ base: '-20px', md: 'unset' }}
        bg={darkmodeColors.bgColorRowOdd}
      >
        <Box p={{ base: '16px', xl: 'unset' }}>{children}</Box>
      </Box>
    </Box>
  );
};
export default AccountHeader;
