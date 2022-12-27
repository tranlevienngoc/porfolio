import { Box, Flex } from '@chakra-ui/react';
import { useCallback, useState } from 'react';

import RightMenuConnect from './RightMenuConnect';
import RightMenuNotConnect from './RightMenuNotConnect';
import SearchInput from '../../common/Input/SearchInput';
import HamburgerIcon from '../../svg/HamburgerIcon';
import Logo from '../../svg/Logo';
import NoWalletChildren from '../../svg/NoWalletChildren';
import { Connected } from '../../../constants';
import useColorModeValueItem from '../../../hook/useColorModeValueItem/useColorModeValueItem';

interface Props {
  onShowSidebar: () => void;
  onShowLeftItem: (value: boolean) => void;
  showSidebarButton?: boolean;
}

const Header = ({
  showSidebarButton = true,
  onShowSidebar = () => ({}),
  onShowLeftItem = () => ({}),
}: Props) => {
  const [valueSearch, setValueSearch] = useState('');

  const { darkmodeColors } = useColorModeValueItem();
  const handleChangeInput = useCallback((value: string) => {
    setValueSearch(value);
  }, []);

  const handleClick = (value: boolean) => {
    onShowSidebar();
    onShowLeftItem(value);
  };

  return (
    <Flex
      p='16px'
      alignItems='center'
      flexWrap={{ base: 'wrap', lg: 'unset' }}
      className='header'
    >
      {showSidebarButton && (
        <Flex
          w='100%'
          justifyContent='space-between'
          mb={{ base: '24px', lg: '0px' }}
        >
          <Box w='auto' ml='-2px' onClick={() => handleClick(true)}>
            <HamburgerIcon />
          </Box>
          <Logo w={117} h={28} />
          <NoWalletChildren onClick={() => handleClick(false)} />
        </Flex>
      )}
      <SearchInput
        h='40px'
        w={{ base: '100%', lg: '80%', xl: '645px' }}
        value={valueSearch}
        backgroundColor={darkmodeColors.bg900}
        onChange={(value) => handleChangeInput(value)}
        placeholder='Search accounts, wallets, domains...'
      />

      <Flex
        ml='auto'
        alignItems='center'
        display={{ base: 'none', lg: 'flex' }}
        gap='12px'
        className='menu-right-header'
      >
        {Connected ? <RightMenuConnect /> : <RightMenuNotConnect />}
      </Flex>
    </Flex>
  );
};

export default Header;
