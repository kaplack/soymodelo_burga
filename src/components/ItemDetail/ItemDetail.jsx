import React from "react";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ detail }) {
  return (
    <div className="detail">
      <div className="detail__gallery">
        <img src={detail.img} alt={detail.name} />
      </div>
      <div className="detail__content">
        <h1>{detail.name}</h1>
        <p>{detail.description}</p>
        <div className="detail__content--price-box">
          <p>{detail.price}</p>
          <span> PEN</span>
        </div>
        <div className="detail__content--buttons">
          <ItemCount />
          <button className="detail-btn">Agregar al Carrito</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
