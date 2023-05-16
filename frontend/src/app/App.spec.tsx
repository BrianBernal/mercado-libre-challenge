import { render } from "@testing-library/react";

// components
import App from "./App";

describe("<App />", () => {
  it("Should render root App", () => {
    render(<App />);
  });
});
