import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

function Item({ tour }) {
  //console.log(tour);

  return (
    <li className="item">
      <div className="item__img">
        <Link to={`/item-detail/${tour.id}`}>
          <img src={tour.img} alt={tour.excerpt} />
        </Link>
      </div>
      <div className="item__content">
        <Link to={`/item-detail/${tour.id}`}>
          <h2>{tour.name}</h2>
        </Link>
        <p>{tour.excerpt}</p>
      </div>
      <ItemCount />
    </li>
  );
}

export default Item;
