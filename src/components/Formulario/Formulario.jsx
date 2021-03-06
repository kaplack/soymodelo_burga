import React, { useState, useContext } from "react";
import Input from "./Input";
//import useFirebase from "../../hooks/useFirebase";
import db from "../../service/firebase";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/CartContext";

const Formulario = ({ total, compra }) => {
  const [formulario, setFormulario] = useState({
    buyer: {
      email: "",
      name: "",
      lastname: "",
      phone: "",
    },
    total: total,
    items: compra,
  });
  const navigate = useNavigate();
  const { carrito, setCarrito, products, setShowCart, setQuant, showCart } =
    useContext(GlobalContext);
  const [error, setError] = useState({});
  const {
    buyer: { email, name, lastname, phone },
  } = formulario;

  const generateTicket = async ({ data }) => {
    //setLoading(true)
    try {
      const col = collection(db, "orders");
      const order = await addDoc(col, data);
      //setLoading(false)

      //update stock
      await data.items.map((item) => {
        const productDoc = doc(db, "productos", item.id);
        let itemProd = products.filter((prod) => prod.id == item.id);

        updateDoc(productDoc, {
          stock: itemProd[0].stock - item.q,
        });
      });

      setCarrito([]);
      setShowCart(0);
      setQuant(1);
      navigate("/");
      toast.success(`se cargo su orden ${order.id}`);
    } catch (error) {
      toast.error(`lo siento no se pudo cargar su orden`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateTicket({ data: formulario });
  };

  const formHandleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      buyer: { ...formulario.buyer, [name]: value },
    });
  };
  const labelArray = ["Ingresa tu email", "Nombre", "Apellido", "Teléfono"];
  //let total = carrito.reduce((a, b) => a + b.price * b.q, 0);
  let disable = showCart < 1 ? true : false;
  return (
    <section>
      <form onSubmit={handleSubmit} className="checkout-form">
        <p>Finaliza tu compra llenando el siguiente formulario.</p>
        {Object.keys(formulario.buyer).map((key, index) => (
          <Input
            key={index}
            type="text"
            className="checkout-form__input"
            vName={`${key}`}
            placeHolder={labelArray[index]}
            onChange={formHandleChange}
          />
        ))}
        <div className="checkout-form__submit">
          <button
            type="submit"
            className="checkout-form__submit--button btn btn-ghost"
            disabled={disable}
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Formulario;
