import { ICompleteShipment } from "@/models/completePurchases";

interface modalDetailState {
  isOpen: boolean;
  selectedPurchase: ICompleteShipment;
}
const INITIAL_MODAL_DETAIL_VALUES: modalDetailState = {
  isOpen: false,
  selectedPurchase: {
    title: "",
    amount: 0,
    date: "",
    image: "",
    purchaseId: "",
    cost: {
      currency: "",
      total: 0,
    },
    seller: {
      id: "",
      nickname: "",
    },
    payment: {
      status: "",
      transactionId: "",
    },
    transaction: {
      shipmentId: "",
      status: "",
    },
  },
};

export { INITIAL_MODAL_DETAIL_VALUES };
