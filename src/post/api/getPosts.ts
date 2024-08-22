import { Post } from "../types";

const getPosts = async (): Promise<Post[]> => {
  const apiResponse = await fetch(`${import.meta.env.VITE_API_URL}posts`);

  const apiPostsDto = (await apiResponse.json()) as Post[];

  const posts = apiPostsDto.map<Post>((apiPostDto) => {
    const post: Post = {
      id: apiPostDto.id,
      author: apiPostDto.author,
      title: apiPostDto.title,
      content: apiPostDto.content,
      date: new Date(apiPostDto.date),
    };

    return post;
  });

  return posts;
};

export default getPosts;
