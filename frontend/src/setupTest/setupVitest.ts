// libraries
import createFetchMock from "vitest-fetch-mock";
import { vi } from "vitest";

// services
import { BACKEND_HOSTNAME, SERVICE_URL } from "@/services/httpUtils";

// mock responses
import { userResponseMock } from "./httpMockResponses";

const fetchMocker = createFetchMock(vi);

const responses = {
  [SERVICE_URL.users]: JSON.stringify(userResponseMock),
};

fetchMocker.mockIf(BACKEND_HOSTNAME, (req) => {
  console.log("url mock fetched:", req.url);

  if (req.url.endsWith(SERVICE_URL.users) && req.method === "GET") {
    return responses[SERVICE_URL.users];
  } else {
    return {
      status: 404,
      body: "Not Found",
    };
  }
});

fetchMocker.enableMocks();
fetchMocker.dontMock();

export { fetchMocker };
