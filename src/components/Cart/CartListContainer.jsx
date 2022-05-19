import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import CartList from "./CartList";

const CartListContainer = () => {
  const item = data;

  const [tours, setTours] = useState([]);

  useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(item);
      }, 2000);
    });
    pedido.then(
      (res) => {
        setTours(res);
      },
      (err) => {
        console.log("error", err);
      }
    );
  }, []);

  return (
    <section>
      <div className="cartList row">
        <div className="cartList__title">
          <h1>Cart</h1>
        </div>
        <CartList tours={tours} />
      </div>
    </section>
  );
};

export default CartListContainer;