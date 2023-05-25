const BACKEND_BASE_URL =
  import.meta.env.VITE_BACKEND_BASE_URL || "http://localhost:4000/api/v1";

const SERVICE_URL = Object.freeze({
  users: `${BACKEND_BASE_URL}/user`,
  purchases: `${BACKEND_BASE_URL}/entirePurchases`,
  restrictions: `${BACKEND_BASE_URL}/restrictions`,
  shipments: `${BACKEND_BASE_URL}/shipmentState`,
  payment: `${BACKEND_BASE_URL}/paymentState`,
});

type TMmethod = "POST" | "PATCH"; // only methods that should have body
function createFetchOptions(method: TMmethod, body = {}, headers = {}) {
  const fetchOptions = {
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };
  return fetchOptions;
}

interface IFetchOptions {
  requestInit?: RequestInit;
  queryParams?: Record<string, string>;
}
async function fetchJsonFromBackend<T>(
  url: string,
  fetchOptions: IFetchOptions = {},
  abortController?: AbortController
): Promise<T> {
  let response;
  const { requestInit, queryParams } = fetchOptions;
  const urlWithParams = queryParams
    ? `${url}?${new URLSearchParams(queryParams).toString()}`
    : url;

  const finalFetchOptions = abortController
    ? { ...requestInit, signal: abortController.signal }
    : requestInit;

  try {
    response = await fetch(urlWithParams, finalFetchOptions);
  } catch (error) {
    if (abortController?.signal.aborted) {
      throw Error("Aborted request.");
    } else {
      throw Error("Network error.");
    }
  }

  if (response.ok) {
    // case: successful with data
    try {
      return await response.json();
    } catch (error) {
      // case: successful with NO data
      return undefined as T;
    }
  }

  // case: error code with data response
  let responseErrorData;
  try {
    responseErrorData = await response.json();
  } catch (error) {
    responseErrorData = null;
  }

  if (typeof responseErrorData === "string") throw Error(responseErrorData);

  // case: error code without data
  throw Error(responseErrorData?.error || "Resource not found.");
}

export { createFetchOptions, fetchJsonFromBackend }; // methods
export { SERVICE_URL, BACKEND_BASE_URL }; // constants
