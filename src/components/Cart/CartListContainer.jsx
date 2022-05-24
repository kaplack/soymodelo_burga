import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/CartContext";
//import data from "../../data/data.json";
import CartList from "./CartList";
import CartSum from "./CartSum";

const CartListContainer = () => {
  //const item = data;

  const { products } = useContext(GlobalContext);

  return (
    <section>
      <div className="cartList row">
        <div className="cartList__title">
          <h1>Cart</h1>
        </div>
        <CartSum />
        <CartList products={products} />
      </div>
    </section>
  );
};

export default CartListContainer;
