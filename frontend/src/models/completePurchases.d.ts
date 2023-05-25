interface ITransaction {
  shipmentId: string;
  status: string;
}

interface ISeller {
  id: string;
  nickname: string;
}
interface IPayment {
  status: string;
  transactionId: string;
}
interface ICost {
  currency: string;
  total: number;
}

interface ICompleteShipment {
  amount: number;
  cost: ICost;
  date: string;
  image: string;
  payment: IPayment;
  purchaseId: string;
  seller: ISeller;
  title: string;
  transaction: ITransaction;
}

interface ICompleteShipmentData {
  data: ICompleteShipment[];
  limit: number;
  offset: number;
  total: number;
}

export type { ICompleteShipmentData, ICompleteShipment };
