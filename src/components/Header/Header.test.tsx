import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Given the Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show BLOG-TRP inside a heading", () => {
      const appTitleText = "blog-trp";
      const appTitleTextRegex = new RegExp(appTitleText, "i");

      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const appTitle = screen.getByRole("heading", { name: appTitleTextRegex });

      expect(appTitle).toBeInTheDocument();
    });
  });
});
