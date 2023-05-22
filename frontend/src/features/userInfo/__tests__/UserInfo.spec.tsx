// libraries
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";

// components
import UserInfo from "../UserInfo";
import { FETCH_ERROR } from "../constants";

// mock api
import { fetchMocker } from "@/setupTest/setupVitest";
import { userMockFetch } from "./userMockFetch";
import { resetBackendFetchMock } from "@/setupTest/resetBackendFetchMock";

afterEach(() => {
  resetBackendFetchMock();
});

describe("<UserInfo /> happy paths", () => {
  it("should render user Info", () => {
    userMockFetch();
    render(<UserInfo />);
  });

  it("should fetch user info data and paint it", async () => {
    const userMockResponse = userMockFetch();
    const { getByText, getByAltText } = render(<UserInfo />);

    await waitFor(() => {
      const { name, surname, level } = userMockResponse;
      expect(getByText(`${name} ${surname}`)).toBeInTheDocument();
      expect(getByText(`Nivel: ${level}`)).toBeInTheDocument();
      expect(getByAltText(name)).toBeInTheDocument();
    });
  });
});

describe("<UserInfo /> UNhappy paths", () => {
  fetchMocker.mockReject();
  it("should render even when is not fetching data correctly", () => {
    render(<UserInfo />);
  });

  it("Should print error message when is not fetching data correctly", async () => {
    fetchMocker.mockReject();
    const { getByText } = render(<UserInfo />);

    await waitFor(() => {
      expect(getByText(FETCH_ERROR)).toBeInTheDocument();
    });
  });
});
