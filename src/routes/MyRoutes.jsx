import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Checkout from "../views/Checkout";
import Cart from "../views/Cart";
import NotFound from "../views/NotFound";
import ItemDetail from "../views/ItemDetail";
import Tienda from "../views/Tienda";
import Layout from "../components/Layout";

function MyRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item-detail/:id" element={<ItemDetail />} />
            <Route path="/category/:id" element={<Tienda />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyRoutes;
