// libraries
import { fetchShipmentStatus } from "@/services/backendServices";
import { useCallback, useEffect, useState } from "react";

const INITIAL_ERROR = "";
const INITIAL_STATE = {
  shipmentId: "",
  status: "",
};

function useFetchShipmentStatus(shipmentId: string) {
  const [response, setResponse] = useState(INITIAL_STATE);
  const [error, setError] = useState(INITIAL_ERROR);
  const [loading, setLoading] = useState(true);

  const fetchService = useCallback(() => {
    setLoading(true);
    fetchShipmentStatus(shipmentId)
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
  }, [shipmentId]);

  useEffect(() => {
    fetchService();
  }, [fetchService]);

  return { response, error, loading };
}

export { useFetchShipmentStatus };
