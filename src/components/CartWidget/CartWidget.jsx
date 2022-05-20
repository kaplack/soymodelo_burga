import React, { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GlobalContext } from "../../context/CartContext";

export default function CartIcon() {
  const { carrito } = useContext(GlobalContext);

  let quantity = carrito.reduce((a, b) => a + b.q, 0);
  //console.log(quantity);
  return (
    <div className="nav__menu--cart">
      {quantity > 0 && (
        <>
          <MdOutlineShoppingCart size="1.5em" />
          <span className="cart-q">{quantity}</span>
        </>
      )}
    </div>
  );
}
