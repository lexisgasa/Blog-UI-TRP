import { render, screen } from "@testing-library/react";
import { Post } from "../../types";
import PostsList from "./PostsList";

describe("Given the PostsList component", () => {
  describe("When it receives two posts with the title 'hola buenas' and 'hasta luego cocodrilo'", () => {
    test("Then it should show 'hola buenas' and 'hasta luego cocodrilo' inside headings", () => {
      const firstPostTitleText = "hola buenas";
      const firstPostTitleRegex = new RegExp(firstPostTitleText, "i");
      const secondPostTitleText = "hasta luego cocodrilo";
      const secondPostTitleRegex = new RegExp(secondPostTitleText, "i");

      const posts: Post[] = [
        {
          id: "1",
          title: "hola buenas",
          author: "",
          date: new Date(),
          content: "",
          alternativeText: "",
          imageUrl: "",
        },
        {
          id: "2",
          title: "hasta luego cocodrilo",
          author: "",
          date: new Date(),
          content: "",
          alternativeText: "",
          imageUrl: "",
        },
      ];

      render(<PostsList posts={posts} />);

      const firstPostTitle = screen.getByRole("heading", {
        name: firstPostTitleRegex,
      });
      const secondPostTitle = screen.getByRole("heading", {
        name: secondPostTitleRegex,
      });

      expect(firstPostTitle).toBeInTheDocument();
      expect(secondPostTitle).toBeInTheDocument();
    });
  });
});
