import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Given the Card component", () => {
  describe("When it receives a post with title 'The litle spider with 8 legs'", () => {
    test("Then it should show the post's title 'The litle spider with 8 legs' inside heading", () => {
      const postTitle = "The litle spider with 8 legs";
      const postTitleRegexp = new RegExp(postTitle, "i");

      render(<Card title={postTitle} />);

      const postTitleElement = screen.getByRole("heading", {
        name: postTitleRegexp,
      });

      expect(postTitleElement).toBeInTheDocument();
    });
  });
});
