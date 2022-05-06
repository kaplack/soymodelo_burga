import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const itemDet = {
    id: 1,
    name: "Visita China y conoce la gran muralla",
    excerpt: "Ve de cerca la misteriosa y majestuosa muralla China.",
    description:
      "Ve de cerca la misteriosa y majestuosa muralla China. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla sed neque nec varius. Suspendisse nec bibendum urna. Proin eu lorem sed justo aliquet cursus. Nullam nunc erat, elementum in lectus eget, eleifend dignissim tortor. Aliquam blandit urna et mi suscipit, vitae vestibulum erat volutpat. Sed non tincidunt purus, fermentum dictum leo. Aenean vestibulum arcu nec venenatis consequat. Morbi eu est vulputate, volutpat felis ut, rutrum nunc. Praesent egestas erat nec nisl ornare sodales. Morbi sed maximus justo. Ut venenatis feugiat congue. Curabitur vel nunc sed nisl condimentum eleifend ac eu felis. Quisque id mauris sodales turpis mollis pharetra. Donec lobortis mi eget lacinia rutrum. Maecenas aliquam, nunc eu dapibus rutrum, justo lorem viverra sem, eu malesuada odio turpis at mi. Aenean eget dignissim enim, ut vulputate quam. ",
    img: "https://images.unsplash.com/photo-1566234626884-8d1382c2842d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 1800,
  };

  const [detail, setDetail] = useState({});

  useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemDet);
      }, 2000);
    });

    pedido.then(
      (res) => {
        setDetail(res);
        console.log(detail);
      },
      (err) => {
        console.log("error", err);
      }
    );
  }, []);

  return (
    <section>
      <div className="ItemDetail-container row">
        <ItemDetail detail={detail} />
      </div>
    </section>
  );
}

export default ItemDetailContainer;
