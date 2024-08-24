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

  describe("When it renders 2 posts with the title 'el leon de la carcel' and 'un elefante en la luna'", () => {
    test("Then it should show 'el leon de la carcel' and 'un elefante en la luna' inside their headings", async () => {
      render(<PostsListPage />);
      const lionPostTitleText = "el leon de la carcel";
      const lionPostTitleRegex = new RegExp(lionPostTitleText, "i");
      const elephantPostTitleText = "un elefante en la luna";
      const elephantPostTitleRegex = new RegExp(elephantPostTitleText, "i");

      const lionPostTitle = await screen.findByRole("heading", {
        name: lionPostTitleRegex,
      });
      const elephantPostTitle = await screen.findByRole("heading", {
        name: elephantPostTitleRegex,
      });

      expect(lionPostTitle).toBeInTheDocument();
      expect(elephantPostTitle).toBeInTheDocument();
    });
  });
});
