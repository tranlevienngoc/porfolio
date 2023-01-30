import { Box, Flex } from '@chakra-ui/react';
import ButtonBase from 'components/common/Buttons/ButtonBase';
import ReactTable from 'components/common/ReactTable';
import TemplateText from 'components/common/Text/TemplateText';
import LinkIcon from 'components/svg/LinkIcon';
import LiteCoin from 'components/svg/LiteCoin';
import { CellOfTable } from 'constants/types';
import { AppContext } from 'Context/AppContext';
import { useContext, useMemo } from 'react';

const TableApprovals = () => {
  const { walletAddress } = useContext(AppContext);
  const datas = useMemo(
    () =>
      Array.from({ length: 5 }).map(() => ({
        name: 'TLC',
        sign: 'Lite Coin',
        last_update: '2022-10-26 16:61:11',
        approved_spender: 'Uniswap V3: Router 2',
        allowance: 'Unlimited',
        txn_hash: walletAddress,
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
            <Flex
              w={{ base: '140px', md: 'unset' }}
              gap='10px'
              alignItems='center'
            >
              <LiteCoin />
              <Box>
                <TemplateText fontSize={14} txt={original.name} />

                <TemplateText
                  fontSize={14}
                  fontWeight={400}
                  txt={original.sign}
                />
              </Box>
            </Flex>
          </>
        ),
      },
      {
        Header: 'Last Updated (UTC)',
        accessor: 'Last Updated (UTC)',
        Cell: ({
          cell: {
            row: { original },
          },
        }: CellOfTable) => (
          <Flex alignItems='center'>
            <TemplateText txt={original.last_update} fontSize={14} />
          </Flex>
        ),
      },
      {
        Header: 'Approved Spender',
        accessor: 'Approved Spender',
        Cell: ({
          cell: {
            row: { original },
          },
        }: CellOfTable) => (
          <Flex alignItems='center'>
            <TemplateText txt={original.approved_spender} fontSize={14} />
          </Flex>
        ),
      },
      {
        Header: 'Allowance',
        accessor: 'Allowance',

        Cell: ({
          cell: {
            row: { original },
          },
        }: CellOfTable) => (
          <Box
            display={{ base: 'block', md: 'flex' }}
            gap='4px'
            alignItems='center'
          >
            <TemplateText txt={original.allowance} fontSize={14} />
          </Box>
        ),
      },
      {
        Header: 'Txn Hash',
        accessor: 'Txn Hash',
        Cell: ({
          cell: {
            row: { original },
          },
        }: CellOfTable) => (
          <Box
            w='200px'
            display={{ base: 'block', md: 'flex' }}
            gap='4px'
            alignItems='center'
          >
            <TemplateText
              txt={original.txn_hash}
              overflow='hidden'
              textOverflow='ellipsis'
              whiteSpace='nowrap'
              w='100%'
              fontSize={14}
            />
          </Box>
        ),
      },
      {
        Header: '',
        accessor: 'button',
        Cell: () => (
          <Box
            display={{ base: 'block', md: 'flex' }}
            gap='4px'
            alignItems='center'
          >
            <ButtonBase
              content='Revoke'
              leftIcon={<LinkIcon />}
              bg='#EFF0F2'
              borderRadius={12}
            />
          </Box>
        ),
      },
    ],
    []
  );

  return (
    <Box>
      <Box display={{ base: 'none', lg: 'unset' }}>
        <ReactTable
          data={datas}
          columns={columns}
          total={20}
          currentPage={1}
          isShowPaging={false}
        />
      </Box>
      <Box display={{ base: 'none', md: 'unset', lg: 'none' }}>
        <ReactTable
          data={datas}
          columns={columns}
          total={20}
          hiddenItems={['Txn Hash']}
          currentPage={1}
          isShowPaging={false}
        />
      </Box>
      <Box display={{ base: 'unset', md: 'none' }}>
        <ReactTable
          data={datas}
          columns={columns}
          total={20}
          currentPage={1}
          hiddenItems={[
            'Last Updated (UTC)',
            'Approved Spender',
            'Allowance',
            'Txn Hash',
          ]}
          isShowPaging={false}
        />
      </Box>
    </Box>
  );
};
export default TableApprovals;
