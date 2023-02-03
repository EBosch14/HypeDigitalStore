import { CartIcon } from "../../svg/CartIcon";
import "./Cart.css";
import { useState } from "react";

export const Cart = () => {
  const [cartCount, setCartCount] = useState(12);
  const [isOpended, setIsOpened] = useState(false);

  const onOpenModal = () => {
    setIsOpened(true);
  };

  const onCloseModal = () => {
    setIsOpened(false);
  };
  return (
    <>
      <div className="Cart" onClick={onOpenModal}>
        <CartIcon />
        <span>{cartCount}</span>
      </div>
      <dialog className="Modal" open={isOpended}>
        <div>hola</div>
        <button onClick={() => onCloseModal()}>E x i t</button>
      </dialog>
    </>
  );
};
