import React from "react";
import Item from "../Item/Item";

function ItemList({ products }) {
  return (
    <div className="items">
      <ul>
        {products.length > 0 ? (
          products.map((product) => {
            return <Item product={product} key={product.id} />;
          })
        ) : (
          <li>Cargando...</li>
        )}
      </ul>
    </div>
  );
}

export default ItemList;
