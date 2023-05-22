// libraries
import { useState } from "react";
import ReactPaginate from "react-paginate";

// styles
import "./purchaseList.scss";

// hooks
import useFetchPurchaseList from "./hooks/useFetchPurchaseList";

// utils
import { formatNumber } from "@/utils/formatValues";
import { INITIAL_MODAL_DETAIL_VALUES } from "./constants";

// components
import Modal from "@/components/modal/Modal";
import RowItem from "./comopnents/rowItem/RowItem";
import PurchaseDetail from "./comopnents/purchaseDetail/PurchaseDetail";

function PurchaseList({
  userId,
  itemsPerPage,
}: {
  userId: string;
  itemsPerPage: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const { response, loading, error, abortController, setAborterController } =
    useFetchPurchaseList(userId, currentPage, itemsPerPage);

  const [modalDetailValue, setModalDetailValue] = useState(
    INITIAL_MODAL_DETAIL_VALUES
  );
  const { isOpen, selectedPurchase } = modalDetailValue;
  const { data, total } = response;

  const items = data.map(({ purchaseId, title, amount, cost, date, image }) => {
    const rowData = {
      id: purchaseId.toString(),
      name: title,
      price: `${cost.currency} $ ${formatNumber(cost.total)}`,
      date: new Date(date),
      quantity: amount,
      imageUrl: image,
    };
    return rowData;
  });

  const handlePageClick = (event: { selected: number }) => {
    if (loading) {
      abortController.abort();
    }
    const newAborter = new AbortController();
    setAborterController(newAborter);
    const newPage = event.selected + 1;
    setCurrentPage(newPage);
  };

  const onDetail = (id: string) => {
    const newSelectedPurchase = data.find(
      (purchase) => purchase.purchaseId.toString() === id
    );
    setModalDetailValue({
      isOpen: true,
      selectedPurchase:
        newSelectedPurchase || INITIAL_MODAL_DETAIL_VALUES.selectedPurchase,
    });
  };

  const closeModal = () => {
    setModalDetailValue(INITIAL_MODAL_DETAIL_VALUES);
  };

  return (
    <>
      <h1 className="title">Mis Compras</h1>
      {error && !loading && <span className="box warning-text">{error}</span>}
      {items.map((row) => {
        return <RowItem key={row.id} {...row} detailAction={onDetail} />;
      })}
      {!loading && items.length < 1 && !error && (
        <h2>Aun no tienes compras.</h2>
      )}
      {loading && <span className="loader-line" />}
      <ReactPaginate
        nextLabel="siguiente >"
        previousLabel="< anterior"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={Math.ceil(total / itemsPerPage)}
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
      <Modal isOpen={isOpen} onClose={closeModal}>
        <PurchaseDetail
          purchaseId={selectedPurchase.purchaseId}
          imageSrc={selectedPurchase.image}
          date={new Date(selectedPurchase.date).getDate().toString()}
          sellerName={selectedPurchase.seller.nickname}
          quantity={selectedPurchase.amount}
          shipmentId={selectedPurchase.shipmentId}
          transactionId={selectedPurchase.transactionId}
          cost={`${selectedPurchase.cost.currency} $ ${formatNumber(
            selectedPurchase.cost.total
          )}`}
        />
      </Modal>
    </>
  );
}
export default PurchaseList;
