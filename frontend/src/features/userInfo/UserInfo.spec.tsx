// libraries
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";

// components
import UserInfo, { FETCH_ERROR, PROFILE_ALT_TEXT } from "./UserInfo";

// api
import { userResponseMock } from "../../setupTest/httpMockResponses";
import { SERVICE_URL } from "../../services/httpUtils";

beforeEach(() => {
  fetchMock.doMock();
});

afterEach(() => {
  fetchMock.dontMock();
});

describe("<UserInfo /> happy paths", () => {
  it("should render user Info", () => {
    render(<UserInfo />);
  });

  it("should fetch user info data and paint it", async () => {
    const { getByText, getByAltText } = render(<UserInfo />);

    await waitFor(() => {
      expect(fetchMock.isMocking(SERVICE_URL.users)).toBeTruthy();
    });

    const { name, surname, level } = userResponseMock;
    expect(getByText(`${name} ${surname}`)).toBeInTheDocument();
    expect(getByText(level)).toBeInTheDocument();
    expect(getByAltText(PROFILE_ALT_TEXT)).toBeInTheDocument();
  });
});

describe("<UserInfo /> UNhappy paths", () => {
  it("should render even when is not fetching data correctly", () => {
    fetchMock.dontMock();
    render(<UserInfo />);
  });

  it("Should print error message when is not fetching data correctly", async () => {
    fetchMock.dontMock();
    const { getByText } = render(<UserInfo />);

    await waitFor(() => {
      expect(getByText(FETCH_ERROR)).toBeInTheDocument();
    });
  });
});