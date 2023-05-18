const BACKEND_PORT = import.meta.env.BACKEND_URL || 3000;
const BACKEND_HOST_URL = import.meta.env.BACKEND_HOST_URL || "http://localhost";
const BACKEND_HOSTNAME =
  import.meta.env.BACKEND_URL || `${BACKEND_HOST_URL}:${BACKEND_PORT}`;
const API_VERSION = "/api/v1";
const BASE_URL = `${BACKEND_HOSTNAME}${API_VERSION}`;

const SERVICE_URL = Object.freeze({
  users: `${BASE_URL}/user`,
  purchases: `${BASE_URL}/purchases`,
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
  fetchOptions: IFetchOptions = {}
): Promise<T> {
  let response;
  const { requestInit, queryParams } = fetchOptions;
  const urlWithParams = queryParams
    ? `${url}?${new URLSearchParams(queryParams).toString()}`
    : url;

  try {
    response = await fetch(urlWithParams, requestInit);
  } catch (error) {
    throw Error("Network error.");
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

export { createFetchOptions, fetchJsonFromBackend };
export { SERVICE_URL, BACKEND_HOSTNAME };
