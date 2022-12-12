import { BoxProps, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface LinkItemProps extends BoxProps {
  href: string;
  children?: string;
}

const LinkItem = ({ children, href, ...props }: LinkItemProps) => {
  return (
    <Link to={href}>
      <Flex as='a' {...props} alignItems='center' h='36px'>
        {children}
      </Flex>
    </Link>
  );
};
export default LinkItem;
