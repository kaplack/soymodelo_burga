import { useState, CreateContext } from "react";

//1. le dices a react que este archivo es un context y declaras el nombre del context
export const GlobalContext = CreateContext();

//proveedor
const GlobalStateContext = ({ children }) => {
  //proveer info y almacenar info

  // 3. traes los states q usas
  const [quant, setQuant] = useState(0);

  return (
    //2. señalas que la constante GlobalContext es un proveedor a sus hijos
    <GlobalContext.Provider value={{ quant, setQuant }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateContext;
