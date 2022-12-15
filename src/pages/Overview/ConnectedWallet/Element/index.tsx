import { Box, Flex } from '@chakra-ui/react';
import { useMemo } from 'react';

import ReactTable from '../../../../components/common/ReactTable';
import TemplateText from '../../../../components/common/Text/TemplateText';
import TextStatistical from '../../../../components/common/Text/TextStatistical';
import Sign from '../../../../components/svg/Sign';
import Token from '../../../../components/svg/Token';
import { CellOfTable } from '../../../../constants/types';

const ElementContent = () => {
  const datas = useMemo(
    () =>
      Array.from({ length: 2 }).map(() => ({
        name: 'Bitcoin',
        sign: 'Ethereum',
        price: '$21,030.00',
        balance: '102.51 LTC',
        value: '$1,032.51',
        change: '2.84% ($100,5)',
      })),
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: 'Asset',
        accessor: 'Asset',
        Cell: ({
          cell: {
            row: { original },
          },
        }: CellOfTable) => (
          <>
            <Flex gap='10px' alignItems='center'>
              <Token />
              <Box>
                <TemplateText fontSize={14} txt={original.name} />
                <Flex gap='4px'>
                  <Sign />
                  <TemplateText
                    fontSize={14}
                    fontWeight={400}
                    txt={original.sign}
                  />
                </Flex>
              </Box>
            </Flex>
          </>
        ),
      },

      {
        Header: 'Balance',
        accessor: 'Balance',
        Cell: ({
          cell: {
            row: { original },
          },
        }: CellOfTable) => (
          <Flex alignItems='center'>
            <TemplateText txt={original.balance} fontSize={14} />
          </Flex>
        ),
      },
      {
        Header: 'Value',
        accessor: 'Value',
        Cell: ({
          cell: {
            row: { original, index },
          },
        }: CellOfTable) => (
          <Box
            display={{ base: 'block', md: 'flex' }}
            gap='4px'
            alignItems='center'
          >
            <TemplateText txt={original.value} fontSize={14} />
            <TextStatistical
              txt={original.change}
              isIncrease={index % 2 == 0}
            />
          </Box>
        ),
      },
    ],
    []
  );

  return (
    <Box>
      <Box display={{ base: 'none', md: 'unset' }}>
        <ReactTable data={datas} columns={columns} total={20} currentPage={1} />
      </Box>
      <Box display={{ base: 'unset', md: 'none' }}>
        <ReactTable
          data={datas}
          columns={columns}
          total={20}
          currentPage={1}
          hiddenItems={['Balance']}
        />
      </Box>
    </Box>
  );
};
export default ElementContent;
