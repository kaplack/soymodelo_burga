import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import data from "../../data/data.json";
import { useLocation, useParams } from "react-router-dom";

export default function ItemListContainer() {
  const item = data;

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
