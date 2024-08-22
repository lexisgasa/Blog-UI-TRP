import { useState } from "react";
import PostsList from "../../components/PostsList/PostsList";
import "./PostsListPage.css";
import { Post } from "../../types";

export const PostsListPage = (): React.ReactElement => {
  const [posts] = useState<Post[]>([]);

  return (
    <>
      <h2 className="post-list">Posts List</h2>
      <PostsList posts={posts} />
    </>
  );
};

export default PostsListPage;
