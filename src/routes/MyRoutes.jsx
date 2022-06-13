import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Checkout from "../views/Checkout";

import NotFound from "../views/NotFound";
import ItemDetail from "../views/ItemDetail";
import Tienda from "../views/Tienda";
import Layout from "../components/Layout";
import SignIn from "../views/SignIn";
import ForgotPassword from "../views/ForgotPassword";
import SignUp from "../views/SignUp";
import Profile from "../views/Profile";
import CreateProduct from "../views/CreateProduct";

function MyRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="/item-detail/:id" element={<ItemDetail />} />
            <Route path="/category/:id" element={<Tienda />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/publicar" element={<CreateProduct />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyRoutes;
