import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/CartContext";

function Categories() {
  const { products } = useContext(GlobalContext);

  let catArr = [];
  products.map((e) => {
    return catArr.push(e.category);
  });
  catArr = new Set(catArr);
  catArr = [...catArr];
  //console.log(catArr);
  return (
    <section className="category">
      <div className="category__box">
        {catArr.map((el, index) => {
          return (
            <Link
              className="category__box--link"
              to={`/category/${el}`}
              key={index}
            >
              {el}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Categories;
