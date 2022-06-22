import React, { useState, useContext } from "react";
import Input from "./Input";
//import useFirebase from "../../hooks/useFirebase";
import db from "../../service/firebase";
import { addDoc, collection } from "firebase/firestore";
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
  const { setCarrito } = useContext(GlobalContext);
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
      toast.success(`se cargo su orden ${order.id}`);
      setCarrito([]);
      navigate("/");
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
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Formulario;
