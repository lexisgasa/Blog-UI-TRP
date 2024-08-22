import "./PostsListPage.css";
import PostsList from "../../components/PostsList/PostsList";

export const PostsListPage = (): React.ReactElement => {
  return (
    <>
      <h2 className="post-list">Post List</h2>
      <PostsList />
    </>
  );
};

export default PostsListPage;
