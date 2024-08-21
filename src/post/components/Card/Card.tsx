import "./Card.css";

interface PostProps {
  title: string;
}

const Card = ({ title }: PostProps): React.ReactElement => {
  return (
    <article className="card">
      <h2 className="card__title">{title}</h2>
    </article>
  );
};

export default Card;
