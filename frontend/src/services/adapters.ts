// libraries
import Ajv from "ajv";

// models
import {
  IUserResponse,
  TUserRestrictionsResponse,
} from "./models/userResponses";
import { ICompleteShipmentResponse } from "./models/completePurchasesResponse";
import { IUser, TUserRestrictions } from "@/models/user";
import { ICompleteShipmentData } from "@/models/completePurchases";

// schemas
import { userRestrictionsSchema, userSchema } from "./schemas/user";
import { completePurchaseListSchema } from "./schemas/completePurchaseList";

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
function completePurchaseListAdapter(
  dataResponse: ICompleteShipmentResponse
): ICompleteShipmentData {
  const isValid = ajv.compile(completePurchaseListSchema)(dataResponse);
  console.log("is adapter valid:", isValid);

  if (!isValid) throw Error("Error adapting the api response");

  const { data, ...camelCaseKeys } = dataResponse;
  return {
    ...camelCaseKeys,
    data: data.map((purchase) => ({
      ...purchase,
      purchaseId: purchase.purchase_id.toString(),
      seller: {
        nickname: purchase.seller.nickname,
        id: purchase.seller.id.toString(),
      },
      transaction: {
        shipmentId: purchase.transaction.shipment_id.toString(),
        status: purchase.transaction.status,
      },
      payment: {
        transactionId: purchase.payment.transaction_id.toString(),
        status: purchase.payment.status,
      },
    })),
  };
}

function userRestrictionsAdapter(
  dataResponse: TUserRestrictionsResponse
): TUserRestrictions {
  const isValid = ajv.compile(userRestrictionsSchema)(dataResponse);
  if (!isValid) throw Error("Error adapting the api response");

  return dataResponse;
}

export { userAdapter, userRestrictionsAdapter, completePurchaseListAdapter };
