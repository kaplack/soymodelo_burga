import { useContext } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount/ItemCount";
import { GlobalContext } from "../context/CartContext";
import products from "../data/data.json";

function ItemDetail() {
  const tid = useParams();
  // let detail = {};
  // products.map((e) => {
  //   if (e.id == tid.id) {
  //     detail = e;
  //   }
  // });
  const { quant, carrito, setQuant, loadCarrito } = useContext(GlobalContext);
  let detail = products.filter((e) => e.id == tid.id)[0];

  const addItem = () => {
    if (quant > 0) {
      const car = {
        id: detail.id,
        q: quant,
        price: detail.price,
      };

      loadCarrito(car);

      //console.log(carrito);
      setQuant(0);
    }
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
              <ItemCount />
              <button onClick={addItem} className="detail-btn">
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;
