import React from "react";
import ItemCount from "../ItemCount/ItemCount";

function Item({ tour }) {
  //console.log(tour);

  return (
    <li className="item" key={tour.id}>
      <div className="item__img">
        <img src={tour.img} alt={tour.descripcion} />
      </div>
      <div className="item__content">
        <h2>{tour.nombre}</h2>
        <p>{tour.descripcion}</p>
      </div>
      <ItemCount />
    </li>
  );
}

export default Item;
