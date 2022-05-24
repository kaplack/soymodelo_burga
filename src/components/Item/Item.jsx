import React from "react";
// import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

function Item({ product }) {
  //console.log(product);

  return (
    <li className="item">
      <div className="item__img">
        <Link to={`/item-detail/${product.id}`}>
          <img src={product.img} alt={product.excerpt} />
        </Link>
      </div>
      <div className="item__content">
        <Link to={`/item-detail/${product.id}`}>
          <h2>{product.name}</h2>
        </Link>
        <p>{product.excerpt}</p>
      </div>
      {/* <ItemCount /> */}
    </li>
  );
}

export default Item;
