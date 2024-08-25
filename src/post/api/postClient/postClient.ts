import { Post, PostDto } from "../../types";
import { PostClientStructure } from "./types";

export class PostClient implements PostClientStructure {
  getPost = async (): Promise<Post[]> => {
    const apiResponse = await fetch(`${import.meta.env.VITE_API_URL}posts`);

    const apiPostsDto = (await apiResponse.json()) as PostDto[];

    const posts = apiPostsDto.map<Post>((apiPostDto) => ({
      ...apiPostDto,
      date: new Date(apiPostDto.date),
    }));

    return posts;
  };

  sendPost = async (post: Post): Promise<Post> => {
    const postDto: PostDto = {
      ...post,
      date: post.date.getTime(),
      imageUrl: "",
      alternativeText: "",
    };

    const response = await fetch(`${import.meta.env.VITE_API_URL}posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postDto),
    });

    if (!response.ok) {
      throw new Error("There was an error sending the post");
    }

    const returnedPostDto = (await response.json()) as PostDto;

    const returnedPost: Post = {
      ...returnedPostDto,
      date: new Date(returnedPostDto.date),
    };

    return returnedPost;
  };
}
