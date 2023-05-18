// models
import { IUserResponse } from "./models/userResponses";
import { IPurchaseList } from "../models/purchase";
import { IPurchaseResponse } from "./models/purchasesResponses";

// utils
import { SERVICE_URL, fetchJsonFromBackend } from "./httpUtils";
import { purchaseListAdapter, userAdapter } from "./adapters";
import { IUser } from "../models/user";

// ARTICLE SERVICES
function fetchUser(): Promise<IUser> {
  return fetchJsonFromBackend<IUserResponse>(SERVICE_URL.users).then(
    userAdapter
  );
}

interface IFetchPurchasesQueryParams {
  userId: string;
  offset?: string;
  limit?: string;
}
function fetchPurchases(
  queryParams: IFetchPurchasesQueryParams
): Promise<IPurchaseList> {
  return fetchJsonFromBackend<IPurchaseResponse>(SERVICE_URL.purchases, {
    queryParams: { ...queryParams },
  }).then(purchaseListAdapter);
}

export { fetchUser, fetchPurchases };
