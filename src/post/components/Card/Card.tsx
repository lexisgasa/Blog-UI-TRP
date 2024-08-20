import "./Card.css";

interface PostProps {
  title: string;
}

const Card = ({ title }: PostProps): React.ReactElement => {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
    </div>
  );
};

export default Card;
