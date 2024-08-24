import { Post, PostDto } from "../types";

const getPosts = async (): Promise<Post[]> => {
  const apiResponse = await fetch(`${import.meta.env.VITE_API_URL}posts`);

  const apiPostsDto = (await apiResponse.json()) as PostDto[];

  const posts = apiPostsDto.map<Post>((apiPostDto) => ({
    ...apiPostDto,
    date: new Date(apiPostDto.date),
  }));

  return posts;
};

export default getPosts;
