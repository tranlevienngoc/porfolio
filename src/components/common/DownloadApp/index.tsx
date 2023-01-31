import { Box, Flex, FlexProps } from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import AppStore from 'components/svg/AppStore';
import CHPlay from 'components/svg/CHPlay';
import { ReactNode } from 'react';

interface Props extends FlexProps {
  children?: ReactNode;
}
const DownloadApp = (props: Props) => {
  return (
    <Flex {...props} w='100%' mb='10px'>
      <Box w='204px' textAlign='center'>
        <Flex
          w='204px'
          m='0 auto'
          p='8px 16px'
          cursor='pointer'
          borderRadius='8px'
          bg='#EFF0F2'
          border='1px solid #D4D4D6'
        >
          <TemplateText
            fontSize={16}
            fontWeight={500}
            color='#1E1E1E'
            txt='Download App'
          />
          <AppStore ml='auto' mr='5px' />
          <CHPlay />
        </Flex>
        <TemplateText
          mt='16px'
          fontSize={12}
          fontWeight={400}
          color='text.200'
          txt='Terms of Service - Privacy Policy'
        />
      </Box>
    </Flex>
  );
};

export default DownloadApp;
