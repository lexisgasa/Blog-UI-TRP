import { Post } from "../types";

const getPosts = async (): Promise<Post> => {
  const apiResponse = await fetch(`${import.meta.env.VITE_API_URL}posts`);

  return apiResponse.json();
};

export default getPosts;
