import "./GameCard.css";

export const Description = ({ title, price }) => {
  return (
    <div className="GameCard__desc">
      <p className="GameCard__desc--title">{title}</p>
      <p className="GameCard__desc--price">{price}</p>
      <i className="GameCard__desc--buy fa-solid fa-cart-plus"></i>
      <p className="GameCard__desc--more">
        More Info<i className="fa-solid fa-angle-down"></i>
      </p>
    </div>
  );
};
