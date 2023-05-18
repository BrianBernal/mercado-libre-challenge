// libraries
import { useEffect, useState } from "react";

// models
import { IUser } from "@/models/user";

// services
import { fetchUser } from "@/services/backendServices";

const INITIAL_ERROR = "";
const INITIAL_STATE = {
  userId: "0",
  name: "",
  surname: "",
  level: "",
  profileImage: "",
};

function useFetchUser() {
  const [response, setResponse] = useState<IUser>(INITIAL_STATE);
  const [error, setError] = useState(INITIAL_ERROR);
  const [loading, setLoading] = useState(true);

  const fetchService = () => {
    setLoading(true);
    fetchUser()
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
  }, []);

  return { response, error, loading };
}

export default useFetchUser;
