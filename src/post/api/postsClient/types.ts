import { Post } from "../../types";

export interface PostClientStructure {
  getPost: () => void;
  createPost: (post: Post) => void;
}
