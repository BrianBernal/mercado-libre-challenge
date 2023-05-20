interface IUser {
  userId: string;
  name: string;
  surname: string;
  level: string;
  profileImage: string;
}

type TUserRestrictions = {
  type: string;
  message: string;
}[];

interface ITransactionStatus {
  transactionId: string;
  status: string;
}

interface IShipmentStatus {
  shipmentId: string;
  status: string;
}

export type { IUser, TUserRestrictions, ITransactionStatus, IShipmentStatus };
