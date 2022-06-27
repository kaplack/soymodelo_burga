import { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import ItemCount from "../components/Item/ItemCount";
import { GlobalContext } from "../context/CartContext";
import db from "../service/firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function ItemDetail() {
  const tid = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const item = doc(db, "productos", tid.id);
    getDoc(item).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      }
    });
  }, []);
  let detail = product;

  const { quant, setQuant, loadCarrito, isInCart, setShowCart, products } =
    useContext(GlobalContext);

  // const { products, quant, loadCarrito, isInCart, setShowCart } =
  //   useContext(GlobalContext);
  // console.log(products);
  // let detail = products.filter((e) => e.id === tid.id)[0];

  const addItem = () => {
    const car = {
      id: detail.id,
      q: quant,
      price: detail.price,
    };
    const prod = products.filter((item) => item.id === car.id);
    if (prod[0].stock >= car.q) {
      loadCarrito(car);

      setShowCart((prevState) => prevState + 1);
    } else {
      toast.error(`Lo sentimos el stock es insuficiente`);
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
            <div className="detail__content--price-box">
              <span>Stock: </span>
              <p>{detail.stock > 0 ? detail.stock : "Agotado"}</p>
            </div>
            <div className="detail__content--buttons">
              {!isInCart(detail.id) && <ItemCount />}
              {!isInCart(detail.id) ? (
                <button onClick={addItem} className="detail-btn">
                  Agregar al Carrito
                </button>
              ) : (
                <div className="btn-flex">
                  <Link to="/checkout" className="btn btn-ghost">
                    Terminar compra
                  </Link>
                  <Link to="/" className="btn btn-ghost">
                    Seguir Comprando
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;
