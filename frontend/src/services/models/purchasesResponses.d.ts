interface ICost {
  total: number;
  currency: string;
}
interface ISeller {
  id: number;
  nickname: string;
}

interface IPurchaseDetail {
  purchase_id: number;
  title: string;
  cost: ICost;
  amount: number;
  date: string;
  image: string;
  seller: ISeller;
  transaction_id: number;
  shipment_id: number;
}

interface IPurchaseResponse {
  total: number;
  offset: number;
  limit: number;
  data: IPurchaseDetail[];
}
export type { IPurchaseResponse, ICurrency };
