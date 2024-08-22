import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it is rendered", () => {
    test("It should show the message 'Oops... this page doesn't exist'", () => {
      render(<NotFoundPage />);

      const errorMessage = screen.getByText("Oops... this page doesn't exist");

      expect(errorMessage).toBeInTheDocument();
    });
  });
});
