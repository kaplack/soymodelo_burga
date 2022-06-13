import "./scss/style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyRoutes from "./routes/MyRoutes";
import CartContext from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartContext>
        <MyRoutes />
      </CartContext>
      <ToastContainer />
    </div>
  );
}

export default App;
