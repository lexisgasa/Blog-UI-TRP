import { render, screen } from "@testing-library/react";
import PostsListPage from "./PostsListPage";

describe("Given the PostsListPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Posts List' inside a heading", () => {
      const headingText = "Posts List";

      render(<PostsListPage />);

      const postsListText = screen.getByRole("heading", { name: headingText });

      expect(postsListText).toBeInTheDocument();
    });
  });
});
