import { useEffect, useMemo, useState } from "react";
import PostsList from "../../components/PostsList/PostsList";
import { Post } from "../../types";
import { PostsClient } from "../../api/postsClient/PostsClient";
import "./PostsListPage.css";

export const PostsListPage = (): React.ReactElement => {
  const postClient = useMemo(() => new PostsClient(), []);

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const apiPosts = await postClient.getPost();
      setPosts(apiPosts);
    };

    fetchPosts();
  }, [postClient]);

  return (
    <>
      <h2 className="post-list">Posts List</h2>
      <PostsList posts={posts} />
    </>
  );
};

export default PostsListPage;
