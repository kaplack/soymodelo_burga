import React from "react";
import Item from "../Item/Item";

export default function ItemListContainer() {
  return (
    <section>
      <div className="itemList row">
        <h1>Lista de Productos</h1>
        <div className="items">
          <ul>
            <Item
              url="https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/Sony_Playstation_5_Pro_Rendervideo.jpeg"
              title="PS5"
              excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </ul>
        </div>
      </div>
    </section>
  );
}
