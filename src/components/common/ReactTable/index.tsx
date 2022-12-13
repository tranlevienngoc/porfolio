/* eslint-disable @typescript-eslint/no-explicit-any */
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import {
  Box,
  chakra,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { usePagination, useSortBy, useTable } from 'react-table';

import ArrowLeft from './icon/ArrowLeft';
import ArrowRight from './icon/ArrowRight';
import TemplateText from '../Text/TemplateText';
import { fontFamily } from '../../../constants';
import useLightMode from '../../../helpers/lightMode/isLightMode';
import useColorModeValueItem from '../../../hook/useColorModeValueItem/useColorModeValueItem';

interface Props {
  columns?: any[];
  data?: any[];
  isShowBottomTable?: boolean;
  isRedirect?: boolean;
  url?: string;
  h?: string;
  padding?: string;
  setLimit?: (value: number) => void;
  setPage?: (value: number) => void;
  name?: string;
  setValue?: (value: string) => void;
  total?: number;
  currentPage?: number;
  isShowPaging?: boolean;
  hiddenItems?: string[];

  isTableMarkets?: boolean;
  isTopGainersLosersTable?: boolean;
}
export default function ReactTable({
  columns = [],
  data = [],
  isRedirect = false,
  // url = '',
  h,
  padding,
  setLimit = () => ({}),
  setPage = () => ({}),
  name = '',
  setValue = () => ({}),
  currentPage = 1,
  // total = 0,
  isShowPaging = true,
  hiddenItems = [],

  isTableMarkets = false,
  isTopGainersLosersTable = false,
}: Props) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, hiddenColumns: hiddenItems },
    },
    useSortBy,
    usePagination
  );
  useEffect(() => {
    setLimit(pageSize);
    setPage(pageIndex + 1);
  }, [pageIndex, pageSize, setLimit, setPage]);
  const { isLightMode } = useLightMode();

  const [pageNext, setPageNext] = useState(1);

  const onNextPage = () => {
    setPageNext(pageNext + 1);
  };

  const onBackPage = () => {
    setPageNext(pageNext - 1);
  };

  const showTriangleIcon = (column: any) => {
    return column.isSortedDesc ? (
      <TriangleDownIcon w='10px' h='10px' aria-label='sorted descending' />
    ) : (
      <TriangleUpIcon w='10px' h='10px' aria-label='sorted ascending' />
    );
  };
  const paddingLeft = (valueA: any, valueB: any) => {
    if (isLightMode) {
      return valueA.includes(valueB)
        ? isTopGainersLosersTable
          ? '25px'
          : '9px'
        : '0px';
    }
    return 'unset';
  };
  const { darkmodeColors } = useColorModeValueItem();
  const handleClickRowTable = (value: string) => {
    if (name === 'fundraising') setValue(value);
  };

  return (
    <Box overflowX='auto'>
      <TableContainer>
        <Table {...getTableProps()} variant='unstyled'>
          <Thead>
            {headerGroups.map((headerGroup: any, index: number) => (
              <Tr
                h={h}
                key={index}
                {...headerGroup.getHeaderGroupProps()}
                bg={darkmodeColors.bg950}
                borderBottom={darkmodeColors.border450}
              >
                {headerGroup.headers.map((column: any, i: number) => {
                  return (
                    <Th
                      key={i}
                      padding='16px 10px'
                      isNumeric={column.isNumeric}
                      textTransform='unset'
                      fontSize='16px'
                      className='table-th'
                      background='inherit'
                      {...column.getHeaderProps()}
                      title=''
                    >
                      <Flex alignItems='center' justifyContent='start'>
                        <TemplateText
                          fontFamily={`${fontFamily}`}
                          txt={column.render('Header')}
                          fs={13}
                          fw={500}
                          mr={column.render('Header') === '#' ? '10px' : '0px'}
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          pl={paddingLeft(
                            [
                              'header_h1',
                              'header_h24',
                              'header_d',
                              'header_icon',
                            ],
                            column.getHeaderProps(column.getSortByToggleProps())
                              .key
                          )}
                          ml={{
                            base: 'unset',
                            md:
                              isTableMarkets &&
                              ['header_name', 'header_label'].includes(
                                column.getHeaderProps(
                                  column.getSortByToggleProps()
                                ).key
                              )
                                ? '-20px'
                                : '0px',
                          }}
                          color={darkmodeColors.text125}
                        />

                        <chakra.span color={darkmodeColors.text100} pl='1.5'>
                          {column.isSorted ? showTriangleIcon(column) : null}
                        </chakra.span>
                      </Flex>
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody zIndex={0} {...getTableBodyProps()}>
            {rows.map((row: any, index: number) => {
              prepareRow(row);

              return (
                <Tr
                  key={index}
                  {...row.getRowProps()}
                  h={h}
                  onClick={() => {
                    if (isRedirect) handleClickRowTable(row.original);
                  }}
                  borderBottom={darkmodeColors.border450}
                >
                  {row.cells.map((cell: any, i: number) => {
                    return (
                      <Td
                        key={i}
                        justifyContent='center'
                        padding={padding || '17px 10px'}
                        {...cell.getCellProps()}
                        cursor={isRedirect ? 'pointer' : 'unset'}
                        background='inherit'
                      >
                        {cell.render('Cell')}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      {isShowPaging && (
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
            disabled={currentPage === pageNext}
          >
            <ArrowLeft color={currentPage === pageNext ? 'gray' : '#1E1E1E'} />
          </Box>
          <TemplateText
            fontSize={14}
            fontWeight={400}
            txt={`Page ${pageNext} of ${data.length}`}
          />
          <Box
            as='button'
            disabled={pageNext === data.length}
            onClick={onNextPage}
          >
            <ArrowRight color={pageNext === data.length ? 'gray' : '#1E1E1E'} />
          </Box>
        </Flex>
      )}
    </Box>
  );
}
