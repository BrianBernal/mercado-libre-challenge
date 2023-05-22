// libraries
import { fetchPaymentStatus } from "@/services/backendServices";
import { useCallback, useEffect, useState } from "react";

const INITIAL_STATE = {
  transactionId: "",
  status: "",
};
const INITIAL_ERROR = "";

function useFetchPaymentStatus(transactionId: string) {
  const [response, setResponse] = useState(INITIAL_STATE);
  const [error, setError] = useState(INITIAL_ERROR);
  const [loading, setLoading] = useState(true);

  const fetchService = useCallback(() => {
    setLoading(true);
    fetchPaymentStatus(transactionId)
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
  }, [transactionId]);

  useEffect(() => {
    fetchService();
  }, [fetchService]);

  return { response, error, loading };
}

export { useFetchPaymentStatus };
