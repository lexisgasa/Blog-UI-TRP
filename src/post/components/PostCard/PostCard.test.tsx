import { render, screen } from "@testing-library/react";
import PostCard from "./PostCard";
import { Post } from "../../types";

describe("Given the Card component", () => {
  describe("When it receives a post with title 'The litle spider with 8 legs'", () => {
    test("Then it should show the post's title 'The litle spider with 8 legs' inside heading", () => {
      const postTitle = "The litle spider with 8 legs";
      const post: Post = {
        id: "",
        author: "",
        content: "",
        date: new Date(),
        title: postTitle,
        alternativeText: "",
        imageUrl: "",
      };

      const postTitleRegexp = new RegExp(postTitle, "i");

      render(<PostCard post={post} />);

      const postTitleElement = screen.getByRole("heading", {
        name: postTitleRegexp,
      });

      expect(postTitleElement).toBeInTheDocument();
    });
  });
});
