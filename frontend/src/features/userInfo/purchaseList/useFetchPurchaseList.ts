// libraries
import { useCallback, useEffect, useState } from "react";

// models
import { IPurchaseList } from "@/models/purchase";

// services
import { fetchPurchases } from "@/services/backendServices";

const INITIAL_STATE: IPurchaseList = {
  data: [],
  limit: 0,
  offset: 0,
  total: 0,
};
const INITIAL_ERROR = "";
const INITIAL_ABORTER = new AbortController();

function useFetchPurchaseList(
  userId: string,
  page: number,
  itemsPerPage: number
) {
  const [response, setResponse] = useState(INITIAL_STATE);
  const [error, setError] = useState(INITIAL_ERROR);
  const [loading, setLoading] = useState(true);
  const [abortController, setAborterController] = useState(INITIAL_ABORTER);

  const fetchService = useCallback(() => {
    const queryParams = {
      userId,
      page,
      limit: itemsPerPage,
    };
    setLoading(true);
    fetchPurchases(queryParams, abortController)
      .then((data) => {
        setResponse(data);
        setError(INITIAL_ERROR);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "Service error");
      });
  }, [abortController, itemsPerPage, page, userId]);

  useEffect(() => {
    fetchService();
  }, [fetchService]);

  return { response, error, loading, abortController, setAborterController };
}

export default useFetchPurchaseList;
