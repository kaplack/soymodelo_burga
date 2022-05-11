import React from "react";
import data from "../../data/data.json";
import { Link } from "react-router-dom";

function Categories() {
  let catArr = [];
  data.map((e) => {
    catArr.push(e.category);
  });
  catArr = new Set(catArr);
  catArr = [...catArr];
  console.log(catArr);
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
