import { useCallback, useState } from 'react';

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPage = 1;

  const onChangePage = useCallback((page: number) => {
    if (page >= 1 && page <= totalPage) {
      setCurrentPage(page);
    } else {
      setCurrentPage(1);
    }
  }, []);

  const onNextPage = useCallback(() => {
    const page = currentPage + 1;
    setCurrentPage(page <= totalPage ? page : totalPage);
  }, [currentPage]);

  const onBackPage = useCallback(() => {
    const page = currentPage - 1;
    setCurrentPage(page >= 1 ? page : 1);
  }, [currentPage]);

  return {
    onChangePage,
    onNextPage,
    onBackPage,
    currentPage,
    totalPage,
  };
};
