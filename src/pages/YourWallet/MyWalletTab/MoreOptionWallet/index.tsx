import { Box, Divider, Flex } from '@chakra-ui/react';
import FlexCenter from 'components/common/Flex/FlexCenter';
import PopoverItem from 'components/common/PopoverItem/PopoverItem';
import TemplateText from 'components/common/Text/TemplateText';
import EditIcon from 'components/svg/EditIcon';
import EditIconBlue from 'components/svg/EditIconBlue';
import { LIST_MORE_OPTION } from 'data/your-wallet/your-wallet';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function MoreOptionWallet() {
  const [useDisclosure, setUseDisclosure] = useState(false);

  return (
    <Box>
      <PopoverItem
        callback={setUseDisclosure}
        buttonItem={
          useDisclosure ? (
            <FlexCenter borderRadius={400} w='32px' h='32px' cursor='pointer'>
              <EditIconBlue />
            </FlexCenter>
          ) : (
            <FlexCenter cursor='pointer' w='32px' h='32px'>
              <EditIcon />
            </FlexCenter>
          )
        }
        w='auto'
        p='8px 10px'
        border='none'
        borderRadius='16px'
        boxShadow='0px 2px 14px rgba(0, 0, 0, 0.16), 0px 16px 40px rgba(0, 0, 0, 0.16)'
        bg='white'
        mr='24px'
      >
        <Box w='197px'>
          {LIST_MORE_OPTION.map((item) => (
            <>
              {item.lable === 'Remove' && <Divider h='1px' m='5px 0' />}
              <Flex
                key={uuidv4()}
                cursor='pointer'
                p='8px'
                gap='16px'
                alignItems='center'
                _hover={{ background: '#7c7c7e40', borderRadius: '10px' }}
              >
                {item.icon}
                <TemplateText
                  fontSize='13px'
                  color={item.lable === 'Remove' ? '#E53A35' : '#1E1E1E'}
                  txt={item.lable}
                />
              </Flex>
            </>
          ))}
        </Box>
      </PopoverItem>
    </Box>
  );
}
export default MoreOptionWallet;
