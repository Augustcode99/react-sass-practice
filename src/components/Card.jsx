import cardStyle from "../scss/card.module.scss";

const Card = (props) => {
  return (
    <div className={cardStyle.card}>
      <h1>{props.name}</h1>
      <h4>({props.role})</h4>
      <img src={props.img} alt={props.name} />
      <p>
        <b>Catchphrase:</b> {props.comment}
      </p>
      <button>Choose</button>
    </div>
  );
};

export default Card;
