import { useEffect, useState } from "react";
import PostsList from "../../components/PostsList/PostsList";
import { Post } from "../../types";
import getPosts from "../../api/getPosts";
import "./PostsListPage.css";

export const PostsListPage = (): React.ReactElement => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const apiPosts = await getPosts();
      setPosts(apiPosts);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <h2 className="post-list">Posts List</h2>
      <PostsList posts={posts} />
    </>
  );
};

export default PostsListPage;
