import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { GlobalContext } from "../../context/CartContext";

const CartItem = ({ newArray }) => {
  console.log(newArray);
  const { carrito, setCarrito, setShowCart, showCart } =
    useContext(GlobalContext);
  let cItem = {};
  const quantity = (itid) => {
    cItem = carrito.filter((car) => car.id == itid);
    return cItem[0].q;
  };

  const handleDelete = (item_id) => {
    setCarrito(carrito.filter((e) => e.id !== item_id));
    setShowCart((prevState) => prevState - 1);
    //window.localStorage.removeItem("lsCarrito");
    window.localStorage.setItem(
      "lsCarrito",
      JSON.stringify(carrito.filter((e) => e.id !== item_id))
    );
  };

  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={newArray.img} alt="" />
      </div>
      <div className="cart-item__content">
        <h2>{newArray.name}</h2>
        <p>{newArray.excerpt}</p>
        <div className="cart-item__content--info">
          <p>Cantidad: {quantity(newArray.id)}</p>
          <p>{newArray.price} PEN</p>
        </div>
      </div>
      <div className="cart-del-icon">
        <MdDeleteForever
          size="1.5em"
          onClick={() => handleDelete(newArray.id)}
        />
      </div>
    </div>
  );
};

export default CartItem;
