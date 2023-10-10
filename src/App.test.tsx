import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import each from "jest-each";

import App from "./App";

describe("App", () => {
  each([["Styled"], ["CSS"]]).test(
    "It applies correct background-color with %s styling approach",
    (query) => {
      const { queryByText } = render(<App />);
      const button = queryByText(query);
      expect(button).toBeInTheDocument();

      Array.from(document.querySelectorAll("style")).forEach((tag) => {
        console.log(tag.innerHTML);
      });

      expect(button).toHaveStyle({ "background-color": "aqua" });
    }
  );
});
