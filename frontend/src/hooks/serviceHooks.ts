// hooks
import useFetchService from "./useFetchService";

// services
import { fetchPurchases, fetchUser } from "../services/backendServices";

function useGetUser() {
  const initialState = {
    userId: "0",
    name: "",
    surname: "",
    level: "",
    profileImage: "",
  };
  return useFetchService(fetchUser(), initialState);
}

interface IFetchPurchasesQueryParams {
  userId: string;
  offset?: string;
  limit?: string;
}
function useGetPurchases(queryParams: IFetchPurchasesQueryParams) {
  const initialState = {
    data: [],
    limit: 0,
    offset: 0,
    total: 0,
  };
  return useFetchService(fetchPurchases(queryParams), initialState);
}

export { useGetUser, useGetPurchases };
