interface ICost {
  total: number;
  currency: string;
}
interface ISeller {
  id: string;
  nickname: string;
}

interface IPurchaseDetail {
  purchaseId: string;
  title: string;
  cost: ICost;
  amount: number;
  date: string;
  image: string;
  seller: ISeller;
  transactionId: string;
  shipmentId: string;
}

interface IPurchaseList {
  total: number;
  offset: number;
  limit: number;
  data: IPurchaseDetail[];
}
export type { IPurchaseList, IPurchaseDetail };
