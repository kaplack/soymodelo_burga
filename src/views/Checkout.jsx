import React, { useContext, useEffect } from "react";
import CartListContainer from "../components/Cart/CartListContainer";
import CartSum from "../components/Cart/CartSum";
import Formulario from "../components/Formulario/Formulario";
import { GlobalContext } from "../context/CartContext";

function Checkout() {
  //const { carrito } = useContext(GlobalContext);
  //const carrito = {};
  // useEffect(() => {
  //   carrito = JSON.parse(window.localStorage.getItem("lsCarrito"));
  // }, []);
  const carrito = JSON.parse(window.localStorage.getItem("lsCarrito"));
  console.log(carrito);
  let totalBuy = carrito.reduce((a, b) => a + b.q * b.price, 0);

  return (
    <div className="grid-row">
      <div className="center">
        <h1>Checkout</h1>
      </div>
      <div className="col-1-of-2">
        <CartListContainer />
      </div>
      <div className="col-1-of-2">
        <Formulario total={totalBuy} compra={carrito} />
        <CartSum />
      </div>
    </div>
  );
}

export default Checkout;
