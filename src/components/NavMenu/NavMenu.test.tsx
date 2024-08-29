import { render, screen } from "@testing-library/react";
import NavMenu from "./NavMenu";
import { MemoryRouter } from "react-router-dom";

describe("Given the NavMenu component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 2 links with the text 'Posts' and 'Create post'", () => {
      render(
        <MemoryRouter>
          <NavMenu />
        </MemoryRouter>,
      );

      const postsLink = screen.getByRole("link", { name: /posts/i });
      const createPostsLink = screen.getByRole("link", {
        name: /create post/i,
      });

      expect(postsLink).toBeInTheDocument();
      expect(createPostsLink).toBeInTheDocument();
    });
  });
});
