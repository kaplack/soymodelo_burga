import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/CartContext";
import db from "../../service/firebase";
import { getDocs, collection } from "firebase/firestore";
//import data from "../../data/data.json";
import CartList from "./CartList";

const CartListContainer = () => {
  //const item = data;

  //const { products } = useContext(GlobalContext);
  const { products, setProducts } = useContext(GlobalContext);

  // useEffect(() => {
  //   const getData = async () => {
  //     const col = collection(db, "productos");
  //     try {
  //       const data = await getDocs(col);
  //       const result = data.docs.map(
  //         (doc) => (doc = { id: doc.id, ...doc.data() })
  //       );
  //       setProducts(result);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();

  //   return () => {};
  // }, []);

  return (
    <section>
      <div className="cartList row">
        <CartList products={products} />
      </div>
    </section>
  );
};

export default CartListContainer;
