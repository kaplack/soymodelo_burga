import React, { useContext } from "react";
import { GlobalContext } from "../../context/CartContext";

const CartSum = () => {
  const { carrito } = useContext(GlobalContext);

  let total = carrito.reduce((a, b) => a + b.price * b.q, 0);

  return <div>total es {total}</div>;
};

export default CartSum;
