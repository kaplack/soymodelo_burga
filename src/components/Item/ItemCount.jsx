import React, { useContext } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { GlobalContext } from "../../context/CartContext";

function ItemCount({ st }) {
  const { quant, menosUno, masUno } = useContext(GlobalContext);

  return (
    <div className="item__qtyButtons">
      <div className="iButton" onClick={menosUno}>
        <AiFillMinusCircle size="1.5em" color="orangered" />
      </div>
      <div>
        <span>{quant}</span>
      </div>
      <div className="iButton" onClick={() => masUno(st)}>
        <AiFillPlusCircle size="1.5em" color="orangered" />
      </div>
    </div>
  );
}

export default ItemCount;
