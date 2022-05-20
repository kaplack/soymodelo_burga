import { useState, createContext } from "react";

//1. le dices a react que este archivo es un context y declaras el nombre del context
export const GlobalContext = createContext();

//proveedor
const CartContext = ({ children }) => {
  //proveer info y almacenar info

  // 3. traes los states q usas
  const [tours, setTours] = useState([]);
  const [quant, setQuant] = useState(0);
  const [carrito, setCarrito] = useState([]);

  const onAdd = (qValue) => {
    console.log(
      `Se tiene en el carrito ${qValue} ${
        qValue > 1 ? "productos." : "producto."
      }`
    );
  };

  const masUno = () => {
    setQuant(quant + 1);
    if (onAdd) {
      onAdd(quant + 1);
    }
  };

  const menosUno = () => {
    quant > 0 ? setQuant(quant - 1) : console.log(quant);
  };

  const loadCarrito = (obj) => {
    if (carrito.length > 0 && isInCart(obj.id)) {
      //si hay articulos y el id coincide
      carrito.map((item) => {
        if (item.id == obj.id) {
          item.q = obj.q + item.q;
        }
      });
    } else {
      //si no hay articulos o el id no coincide
      let carArr = carrito;
      carArr.push(obj);
      setCarrito(carArr);
    }
  };

  const isInCart = (itemId) => {
    return carrito.some((i) => i.id === itemId);
  };

  return (
    //2. señalas que la constante GlobalContext es un proveedor a sus hijos
    <GlobalContext.Provider
      value={{
        quant,
        setQuant,
        menosUno,
        onAdd,
        masUno,
        carrito,
        setCarrito,
        isInCart,
        loadCarrito,
        tours,
        setTours,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default CartContext;
