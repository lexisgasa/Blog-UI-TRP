import PostForm from "../../components/PostForm/PostForm";
import "./PostFormPage.css";

const PostFormPage = (): React.ReactElement => {
  return (
    <>
      <h2 className="create-post-heading">Create a post</h2>
      <PostForm />
    </>
  );
};

export default PostFormPage;
