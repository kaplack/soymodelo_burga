import React, { useContext } from "react";
import Formulario from "../components/Formulario/Formulario";
import { GlobalContext } from "../context/CartContext";

function Checkout() {
  const { carrito } = useContext(GlobalContext);
  return (
    <div>
      <div>
        <h1>Checkout</h1>
      </div>

      <Formulario total={1000} compra={carrito} />
    </div>
  );
}

export default Checkout;
