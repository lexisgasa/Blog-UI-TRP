import { Post, PostDto, PostData as PostData } from "../../types";
import { PostClientStructure } from "./types";

export class PostsClient implements PostClientStructure {
  async getPost(): Promise<Post[]> {
    const apiResponse = await fetch(`${import.meta.env.VITE_API_URL}posts`);

    const apiPostsDto = (await apiResponse.json()) as PostDto[];

    const posts = apiPostsDto.map<Post>((apiPostDto) => ({
      ...apiPostDto,
      date: new Date(apiPostDto.date),
    }));

    return posts;
  }

  async createPost(postData: PostData): Promise<Post> {
    const newPostData: Post = {
      ...postData,
      id: crypto.randomUUID(),
    };

    const response = await fetch(`${import.meta.env.VITE_API_URL}posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPostData),
    });

    if (!response.ok) {
      throw new Error("There was an error sending the post");
    }

    const newPost = (await response.json()) as Post;

    return newPost;
  }
}
