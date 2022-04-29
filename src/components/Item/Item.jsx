import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

function Item(props) {
  return (
    <li className="item">
      <div className="item__img">
        <img src={props.url} alt={props.excerpt} />
      </div>
      <div className="item__content">
        <h2>{props.title}</h2>
        <p>{props.excerpt}</p>
      </div>
      <ItemCount />
    </li>
  );
}

export default Item;
