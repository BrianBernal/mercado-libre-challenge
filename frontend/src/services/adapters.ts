// libraries
import Ajv from "ajv";

// models
import { IPurchaseList } from "../models/purchase";
import { IUser } from "../models/user";
import { IPurchaseResponse } from "./models/purchasesResponses";
import { IUserResponse } from "./models/userResponses";

// schemas
import { userSchema } from "./schemas/user";
import { purchaseListSchema } from "./schemas/purchaseList";

const ajv = new Ajv();

function userAdapter(dataResponse: IUserResponse): IUser {
  const validate = ajv.compile(userSchema);
  const isValid = validate(dataResponse);
  if (!isValid) throw Error("Error adapting the api response");

  const { user_id, profile_image, ...goodTypedElements } = dataResponse;
  const adaptedData = {
    userId: user_id.toString(),
    profileImage: profile_image,
    ...goodTypedElements,
  };
  return adaptedData;
}

function purchaseListAdapter(dataResponse: IPurchaseResponse): IPurchaseList {
  const isValid = ajv.compile(purchaseListSchema)(dataResponse);
  if (!isValid) throw Error("Error adapting the api response");

  const { data, ...camelCaseKeys } = dataResponse;
  const adaptedData = {
    ...camelCaseKeys,
    data: data.map((purchase) => ({
      ...purchase,
      purchaseId: purchase.purchase_id,
      shipmentId: purchase.shipment_id,
      transactionId: purchase.transaction_id,
    })),
  };
  return adaptedData;
}

export { userAdapter, purchaseListAdapter };
