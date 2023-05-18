// models
import { IUserResponse } from "./models/userResponses";
import { IPurchaseList } from "../models/purchase";
import { IPurchaseResponse } from "./models/purchasesResponse";
import {
  IFetchPurchasesQueryParams,
  IParsedQueryParams,
} from "./models/purchaseQueryParams";

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

function fetchPurchases(
  queryParams: IFetchPurchasesQueryParams
): Promise<IPurchaseList> {
  const { userId, limit, page } = queryParams;
  const parsedQueryParams: IParsedQueryParams = {
    userId,
  };
  if (limit) parsedQueryParams.limit = limit.toString();
  if (page) parsedQueryParams.page = page.toString();

  return fetchJsonFromBackend<IPurchaseResponse>(SERVICE_URL.purchases, {
    queryParams: { ...parsedQueryParams },
  }).then(purchaseListAdapter);
}

export { fetchUser, fetchPurchases };
