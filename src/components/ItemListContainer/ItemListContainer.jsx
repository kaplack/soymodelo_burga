import React, { useContext, useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import data from "../../data/data.json";
import { useLocation, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/CartContext";

// import { db } from "../../service/firebase";
// import { doc, getDoc } from "firebase/firestore";

export default function ItemListContainer() {
  const item = data;

  const { tours, setTours } = useContext(GlobalContext);

  useEffect(() => {
    //1. Indicas la base de datos
    // const item = doc(db, "productos", "laBvCe1nNFuXVc1LpTbY");

    // getDoc(item).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     setTours([...tours, { id: snapshot.nombre, ...snapshot.data() }]);
    //   }
    // });

    //2. de que coleccion

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
    return () => {};
  }, []);

  const cat = useParams();
  let toursFiltered = [];
  if (cat.id) {
    tours.map((ele) => {
      if (ele.category == cat.id) {
        toursFiltered.push(ele);
      }
    });
  }

  return (
    <section>
      <div className="itemList row">
        <h1>Lista de Tours</h1>
        <ItemList tours={cat.id ? toursFiltered : tours} />
      </div>
    </section>
  );
}
