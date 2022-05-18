import React, { useContext } from "react";
import { GlobalContext } from "../../context/CartContext";
import CartItem from "./CartItem";

const CartList = ({ tours }) => {
  const { carrito } = useContext(GlobalContext);
  //console.log(carrito);
  let newArr = [];
  const createArr = () => {
    carrito.map((car) => {
      tours.map((t) => {
        t.id == car.id && newArr.push(t);
      });
    });
    //console.log(newArr);
  };
  createArr();

  return (
    <div className="items">
      <ul>
        {newArr.length > 0 ? (
          newArr.map((itm) => {
            return <CartItem newArray={itm} key={itm.id} />;
          })
        ) : (
          <li>Cargando...</li>
        )}
      </ul>
    </div>
  );
};

export default CartList;
