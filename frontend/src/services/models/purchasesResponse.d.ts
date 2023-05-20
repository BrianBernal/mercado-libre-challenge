interface ICost {
  total: number;
  currency: string;
}
interface ISeller {
  id: number | string;
  nickname: string;
}

interface IPurchaseDetail {
  title: string;
  cost: ICost;
  amount: number;
  date: string;
  image: string;
  seller: ISeller;
  purchase_id: number | string;
  transaction_id: number | string;
  shipment_id: number | string;
}

interface IPurchaseResponse {
  total: number;
  offset: number;
  limit: number;
  data: IPurchaseDetail[];
}

export type { IPurchaseResponse };
