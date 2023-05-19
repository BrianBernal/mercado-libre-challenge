// libraries
import { useCallback, useEffect, useState } from "react";

// models
// import { IUser } from "@/models/user";

// services
import { fetchUserRestrictions } from "@/services/backendServices";

const INITIAL_ERROR = "";
const INITIAL_STATE = {
  type: "",
  message: "Ninguna",
};

function useGetUserRestrictions(userId: string) {
  const [response, setResponse] = useState(INITIAL_STATE);
  const [error, setError] = useState(INITIAL_ERROR);
  const [loading, setLoading] = useState(true);

  const fetchService = useCallback(() => {
    setLoading(true);
    fetchUserRestrictions(userId)
      .then((data) => {
        setResponse(data[0]);
        setError(INITIAL_ERROR);
      })
      .catch((error) => {
        setError(error.message || "Service error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId]);

  useEffect(() => {
    if (userId !== "0") {
      fetchService();
    }
  }, [fetchService, userId]);

  return { response, error, loading };
}

export default useGetUserRestrictions;
