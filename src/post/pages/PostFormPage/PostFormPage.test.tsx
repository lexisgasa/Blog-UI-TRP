import { render, screen } from "@testing-library/react";
import PostFormPage from "./PostFormPage";

describe("Given the PostFormPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Create a post' inside a heading", () => {
      const headingText = "Create a post";
      const headingTextRegex = new RegExp(headingText, "i");

      render(<PostFormPage />);

      const postFormText = screen.getByRole("heading", {
        name: headingTextRegex,
      });

      expect(postFormText).toBeInTheDocument();
    });
  });
});
