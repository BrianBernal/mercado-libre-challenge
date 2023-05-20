import { IPurchaseDetail } from "@/models/purchase";

interface modalDetailState {
  isOpen: boolean;
  selectedPurchase: IPurchaseDetail;
}
const INITIAL_MODAL_DETAIL_VALUES: modalDetailState = {
  isOpen: false,
  selectedPurchase: {
    title: "",
    amount: 0,
    date: "",
    image: "",
    purchaseId: "",
    shipmentId: "",
    transactionId: "",
    cost: {
      currency: "",
      total: 0,
    },
    seller: {
      id: "",
      nickname: "",
    },
  },
};
const ITEMS_PER_PAGE = 3;

export { INITIAL_MODAL_DETAIL_VALUES, ITEMS_PER_PAGE };
