import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const item = [
    {
      id: 1,
      nombre: "Visita China y conoce la gran muralla",
      descripcion: "Ve de cerca la misteriosa y majestuosa muralla China.",
      img: "https://images.unsplash.com/photo-1566234626884-8d1382c2842d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      precio: 1800,
    },
    {
      id: 2,
      nombre: "Te has preguntado como es Tokio?",
      descripcion: "Observa como lo moderno y lo tradicional se mezclan.",
      img: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      precio: 2200,
    },
  ];

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

    //return () => {};
  }, []);

  return (
    <section>
      <div className="itemList row">
        <h1>Lista de Tours</h1>
        <ItemList tours={tours} />
      </div>
    </section>
  );
}
