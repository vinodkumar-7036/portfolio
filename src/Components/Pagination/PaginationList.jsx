import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "../Header.css";
function PaginationList(props) {
  let { data } = props;
  console.log("++++++>", data);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(10);
  const itemsPerPage = 15;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div>
        {currentItems.map((val, index) => {
          return (
            currentItems.length === 10 && (
              //   console.log("::::::::>", currentItems);
              <div key={index}>{val.entries}</div>
            )
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" next>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        activeLinkClassName="active"
        nextLinkClassName="page-num"
        previousLinkClassName="page-num"
      />
    </>
  );
}

export default PaginationList;
