import { useEffect, useState } from "react";

const INITIAL_ERROR = "";

function useFetchService<TAadaptedResponse>(
  service: Promise<TAadaptedResponse>,
  defaultResponse: TAadaptedResponse
) {
  const [error, setError] = useState(INITIAL_ERROR);
  const [response, setResponse] = useState(defaultResponse);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    service
      .then((data) => {
        setResponse(data);
        setError(INITIAL_ERROR);
      })
      .catch((error) => {
        setResponse(defaultResponse);
        setError(error.message || "Service error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { response, error, loading };
}

export default useFetchService;
