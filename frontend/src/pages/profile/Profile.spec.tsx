// libraries
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

// components
import Profile from "./Profile";

describe("<UserInfo /> happy paths", () => {
  it("should render user Info", () => {
    render(<Profile />);
  });
});
