import './Card.scss';

const Card = (props) => {
  const { card } = props;
  return (
    <li className="card-item">
      {card.cover && (
        <img src={card.cover} alt="tranvanhao-alt-img" className="card-cover" />
      )}
      {card.title}
    </li>
  );
};

export default Card;
