import { useState } from "react";
import type { Post } from "../../types";
import "./PostCard.css";

interface PostCardProps {
  post: Post;
}

const PostCard = ({
  post: { author, content, date, title, alternativeText, imageUrl },
}: PostCardProps): React.ReactElement => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const contentToShow = isExpanded ? content : content.substring(0, 200);

  return (
    <article className="post">
      <span className="post__author">{author}</span>
      <div className="post__container">
        <h2 className="post__title">{title}</h2>
        <img
          className="post__image"
          src={imageUrl}
          alt={alternativeText}
          width={300}
          height={300}
        ></img>
        <p className="post__content">
          {contentToShow}
          {!isExpanded && content.length > 200 && <span>...</span>}
        </p>
        <button onClick={handleReadMore} className="post__button">
          {isExpanded ? "Leer menos" : "Leer más"}
        </button>
      </div>
      <span className="post__date">{date.toLocaleDateString()}</span>
    </article>
  );
};

export default PostCard;
