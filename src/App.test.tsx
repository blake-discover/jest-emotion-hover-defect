import "@testing-library/jest-dom";
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

    Array.from(document.querySelectorAll("style")).forEach((tag) => {
      console.log(tag.innerHTML);
    });

    expect(button).toHaveStyle({ "background-color": "aqua" });
  });
});
