import { useLocation, useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount/ItemCount";
import products from "../data/data.json";

function ItemDetail() {
  const tid = useParams();
  let detail = {};
  products.map((e) => {
    if (e.id == tid.id) {
      detail = e;
    }
  });

  const onAdd = (qValue) => {
    console.log(
      `Se tiene en el carrito ${qValue} ${
        qValue > 1 ? "productos." : "producto."
      }`
    );
  };

  return (
    <section>
      <div className="ItemDetail-container row">
        <div className="detail">
          <div className="detail__gallery">
            <img src={detail.img} alt={detail.excerpt} />
          </div>
          <div className="detail__content">
            <h1>{detail.name}</h1>
            <p>{detail.description}</p>
            <div className="detail__content--price-box">
              <p>{detail.price}</p>
              <span> PEN</span>
            </div>
            <div className="detail__content--buttons">
              <ItemCount onAdd={onAdd} />
              <button className="detail-btn">Agregar al Carrito</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;
