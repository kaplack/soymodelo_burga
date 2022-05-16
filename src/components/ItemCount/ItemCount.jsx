import React, { useContext, useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
//import { GlobalContext } from "../../context/GlobalStateContext";

function ItemCount({ onAdd }) {
  // const { quant, setQuant } = useContext(GlobalContext);
  const [quant, setQuant] = useState(0);

  const masUno = () => {
    setQuant(quant + 1);
    if (onAdd) {
      onAdd(quant + 1);
    }
  };

  const menosUno = () => {
    quant > 0 ? setQuant(quant - 1) : console.log(quant);
  };

  return (
    <div className="item__qtyButtons">
      <div className="iButton" onClick={menosUno}>
        <AiFillMinusCircle size="1.5em" color="orangered" />
      </div>
      <div>
        <span>{quant}</span>
      </div>
      <div className="iButton" onClick={masUno}>
        <AiFillPlusCircle size="1.5em" color="orangered" />
      </div>
    </div>
  );
}

export default ItemCount;
