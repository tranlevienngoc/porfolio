import { Box, Flex } from '@chakra-ui/react';
import ArrowLeft from 'components/common/ReactTable/icon/ArrowLeft';
import ArrowRight from 'components/common/ReactTable/icon/ArrowRight';
import TemplateText from 'components/common/Text/TemplateText';
import React, { useState } from 'react';

interface props {
  length: number;
}

export default function Pagination({ length }: props) {
  const currentPage = 1;
  const [pageNext, setPageNext] = useState(1);

  const onNextPage = () => {
    setPageNext(pageNext + 1);
  };

  const onBackPage = () => {
    setPageNext(pageNext - 1);
  };
  return (
    <Flex
      mt='20px'
      justifyContent='center'
      alignItems='center'
      w='100%'
      h={{ base: '100px', md: 'unset' }}
    >
      <Box onClick={onBackPage} as='button' disabled={currentPage === pageNext}>
        <ArrowLeft color={currentPage === pageNext ? 'gray' : '#1E1E1E'} />
      </Box>
      <TemplateText
        fontSize={14}
        fontWeight={400}
        txt={`Page ${pageNext} of ${length}`}
      />
      <Box as='button' disabled={pageNext === length} onClick={onNextPage}>
        <ArrowRight color={pageNext === length ? 'gray' : '#1E1E1E'} />
      </Box>
    </Flex>
  );
}
