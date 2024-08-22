import type { Post as PostCard } from "../../types";
import "./PostCard.css";

interface PostCardProps {
  post: PostCard;
}

const PostCard = ({
  post: { author, content, date, title },
}: PostCardProps): React.ReactElement => {
  return (
    <li>
      <article className="post">
        <span className="post__author">{author}</span>
        <div className="post__container">
          <h2 className="post__title">{title}</h2>
          <p>{content}</p>
        </div>
        <span className="post__date">{date}</span>
      </article>
    </li>
  );
};

export default PostCard;
