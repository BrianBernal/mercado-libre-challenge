// libraries
import Ajv from "ajv";

// models
import { IPurchaseResponse } from "./models/purchasesResponse";
import {
  IUserResponse,
  TUserRestrictionsResponse,
} from "./models/userResponses";
import { IPurchaseList } from "@/models/purchase";
import { IUser, TUserRestrictions } from "@/models/user";

// schemas
import { userRestrictionsSchema, userSchema } from "./schemas/user";
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
      purchaseId: purchase.purchase_id.toString(),
      shipmentId: purchase.shipment_id.toString(),
      transactionId: purchase.transaction_id.toString(),
      seller: {
        ...purchase.seller,
        id: purchase.seller.id.toString(),
      },
    })),
  };
  return adaptedData;
}

function userRestrictionsAdapter(
  dataResponse: TUserRestrictionsResponse
): TUserRestrictions {
  const isValid = ajv.compile(userRestrictionsSchema)(dataResponse);
  if (!isValid) throw Error("Error adapting the api response");

  return dataResponse;
}

export { userAdapter, purchaseListAdapter, userRestrictionsAdapter };
