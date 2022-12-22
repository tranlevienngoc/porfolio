import {
  Box,
  Collapse,
  Flex,
  Icon,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import ChevronDownIcon from 'components/svg/ChevronDownIcon';
import useColorModeValueItem from 'hook/useColorModeValueItem/useColorModeValueItem';
import React, { ReactNode } from 'react';

interface props {
  icon?: ReactNode;
  title: string;
  children?: ReactNode;
}

export default function ListTabOverview({ icon, title, children }: props) {
  const { darkmodeColors } = useColorModeValueItem();
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box mt={{ base: '14px', md: '30px' }}>
      <Stack
        h='auto'
        border={darkmodeColors.border400}
        borderRadius='16px'
        bg='#F9FAFC'
        p='24px'
        mt='unset'
      >
        <Flex
          h='auto'
          cursor='pointer'
          mt='-8px'
          align='center'
          justify='space-between'
          alignItems='center'
          _hover={{
            textDecoration: 'none',
          }}
          onClick={onToggle}
        >
          <Flex gap='6px'>
            {icon}
            <TemplateText fontWeight={600} fontSize={16} txt={title} />
          </Flex>
          <Icon
            h={6}
            w={6}
            transition='all .25s ease-in-out'
            transform={isOpen ? 'rotate(90deg)' : ''}
          >
            <ChevronDownIcon />
          </Icon>
        </Flex>

        <Collapse
          in={isOpen}
          animateOpacity
          style={{ marginTop: '0!important' }}
        >
          <Stack
            borderLeft={1}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            bg='#F9FAFC'
          >
            {children}
          </Stack>
        </Collapse>
      </Stack>
    </Box>
  );
}
