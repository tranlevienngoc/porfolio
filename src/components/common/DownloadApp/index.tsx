import { Box, Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

import TemplateText from '../Text/TemplateText';
import AppStore from '../../svg/AppStore';
import CHPlay from '../../svg/CHPlay';

interface Props extends FlexProps {
  children?: ReactNode;
}
const DownloadApp = ({ ...props }: Props) => {
  return (
    <Flex {...props} w='100%' bottom='16px' position='absolute'>
      <Box w='204px' textAlign='center'>
        <Flex
          w='204px'
          m='0 auto'
          p='8px 16px'
          cursor='pointer'
          borderRadius='8px'
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
          color='#505052'
          txt='Terms of Service - Privacy Policy'
        />
      </Box>
    </Flex>
  );
};

export default DownloadApp;
