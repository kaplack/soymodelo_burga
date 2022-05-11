import React from "react";
import Item from "../Item/Item";

function ItemList({ tours }) {
  return (
    <div className="items">
      <ul>
        {tours.length > 0 ? (
          tours.map((tour) => {
            return <Item tour={tour} key={tour.id} />;
          })
        ) : (
          <li>Cargando...</li>
        )}
      </ul>
    </div>
  );
}

export default ItemList;
