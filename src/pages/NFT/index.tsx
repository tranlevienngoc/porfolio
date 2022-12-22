import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import TemplateText from 'components/common/Text/TemplateText';
import { CARD_NFTS, PRODUCT_CARD } from 'data/nft';
import AccountHeader from 'pages/Overview/ConnectedWallet/AccountHeader';

import Pagination from './Pagination';
import ProductCard from './ProductCard';

export default function NFT() {
  return (
    <AccountHeader>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        justifyContent='space-between'
        alignItems='center'
        gap='16px'
        w='100%'
      >
        {CARD_NFTS.map((item, index) => (
          <Box key={index} p='16px 24px' borderRadius='12px' bg='#F6F7F9'>
            <Flex gap='8px'>
              {item.icon}
              <TemplateText fontWeight={400} fontSize='16px' txt={item.label} />
            </Flex>
            <TemplateText fontWeight={600} fontSize='24px' txt={item.value} />
          </Box>
        ))}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gridGap='16px'>
        {PRODUCT_CARD.map((item, index) => (
          <ProductCard key={index} Product={item} />
        ))}
      </SimpleGrid>
      <Pagination lenght={PRODUCT_CARD.length} />
    </AccountHeader>
  );
}
