import React, { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GlobalContext } from "../../context/CartContext";

export default function CartIcon() {
  const { carrito } = useContext(GlobalContext);

  return (
    <div className="nav__menu--cart">
      <MdOutlineShoppingCart size="1.5em" />
      <span className="cart-q">{carrito.reduce((a, b) => a + b.q, 0)}</span>
    </div>
  );
}
