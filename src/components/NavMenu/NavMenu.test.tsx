import { render, screen } from "@testing-library/react";
import NavMenu from "./NavMenu";
import { MemoryRouter } from "react-router-dom";

describe("Given the NavMenu component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 2 links with the text 'Posts' and 'Create post'", () => {
      const postsLinkText = "posts";
      const postsLinkRegex = new RegExp(postsLinkText, "i");
      const createPostsLinkText = "create post";
      const createPostsLinkTextRegex = new RegExp(createPostsLinkText, "i");

      render(
        <MemoryRouter>
          <NavMenu />
        </MemoryRouter>,
      );

      const postsLink = screen.getByRole("link", { name: postsLinkRegex });
      const createPostsLink = screen.getByRole("link", {
        name: createPostsLinkTextRegex,
      });

      expect(postsLink).toBeInTheDocument();
      expect(createPostsLink).toBeInTheDocument();
    });
  });
});
