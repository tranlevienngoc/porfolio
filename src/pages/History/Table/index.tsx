import { Box, Flex, Image } from '@chakra-ui/react';
import ReactTable from 'components/common/ReactTable';
import TemplateText from 'components/common/Text/TemplateText';
import TextStatistical from 'components/common/Text/TextStatistical';
import DeCrease from 'components/svg/DeCrease';
import Gas from 'components/svg/Gas';
import InCrease from 'components/svg/InCrease';
import { ReceiveTransaction, SendTransaction } from 'constants/app';
import { TYPE_FILTER_TRANSACTION } from 'constants/enum';
import { CellOfTable } from 'constants/types';
import { AppContext } from 'Context/AppContext';
import useColorModeValueItem from 'hook/useColorModeValueItem/useColorModeValueItem';
import { useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import truncateEthAddress from 'utils/truncateEthAddress';

interface props {
  length: number;
}

const TableHistory = ({ length }: props) => {
  const { walletAddress } = useContext(AppContext);
  const datas = useMemo(
    () =>
      Array.from({ length: length || 3 }).map(() => ({
        time: '7:07 AM',
        price: '-0,01 ETH',
        value: '10,000.00',
        wallet: walletAddress,
      })),
    []
  );

  const { darkmodeColors } = useColorModeValueItem();
  const location = useLocation();

  const getTransactionType = (index: number) => {
    if (TYPE_FILTER_TRANSACTION.AllTransaction === location.pathname) {
      return index % 2 == 0 ? SendTransaction : ReceiveTransaction;
    }
    if (TYPE_FILTER_TRANSACTION.Send === location.pathname) {
      return SendTransaction;
    }
    return ReceiveTransaction;
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({
          cell: {
            row: { original, index },
          },
        }: CellOfTable) => (
          <Box>
            <Flex gap='10px' alignItems='center'>
              {index % 2 == 0 ? <InCrease /> : <DeCrease />}
              <Box
                w={{ base: '70px', md: 'unset' }}
                display={{ base: 'flex', xl: 'block' }}
                gap='4px'
              >
                <TemplateText
                  fontSize={{ base: '13px', md: '16px' }}
                  txt={getTransactionType(index)[0]}
                />
                <TemplateText
                  color={darkmodeColors.text425}
                  fontSize={{ base: '13px', md: '16px' }}
                  fontWeight={400}
                  txt={original.time}
                />
              </Box>
            </Flex>
            <Box display={{ base: 'block', md: 'none' }} gap='4px'>
              <TextStatistical
                fontSize={{ base: '13px', md: '16px' }}
                fontWeight={500}
                txt={original.value}
                isIncrease={getTransactionType(index)[0] != 'Send'}
              />
              <TemplateText
                fontSize={{ base: '13px', md: '16px' }}
                color={darkmodeColors.text425}
                fontWeight={400}
                txt='DOGE'
              />
            </Box>
          </Box>
        ),
      },
      {
        Header: 'From or To',
        accessor: 'from or to',
        Cell: ({
          cell: {
            row: { original, index },
          },
        }: CellOfTable) => (
          <Box
            display={{ base: 'block', md: 'flex', xl: 'block' }}
            alignItems='center'
          >
            <TemplateText
              // txt={index % 2 == 0 ? 'To' : 'From'}
              txt={getTransactionType(index)[1]}
              w={{ base: 'unset', md: '70px', xl: 'unset' }}
              pr={{ base: 'unset', md: '10px', xl: 'unset' }}
              textAlign={{ base: 'unset', md: 'right', xl: 'unset' }}
              fontSize={{ base: '13px', md: '16px' }}
            />
            <Flex mt='4px' gap='8px' alignItems='center'>
              <Image src='/svg/Image-Wallet.svg' />
              <TemplateText
                color={darkmodeColors.text425}
                fontWeight={400}
                txt={truncateEthAddress(original.wallet)}
                fontSize={{ base: '13px', md: '16px' }}
              />
            </Flex>
          </Box>
        ),
      },
      {
        Header: 'Balance',
        accessor: 'Balance',
        Cell: ({
          cell: {
            row: { original, index },
          },
        }: CellOfTable) => (
          <Box display={{ base: 'flex', xl: 'block' }} gap='4px'>
            <TextStatistical
              fontSize={{ base: '13px', md: '16px' }}
              fontWeight={500}
              txt={original.value}
              isIncrease={getTransactionType(index)[0] != 'Send'}
            />
            <TemplateText
              fontSize={{ base: '13px', md: '16px' }}
              color={darkmodeColors.text425}
              fontWeight={400}
              txt='DOGE'
            />
          </Box>
        ),
      },
      {
        Header: 'Value',
        accessor: 'Value',
        Cell: ({
          cell: {
            row: { original },
          },
        }: CellOfTable) => (
          <Box>
            <Flex gap='5px' alignItems='center'>
              <Gas />
              <TemplateText
                fontSize={{ base: '13px', md: '16px' }}
                txt='Gas Fee'
              />
            </Flex>
            <TemplateText
              fontSize={{ base: '13px', md: '16px' }}
              color={darkmodeColors.text425}
              fontWeight={400}
              txt={original.price}
            />
          </Box>
        ),
      },
    ],
    []
  );

  return (
    <Box>
      <Box display={{ base: 'none', xl: 'unset' }}>
        <ReactTable
          isShowHeader={false}
          data={datas}
          columns={columns}
          total={20}
          currentPage={1}
          isBorder
          isShowPaging={length > 5}
        />
      </Box>
      <Box display={{ base: 'none', md: 'unset', xl: 'none' }}>
        <ReactTable
          isShowHeader={false}
          data={datas}
          columns={columns}
          total={20}
          currentPage={1}
          hiddenItems={['Value']}
          isBorder
          isShowPaging={length > 5}
        />
      </Box>
      <Box display={{ base: 'unset', md: 'none' }}>
        <ReactTable
          isShowHeader={false}
          data={datas}
          columns={columns}
          total={20}
          currentPage={1}
          hiddenItems={['Balance', 'Value']}
          isBorder
          isShowPaging={length > 5}
        />
      </Box>
    </Box>
  );
};
export default TableHistory;
