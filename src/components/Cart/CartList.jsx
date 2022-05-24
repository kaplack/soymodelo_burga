import React, { useContext } from "react";
import { GlobalContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartList = ({ products }) => {
  const { carrito } = useContext(GlobalContext);
  //console.log(carrito);
  let newArr = [];
  const createArr = () => {
    carrito.map((car) => {
      products.map((p) => {
        p.id == car.id && newArr.push(p);
      });
      //newArr += tours.filter((t) => t.id == car.id);
    });
    console.log(newArr);
  };
  createArr();

  return (
    <div className="cartList__items">
      <ul className="cart">
        {newArr.length > 0 ? (
          newArr.map((itm) => {
            return <CartItem newArray={itm} key={itm.id} />;
          })
        ) : (
          <>
            <p>El carrito esta vacio</p>
            <Link to="/" className="btn btn-ghost">
              Volver al Home
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default CartList;
