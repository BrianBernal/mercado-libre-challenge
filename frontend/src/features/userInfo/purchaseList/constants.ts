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

export { INITIAL_MODAL_DETAIL_VALUES };
