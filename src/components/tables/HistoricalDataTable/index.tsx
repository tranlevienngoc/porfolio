import { Flex } from '@chakra-ui/react';
import ReactTable from 'components/common/ReactTable';
import TemplateText from 'components/common/Text/TemplateText';
import { CellOfTable } from 'constants/types';
import { useMemo } from 'react';

const HistoricalDataTable = () => {
  const datas = useMemo(
    () =>
      Array.from({ length: 20 }).map(() => ({
        date: 'Jul 10 2022',
        open: '$21,591.08',
        high: '$21,127.22',
        low: '$20,727.12',
        close: '$20,860.45',
        volume: '$28,688,807,249',
        marketcap: '$398,688,807,249',
      })),
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
        Cell: ({
          cell: {
            row: { original },
          },
        }: CellOfTable) => (
          <Flex alignItems='center'>
            <TemplateText ml='8px' txt={original.date} />
          </Flex>
        ),
      },
      {
        Header: 'Open',
        accessor: 'open',
        Cell: ({
          cell: {
            row: { original },
          },
        }: CellOfTable) => <TemplateText txt={original.open} />,
      },
      {
        Header: 'High',
        accessor: 'high',
        Cell: ({
          cell: {
            row: { original },
          },
        }: CellOfTable) => <TemplateText txt={original.high} />,
      },
      {
        Header: 'Low',
        accessor: 'low',
        Cell: ({
          cell: {
            row: { original },
          },
        }: CellOfTable) => <TemplateText txt={original.low} />,
      },
      {
        Header: 'Close',
        accessor: 'close',
        Cell: ({
          cell: {
            row: { original },
          },
        }: CellOfTable) => <TemplateText txt={original.close} />,
      },
      {
        Header: 'Volume',
        accessor: 'volume',
        Cell: ({
          cell: {
            row: { original },
          },
        }: CellOfTable) => <TemplateText txt={original.volume} />,
      },
      {
        Header: 'Market Cap',
        accessor: 'marketcap',
        Cell: ({
          cell: {
            row: { original },
          },
        }: CellOfTable) => <TemplateText txt={original.marketcap} />,
      },
    ],
    []
  );

  return <ReactTable data={datas} columns={columns} />;
};

export default HistoricalDataTable;
