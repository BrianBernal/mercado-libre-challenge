import { fetchMocker } from "./setupVitest";

function resetBackendFetchMock() {
  fetchMocker.mockReset();
  console.log("default mocker");

  fetchMocker.mockResponse(() => {
    return {
      status: 400,
    };
  });
}

export { resetBackendFetchMock };
