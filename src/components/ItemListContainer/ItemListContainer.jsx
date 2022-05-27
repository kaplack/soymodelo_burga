import React, { useContext, useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/CartContext";
import db from "../../service/firebase";
import { docs, getDocs, collection, query, where } from "firebase/firestore";

export default function ItemListContainer() {
  //const item = data;

  const { products, setProducts } = useContext(GlobalContext);
  const [prodFiltered, setProdFiltered] = useState([]);
  //const [catry, setCatry] = useState("");

  //const cat = useParams();

  const getData = async () => {
    const col = collection(db, "productos");
    try {
      const data = await getDocs(col);
      const result = data.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setProducts(result);
    } catch (error) {
      console.log(error);
    }
  };

  //let prodFiltered = [];
  const getDataFiltered = async () => {
    const col = collection(db, "productos");

    const q = query(col, where("category", "==", cat.id));

    try {
      const data = await getDocs(q);
      const result = data.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setProdFiltered(result);
      //console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //console.log(cat.id);
    //if (cat.id) {
    //getDataFiltered();
    //} else {
    getData();
    //}

    //2. de que coleccion

    // const pedido = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(item);
    //   }, 2000);
    // });
    // pedido.then(
    //   (res) => {
    //     setTours(res);
    //   },
    //   (err) => {
    //     console.log("error", err);
    //   }
    // );
  }, []);

  const cat = useParams();
  let productsFiltered = [];
  //console.log(cat.id);
  if (cat.id) {
    productsFiltered = products.filter((ele) => ele.category == cat.id);
  }
  //console.log(productsFiltered);
  return (
    <section>
      <div className="itemList row">
        <h1>Productos</h1>
        <p>Fotografias publicadas recientemente.</p>
        <ItemList products={cat.id ? productsFiltered : products} />
      </div>
    </section>
  );
}
