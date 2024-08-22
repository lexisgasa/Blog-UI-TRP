import { render, screen } from "@testing-library/react";
import { Post } from "../../types";
import PostsList from "./PostsList";

describe("Given the PostsList component", () => {
  describe("When it receives two posts with the title 'hola buenas' and 'hasta luego cocodrilo'", () => {
    test("Then it should show 'hola buenas' and 'hasta luego cocodrilo' inside headings", () => {
      const firstPostTitleText = "hola buenas";
      const secondPostTitleText = "hasta luego cocodrilo";

      const posts: Post[] = [
        {
          id: "1",
          title: "hola buenas",
          author: "",
          date: new Date(),
          content: "",
        },
        {
          id: "2",
          title: "hasta luego cocodrilo",
          author: "",
          date: new Date(),
          content: "",
        },
      ];

      render(<PostsList posts={posts} />);

      const firstPostTitle = screen.getByRole("heading", {
        name: firstPostTitleText,
      });
      const secondPostTitle = screen.getByRole("heading", {
        name: secondPostTitleText,
      });

      expect(firstPostTitle).toBeInTheDocument();
      expect(secondPostTitle).toBeInTheDocument();
    });
  });
});
