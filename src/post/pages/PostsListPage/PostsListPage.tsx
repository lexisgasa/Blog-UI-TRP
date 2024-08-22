import PostsList from "../../components/PostsList/PostsList";
import "./PostsListPage.css";

export const PostsListPage = (): React.ReactElement => {
  return (
    <>
      <h2 className="post-list">Posts List</h2>
      <PostsList posts={[]} />
    </>
  );
};

export default PostsListPage;
