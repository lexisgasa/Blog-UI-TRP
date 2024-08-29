import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Given the Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show BLOG-TRP inside a heading", () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const appTitle = screen.getByRole("heading", { name: /blog-trp/i });

      expect(appTitle).toBeInTheDocument();
    });
  });
});
