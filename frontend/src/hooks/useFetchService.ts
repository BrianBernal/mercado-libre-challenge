import { useEffect, useState } from "react";

const INITIAL_ERROR = "";

function useFetchService<TAadaptedResponse>(
  service: Promise<TAadaptedResponse>,
  defaultResponse: TAadaptedResponse
) {
  const [error, setError] = useState(INITIAL_ERROR);
  const [response, setResponse] = useState(defaultResponse);
  const [loading, setLoading] = useState(true);
  const [serviceDispatcher, setServiceDispatcher] = useState(false);

  const fetchService = () => {
    setLoading(true);
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
  };

  const reFetch = () => {
    setServiceDispatcher((prev) => !prev);
  };

  useEffect(() => {
    fetchService();
  }, [serviceDispatcher]);

  return { response, error, loading, reFetch };
}

export default useFetchService;
