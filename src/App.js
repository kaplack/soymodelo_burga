import "./scss/style.scss";
import MyRoutes from "./routes/MyRoutes";
import CartContext from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartContext>
        <MyRoutes />
      </CartContext>
    </div>
  );
}

export default App;
