// libraries
import { useState } from "react";
import ReactPaginate from "react-paginate";

// styles
import "./purchaseList.scss";

// hooks
import useFetchPurchaseList from "./useFetchPurchaseList";

function Items({ currentItems }: { currentItems: string[] }) {
  return (
    <div className="items">
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </div>
  );
}

function PurchasesList({ userId }: { userId: string }) {
  const ITEMS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const { response, loading } = useFetchPurchaseList(
    userId,
    currentPage,
    ITEMS_PER_PAGE
  );
  const { data, total } = response;
  const items = data.map((purchase) => purchase.title);

  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected + 1;
    setCurrentPage(newPage);
  };

  return (
    <div>
      {loading && "loading"}
      <Items currentItems={items} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={Math.ceil(total / ITEMS_PER_PAGE)}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
export default PurchasesList;
