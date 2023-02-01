import { Box, Flex } from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import PopoverItem from 'components/common/PopoverItem/PopoverItem';
import TagBox from 'components/common/TagBox';
import TemplateText from 'components/common/Text/TemplateText';
import ArrowRight from 'components/svg/ArrowRight';
import MoreIcon from 'components/svg/MoreIcon';
import { MORE_ACTION_NOT_CONNECT } from 'config/menuBottom';
import { KeyConnect } from 'constants/app';
import { TYPE_AUTH } from 'constants/enum';
import { AppContext } from 'Context/AppContext';
import useColorModeValueItem from 'hook/useColorModeValueItem/useColorModeValueItem';
import { useContext } from 'react';

const MoreActionBox = () => {
  const { darkmodeColors } = useColorModeValueItem();

  const { onSetConnectStatus } = useContext(AppContext);

  const { deactivate } = useWeb3React();

  const onLogout = () => {
    localStorage.removeItem(KeyConnect);
    onSetConnectStatus(false);
    deactivate();
  };

  const handleCheckOption = (value: string) => {
    if (value === TYPE_AUTH.Logout) {
      onLogout();
    }
  };
  return (
    <PopoverItem
      m='5px 5px 0px 0px'
      buttonItem={
        <Box>
          <TagBox
            gap='0px'
            p='6.5px'
            content=''
            borderRadius={8}
            iconLeft={<MoreIcon />}
            className='border-box'
            bd='none'
          />
        </Box>
      }
      boxShadow='0px 2px 14px rgba(0, 0, 0, 0.16), 0px 16px 40px rgba(0, 0, 0, 0.16)'
      w='auto'
      bg={darkmodeColors.bg200}
      border='none'
    >
      <Flex
        flexDirection='column'
        gap='16px'
        w='235px'
        p='16px'
        borderRadius='4px'
      >
        {MORE_ACTION_NOT_CONNECT.map((item) => (
          <Flex
            alignItems='center'
            key={item.value}
            mb='16px'
            cursor='pointer'
            onClick={() => handleCheckOption(item.value)}
          >
            {item.icon}
            <TemplateText ml='12px' txt={item.title} fontSize={16} mr='auto' />
            {item.children.length > 0 && <ArrowRight />}
          </Flex>
        ))}
      </Flex>
    </PopoverItem>
  );
};

export default MoreActionBox;
