import { useEffect, useState } from "react";

const INITIAL_ERROR = "";

type TUseFetchServiceOptions<TResponse> = {
  payload?: unknown;
  defaultResponse: TResponse;
};

function useFetchService<TResponse>(
  service: (body: unknown) => Promise<TResponse>,
  options: TUseFetchServiceOptions<TResponse>
) {
  const { defaultResponse, payload = {} } = options;

  const [error, setError] = useState(INITIAL_ERROR);
  const [response, setResponse] = useState(defaultResponse);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    service(payload)
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
