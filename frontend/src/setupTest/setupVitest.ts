// libraries
import createFetchMock from "vitest-fetch-mock";
import { vi } from "vitest";

const fetchMocker = createFetchMock(vi);

fetchMocker.mockResponse(() => {
  return {
    status: 500,
    statusText: "Initial mock configuration",
  };
});

fetchMocker.enableMocks();
fetchMocker.doMock();

export { fetchMocker };
