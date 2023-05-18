// libraries
import { useEffect, useState } from "react";

// models
import { IPurchaseList } from "@/models/purchase";

// services
import { fetchPurchases } from "@/services/backendServices";

const INITIAL_ERROR = "";
const INITIAL_STATE: IPurchaseList = {
  data: [],
  limit: 0,
  offset: 0,
  total: 0,
};

function useFetchPurchaseList(
  userId: string,
  page: number,
  itemsPerPage: number
) {
  const [response, setResponse] = useState(INITIAL_STATE);
  const [error, setError] = useState(INITIAL_ERROR);
  const [loading, setLoading] = useState(true);

  const queryParams = {
    userId,
    page,
    limit: itemsPerPage,
  };

  const fetchService = () => {
    setLoading(true);
    fetchPurchases(queryParams)
      .then((data) => {
        setResponse(data);
        setError(INITIAL_ERROR);
      })
      .catch((error) => {
        setError(error.message || "Service error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchService();
  }, [page]);

  return { response, error, loading };
}

export default useFetchPurchaseList;
