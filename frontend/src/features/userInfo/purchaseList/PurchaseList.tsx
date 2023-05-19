// libraries
import { useState } from "react";
import ReactPaginate from "react-paginate";

// models
import { IPurchaseDetail } from "@/models/purchase";

// styles
import "./purchaseList.scss";

// hooks
import useFetchPurchaseList from "./useFetchPurchaseList";

// utils
import { formatNumber } from "@/utils/formatValues";

// components
import RowItem from "./rowItem/RowItem";
import Modal from "@/components/modal/Modal";
import PurchaseDetail from "./purchaseDetail/PurchaseDetail";

interface modalDetailState {
  isOpen: boolean;
  selectedPurchase: IPurchaseDetail | null;
}

const INITIAL_MODAL_DETAIL_VALUES: modalDetailState = {
  isOpen: false,
  selectedPurchase: null,
};

function PurchasesList({ userId }: { userId: string }) {
  const ITEMS_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const { response, loading, error, abortController, setAborterController } =
    useFetchPurchaseList(userId, currentPage, ITEMS_PER_PAGE);

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
      selectedPurchase: newSelectedPurchase || null,
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
      <Modal isOpen={isOpen} onClose={closeModal}>
        <PurchaseDetail
          purchaseId={selectedPurchase?.purchaseId.toString() || ""}
          imageSrc={selectedPurchase?.image || ""}
          date={new Date(selectedPurchase?.date || "").getDate().toString()}
          sellerName={selectedPurchase?.seller.nickname || ""}
          quantity={selectedPurchase?.amount || 0}
          shipmentId={selectedPurchase?.shipmentId.toString() || ""}
          transactionId={selectedPurchase?.transactionId.toString() || ""}
          cost={`${selectedPurchase?.cost.currency} $ ${formatNumber(
            selectedPurchase?.cost.total
          )}`}
        />
      </Modal>
    </>
  );
}
export default PurchasesList;
