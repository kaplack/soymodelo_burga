import React, { useContext } from "react";
import { GlobalContext } from "../../context/CartContext";

const CartSum = () => {
  const { carrito } = useContext(GlobalContext);

  let total = carrito.reduce((a, b) => a + b.price * b.q, 0);
  let quantity = carrito.reduce((a, b) => a + b.q, 0);

  return (
    <div className="summary">
      <div className="summary-box">
        <div className="summary-box__quantity">
          Cantidad: {quantity} {quantity > 1 ? "Fotografias." : "Fotografia."}
        </div>
        <div className="summary-box__total">Total: {total} PEN</div>
      </div>
    </div>
  );
};

export default CartSum;
