import { CartIcon } from "../../svg/CartIcon";
import "./Cart.css"

export const Cart = () => {
  let cartCount = 10;
  
  return (
    <div className="Cart">
      <CartIcon />
      <span>{cartCount}</span>
    </div>
  );
};
