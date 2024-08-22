import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show BLOG-TRP inside a heading", () => {
      render(<Header />);

      const appTitle = screen.getByRole("heading", { name: /blog-trp/i });

      expect(appTitle).toBeInTheDocument();
    });
  });
});
