import { Box, Flex } from '@chakra-ui/react';
import ArrowLeft from 'components/common/ReactTable/icon/ArrowLeft';
import ArrowRight from 'components/common/ReactTable/icon/ArrowRight';
import TemplateText from 'components/common/Text/TemplateText';
import { usePagination } from 'hook/pagination/usePagination';
import React from 'react';

interface props {
  length: number;
}

export default function Pagination({ length }: props) {
  const { currentPage, onBackPage, onNextPage, totalPage } = usePagination();
  return (
    <Flex
      mt='20px'
      justifyContent='center'
      alignItems='center'
      w='100%'
      h={{ base: '100px', md: 'unset' }}
    >
      <Box
        onClick={onBackPage}
        as='button'
        disabled={totalPage === currentPage}
      >
        <ArrowLeft color={totalPage === currentPage ? 'gray' : '#1E1E1E'} />
      </Box>
      <TemplateText
        fontSize={14}
        fontWeight={400}
        txt={`Page ${currentPage} of ${length}`}
      />
      <Box as='button' disabled={currentPage === length} onClick={onNextPage}>
        <ArrowRight color={currentPage === length ? 'gray' : '#1E1E1E'} />
      </Box>
    </Flex>
  );
}
