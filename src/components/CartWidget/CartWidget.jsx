import React, { useState, useContext, useEffect } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GlobalContext } from "../../context/CartContext";

export default function CartIcon() {
  const { carrito, showCart } = useContext(GlobalContext);

  return (
    <div className="nav__menu--cart">
      {showCart > 0 ? (
        <>
          <MdOutlineShoppingCart size="1.5em" />
          <span className="cart-q">{carrito.reduce((a, b) => a + b.q, 0)}</span>
        </>
      ) : null}
    </div>
  );
}
