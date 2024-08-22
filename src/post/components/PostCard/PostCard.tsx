import type { Post } from "../../types";
import "./PostCard.css";

interface PostCardProps {
  post: Post;
}

const PostCard = ({
  post: { author, content, date, title },
}: PostCardProps): React.ReactElement => {
  return (
    <article className="post">
      <span className="post__author">{author}</span>
      <div className="post__container">
        <h2 className="post__title">{title}</h2>
        <p>{content}</p>
      </div>
      <span className="post__date">{date.toLocaleDateString()}</span>
    </article>
  );
};

export default PostCard;
