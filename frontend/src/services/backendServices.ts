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

function fetchUserRestrictions(userId: string) {
  return fetchJsonFromBackend<IUserRestrictionsResponse[]>(
    `${SERVICE_URL.restrictions}/${userId}`
  );
}

export { fetchUser, fetchPurchases, fetchUserRestrictions };
