import { useState } from "react";

import Pagination from "react-js-pagination";

export default function PaginationComponent({
  selectPage,
  pageNumbers,
  totalItemsCount,
}) {
  const [page, setPage] = useState(1);
  const changePage = (selected) => {
    selectPage(selected);
    setPage(selected);
  };
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={totalItemsCount}
      pageRangeDisplayed={3}
      onChange={changePage}
      activeClass="pagination-active"
      innerClass="pagination-button"
      hideFirstLastPages
      prevPageText="«"
      nextPageText="»"
    />
  );
}
