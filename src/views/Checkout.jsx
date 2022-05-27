import React, { useContext } from "react";
import CartListContainer from "../components/Cart/CartListContainer";
import CartSum from "../components/Cart/CartSum";
import Formulario from "../components/Formulario/Formulario";
import { GlobalContext } from "../context/CartContext";

function Checkout() {
  const { carrito } = useContext(GlobalContext);
  return (
    <div className="grid-row">
      <div className="center">
        <h1>Checkout</h1>
      </div>
      <div className="col-1-of-2">
        <CartListContainer />
      </div>
      <div className="col-1-of-2">
        <Formulario total={1000} compra={carrito} />
        <CartSum />
      </div>
    </div>
  );
}

export default Checkout;
