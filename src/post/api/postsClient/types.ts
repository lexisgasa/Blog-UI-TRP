import { PostData } from "../../types";

export interface PostClientStructure {
  getPost: () => void;
  createPost: (post: PostData) => void;
}
