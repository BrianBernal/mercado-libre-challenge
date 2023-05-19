// libraries
import { useState } from "react";
import ReactPaginate from "react-paginate";

// styles
import "./purchaseList.scss";

// hooks
import useFetchPurchaseList from "./useFetchPurchaseList";

// components
import RowItem from "./rowItem/RowItem";

function PurchasesList({ userId }: { userId: string }) {
  const ITEMS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const { response, loading } = useFetchPurchaseList(
    userId,
    currentPage,
    ITEMS_PER_PAGE
  );
  const { data, total } = response;
  const items = data.map(({ purchaseId, title, amount, cost, date, image }) => {
    const rowData = {
      id: purchaseId.toString(),
      name: title,
      price: `${cost.currency} ${cost.total}`,
      date: new Date(date),
      quantity: amount,
      imageUrl: image,
    };
    return rowData;
  });

  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected + 1;
    setCurrentPage(newPage);
  };

  const onDetail = () => {
    console.log("I am Detail");
  };

  return (
    <div>
      {items.map((row) => {
        return <RowItem key={row.id} {...row} detailAction={onDetail} />;
      })}
      {loading && <span className="loader-line" />}
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={Math.ceil(total / ITEMS_PER_PAGE)}
        previousLabel="< previous"
        pageClassName="pagination__item"
        pageLinkClassName="pagination__link"
        previousClassName="pagination__item"
        previousLinkClassName="pagination__link"
        nextClassName="pagination__item"
        nextLinkClassName="pagination__link"
        breakClassName="pagination__item"
        breakLinkClassName="pagination__link"
        containerClassName="pagination"
        activeClassName="pagination__item--active"
        breakLabel="..."
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
export default PurchasesList;
