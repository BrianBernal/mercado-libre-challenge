// libraries
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";

// components
import UserInfo from "../UserInfo";

// api
import { SERVICE_URL } from "@/services/httpUtils";
import { FETCH_ERROR } from "../constants";
import { fetchMocker } from "@/setupTest/setupVitest";
import { userMockFetch } from "./userMockFetch";

describe("<UserInfo /> happy paths", () => {
  it("should render user Info", () => {
    render(<UserInfo />);
  });

  it("should fetch user info data and paint it", async () => {
    const userResponseMock = userMockFetch();
    const { getByText, getByAltText } = render(<UserInfo />);

    await waitFor(() => {
      expect(fetchMocker.isMocking(SERVICE_URL.users)).toBeTruthy();
    });

    const { name, surname, level } = userResponseMock;
    expect(getByText(`${name} ${surname}`)).toBeInTheDocument();
    expect(getByText(`Nivel: ${level}`)).toBeInTheDocument();
    expect(getByAltText(name)).toBeInTheDocument();
  });
});

describe("<UserInfo /> UNhappy paths", () => {
  fetchMocker.mockReject();
  it("should render even when is not fetching data correctly", () => {
    fetchMocker.mockReject();
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
