import { Box, BoxProps } from '@chakra-ui/react';
import BoxRound from 'components/common/BoxRound';
import Divider from 'components/common/Divider';
import TemplateText from 'components/common/Text/TemplateText';
import routes from 'config/routes';
import { AppContext } from 'Context/AppContext';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface props extends BoxProps {
  onClose?: () => void;
}

const SidebarContent = ({ onClose, ...props }: props) => {
  const location = useLocation();
  const { isConnect } = useContext(AppContext);
  const renderColor = (path: string, disable: boolean) => {
    if (disable) return '#BDBDBF';
    return location.pathname === path ? 'blue.100' : 'text.100';
  };
  const renderTitleMenu = (path: string) => {
    if (isConnect) {
      return path !== '/your-wallet';
    } else {
      return true;
    }
  };

  const newRoutes = routes.filter(
    (item) =>
      ![
        '/nft',
        '/history',
        '/approvals',
        '/history/send',
        '/history/received',
        '/history/swap',
        '/history/pool',
        '/history/withdraw',
      ].includes(item.path)
  );
  return (
    <Box {...props}>
      {newRoutes.map((item) => (
        <Link key={item.path} to={item.path}>
          {item.path === '/your-wallet' && <Divider h='1px' mt='20px' />}
          {renderTitleMenu(item.path) && (
            <BoxRound
              h='40px'
              mt='12px'
              display='flex'
              cursor='pointer'
              borderRadius={8}
              alignItems='center'
              _hover={{ background: 'bg.600' }}
              onClick={onClose}
              className={
                location.pathname === item.path
                  ? item.title.toLocaleLowerCase().replace(' ', '-')
                  : ''
              }
            >
              {item.icon}
              <TemplateText
                color={renderColor(item.path, item.disable)}
                txt={
                  item.title
                  //renderTitleMenu(item.title)
                }
                ml='12px'
              />
              {item.disable && (
                <BoxRound ml='auto' bg='#E2F4FD' p='4px 8px'>
                  <TemplateText
                    txt='Soon'
                    fontSize={12}
                    fontWeight={400}
                    color='#1E1E1E'
                  />
                </BoxRound>
              )}
            </BoxRound>
          )}
        </Link>
      ))}
    </Box>
  );
};

export default SidebarContent;
