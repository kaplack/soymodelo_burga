import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { GlobalContext } from "../../context/CartContext";

const CartItem = ({ newArray }) => {
  const { carrito } = useContext(GlobalContext);

  const quantity = (itid) => {
    carrito.map((car) => {
      if (car.id == itid) {
        console.log(car.q);
        return car.q;
      }
    });
  };

  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={newArray.img} alt="" />
      </div>
      <div className="cart-item__content">
        <h1>{newArray.name}</h1>
        <p>{newArray.excerpt}</p>
        <div className="cart-item__content--info">
          <p>{newArray.price} PEN</p>
          <p>Cantidad: {quantity(newArray.id)}</p>
        </div>
      </div>
      <div className="cart-del-icon">
        <MdDeleteForever size="1.5em" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default CartItem;
