const BACKEND_PORT = import.meta.env.BACKEND_URL || 3000;
const BACKEND_HOST_URL = import.meta.env.BACKEND_HOST_URL || "http://localhost";
const BACKEND_HOSTNAME =
  import.meta.env.BACKEND_URL || `${BACKEND_HOST_URL}:${BACKEND_PORT}`;
const API_VERSION = "/api/v1";

const SERVICE_URL = Object.freeze({
  users: `${BACKEND_HOSTNAME}${API_VERSION}/user`,
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

async function fetchJsonFromBackend<T>(
  url: string,
  requestInit?: RequestInit
): Promise<T> {
  let response;

  // case: network error
  try {
    response = await fetch(url, requestInit);
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
