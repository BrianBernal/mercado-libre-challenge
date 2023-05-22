import { fetchMocker } from "./setupVitest";

function resetBackendFetchMock() {
  fetchMocker.mockResponse(() => {
    return {
      status: 400,
    };
  });
}

export { resetBackendFetchMock };
