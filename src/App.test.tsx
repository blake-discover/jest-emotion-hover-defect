import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("Displays button", () => {
    const { queryByText } = render(<App />);
    const button = queryByText("Submit");

    expect(button).toBeInTheDocument();
  });
  it("Displays button with correct background-color", () => {
    const { getByText } = render(<App />);
    const button = getByText("Submit");

    expect(button).toHaveStyle({ "background-color": "aqua" });
  });
});
