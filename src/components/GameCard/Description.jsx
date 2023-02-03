import "./GameCard.css";
import { CartPlus } from "../../svg/CartPlus";

export const Description = ({ title, price }) => {
  return (
    <div className="GameCard__desc">
      <p className="GameCard__desc--title">{title}</p>
      <p className="GameCard__desc--price">{price}</p>
      <CartPlus className="GameCard__desc--buy"/>
      <p className="GameCard__desc--more">
        More Info<i className="fa-solid fa-angle-down"></i>
      </p>
    </div>
  );
};
