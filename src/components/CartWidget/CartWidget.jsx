import React, { useState, useContext, useEffect } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GlobalContext } from "../../context/CartContext";

export default function CartIcon() {
  const { carrito } = useContext(GlobalContext);
  // const [quantity, setQuantity] = useState(0);

  // useEffect(() => {
  //   let qqq = carrito.reduce((a, b) => a + b.q, 0);
  //   console.log(qqq);
  //   setQuantity(qqq);
  //   return () => {};
  // }, [carrito]);

  return (
    <div className="nav__menu--cart">
      {carrito.length > 0 && (
        <>
          <MdOutlineShoppingCart size="1.5em" />
          <span className="cart-q">{carrito.reduce((a, b) => a + b.q, 0)}</span>
        </>
      )}
    </div>
  );
}
