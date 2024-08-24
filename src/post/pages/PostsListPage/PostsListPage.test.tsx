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

      const lionPostTitle = await screen.findByRole("heading", {
        name: "el leon de la carcel",
      });
      const elephantPostTitle = await screen.findByRole("heading", {
        name: "un elefante en la luna",
      });

      expect(lionPostTitle).toBeInTheDocument();
      expect(elephantPostTitle).toBeInTheDocument();
    });
  });
});
