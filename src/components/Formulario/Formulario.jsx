import React, { useState } from "react";
import Input from "./Input";
//import useFirebase from "../../hooks/useFirebase";
import db from "../../service/firebase";
import { addDoc, collection } from "firebase/firestore";

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
      console.log("order ok", order.id);
    } catch (error) {
      console.log(error);
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
    <div>
      <form onSubmit={handleSubmit} className="checkout-form">
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
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
