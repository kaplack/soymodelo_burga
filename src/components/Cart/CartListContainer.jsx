import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/CartContext";
import data from "../../data/data.json";
import CartList from "./CartList";
import CartSum from "./CartSum";

const CartListContainer = () => {
  const item = data;

  const { tours, setTours } = useContext(GlobalContext);

  return (
    <section>
      <div className="cartList row">
        <div className="cartList__title">
          <h1>Cart</h1>
        </div>
        <CartSum />
        <CartList tours={tours} />
      </div>
    </section>
  );
};

export default CartListContainer;
