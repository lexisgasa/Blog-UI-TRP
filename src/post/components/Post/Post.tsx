import "./Post.css";

interface PostProps {
  title: string;
  author: string;
  content: string;
  date: string;
}

const Post = ({
  title,
  author,
  content,
  date,
}: PostProps): React.ReactElement => {
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

export default Post;
