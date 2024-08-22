import { render, screen } from "@testing-library/react";
import { Post } from "../../types";
import PostsList from "./PostsList";

describe("Given the PostsList component", () => {
  describe("When it receives two posts with the title 'hola buenas' and 'hasta luego cocodrilo'", () => {
    test("Then it should show 'hola buenas' and 'hasta luego cocodrilo' inside headings", () => {
      const posts: Post[] = [
        {
          id: "",
          title: "hola buenas",
          author: "",
          date: new Date(),
          content: "",
        },
        {
          id: "",
          title: "hasta luego cocodrilo",
          author: "",
          date: new Date(),
          content: "",
        },
      ];
      render(<PostsList posts={posts} />);

      const firstPostTitle = screen.getByRole("heading", {
        name: "hola buenas",
      });
      const secoondPostTitle = screen.getByRole("heading", {
        name: "hasta luego cocodrilo",
      });

      expect(firstPostTitle).toBeInTheDocument();
      expect(secoondPostTitle).toBeInTheDocument();
    });
  });
});
