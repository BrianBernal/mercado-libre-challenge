// models
import {
  IUserResponse,
  TUserRestrictionsResponse,
} from "./models/userResponses";
import { ICompleteShipmentResponse } from "./models/completePurchasesResponse";
import { ICompleteShipmentData } from "@/models/completePurchases";
import {
  IFetchPurchasesQueryParams,
  IParsedQueryParams,
} from "./models/purchaseQueryParams";

// utils
import { SERVICE_URL, fetchJsonFromBackend } from "./httpUtils";
import {
  completePurchaseListAdapter,
  userAdapter,
  userRestrictionsAdapter,
} from "./adapters";

// ARTICLE SERVICES
function fetchUser() {
  return fetchJsonFromBackend<IUserResponse>(SERVICE_URL.users).then(
    userAdapter
  );
}

function fetchPurchases(
  queryParams: IFetchPurchasesQueryParams,
  abortController?: AbortController
): Promise<ICompleteShipmentData> {
  const { userId, limit, page } = queryParams;
  const parsedQueryParams: IParsedQueryParams = {
    userId,
  };

  if (limit) parsedQueryParams.limit = limit.toString();
  if (page) parsedQueryParams.page = page.toString();

  return fetchJsonFromBackend<ICompleteShipmentResponse>(
    SERVICE_URL.purchases,
    {
      queryParams: { ...parsedQueryParams },
    },
    abortController
  ).then(completePurchaseListAdapter);
}

function fetchUserRestrictions(userId: string) {
  return fetchJsonFromBackend<TUserRestrictionsResponse>(
    `${SERVICE_URL.restrictions}/${userId}`
  ).then(userRestrictionsAdapter);
}

export { fetchUser, fetchPurchases, fetchUserRestrictions };
