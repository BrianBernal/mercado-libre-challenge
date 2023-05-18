interface ICost {
  total: number;
  currency: string;
}
interface ISeller {
  id: number;
  nickname: string;
}

interface IPurchaseDetail {
  purchaseId: number;
  title: string;
  cost: ICost;
  amount: number;
  date: string;
  image: string;
  seller: ISeller;
  transactionId: number;
  shipmentId: number;
}

interface IPurchaseList {
  total: number;
  offset: number;
  limit: number;
  data: IPurchaseDetail[];
}
export type { IPurchaseList };
