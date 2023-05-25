interface ITransaction {
  shipment_id: string | number;
  status: string;
}

interface ISeller {
  id: string | number;
  nickname: string;
}
interface IPayment {
  status: string;
  transaction_id: string | number;
}
interface ICost {
  currency: string;
  total: number;
}

interface ICompleteShipment {
  purchase_id: string | number;
  amount: number;
  title: string;
  date: string;
  image: string;
  payment: IPayment;
  cost: ICost;
  seller: ISeller;
  transaction: ITransaction;
}

interface ICompleteShipmentResponse {
  data: ICompleteShipment[];
  limit: number;
  offset: number;
  total: number;
}

export type { ICompleteShipmentResponse };
