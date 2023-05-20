interface IUserResponse {
  user_id: number | string;
  name: string;
  surname: string;
  level: string;
  profile_image: string;
}

type TUserRestrictionsResponse = {
  type: string;
  message: string;
}[];

interface ITransactionStatusResponse {
  transaction_id: number | string;
  status: string;
}

interface IShipmentStatusResponse {
  shipment_id: number | string;
  status: string;
}

export type {
  IUserResponse,
  TUserRestrictionsResponse,
  ITransactionStatusResponse,
  IShipmentStatusResponse,
};
