import { Post } from "../../types";

export interface PostClientStructure {
  getPost: () => void;
  sendPost: (post: Post) => void;
}
