// models
import {
  IUserResponse,
  IUserRestrictionsResponse,
} from "./models/userResponses";
import { IPurchaseResponse } from "./models/purchasesResponse";
import { IUser } from "@/models/user";
import { IPurchaseList } from "@/models/purchase";
import {
  IFetchPurchasesQueryParams,
  IParsedQueryParams,
} from "./models/purchaseQueryParams";
import { IShipmentStatusResponse } from "./models/shipmentResponse";
import { ITransactionStatusResponse } from "./models/paymentResponse";

// utils
import { SERVICE_URL, fetchJsonFromBackend } from "./httpUtils";
import { purchaseListAdapter, userAdapter } from "./adapters";

// ARTICLE SERVICES
function fetchUser(): Promise<IUser> {
  return fetchJsonFromBackend<IUserResponse>(SERVICE_URL.users).then(
    userAdapter
  );
}

function fetchPurchases(
  queryParams: IFetchPurchasesQueryParams,
  abortController?: AbortController
): Promise<IPurchaseList> {
  const { userId, limit, page } = queryParams;
  const parsedQueryParams: IParsedQueryParams = {
    userId,
  };
  if (limit) parsedQueryParams.limit = limit.toString();
  if (page) parsedQueryParams.page = page.toString();

  return fetchJsonFromBackend<IPurchaseResponse>(
    SERVICE_URL.purchases,
    {
      queryParams: { ...parsedQueryParams },
    },
    abortController
  ).then(purchaseListAdapter);
}

function fetchUserRestrictions(userId: string) {
  return fetchJsonFromBackend<IUserRestrictionsResponse[]>(
    `${SERVICE_URL.restrictions}/${userId}`
  );
}

function fetchShipmentStatus(transactionId: string) {
  return fetchJsonFromBackend<IShipmentStatusResponse>(
    `${SERVICE_URL.shipments}/${transactionId}`
  );
}

function fetchPaymentStatus(transactionId: string) {
  return fetchJsonFromBackend<ITransactionStatusResponse>(
    `${SERVICE_URL.payment}/${transactionId}`
  );
}

export {
  fetchUser,
  fetchPurchases,
  fetchUserRestrictions,
  fetchShipmentStatus,
  fetchPaymentStatus,
};
