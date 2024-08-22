import { Post } from "../../types";
import PostCard from "../PostCard/PostCard";

interface PostListProps {
  posts: Post[];
}

const PostsList = ({ posts }: PostListProps): React.ReactElement => {
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        );
      })}
    </ul>
  );
};

export default PostsList;
