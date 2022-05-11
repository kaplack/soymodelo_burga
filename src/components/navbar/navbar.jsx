import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

export default function Navbar() {
  return (
    <div className="nav row">
      <div className="logo">
        <Link to="/">
          <h1 className="titulo">TourMap</h1>
        </Link>
      </div>
      <div className="nav__menu">
        <nav className="nav__menu--main">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/checkout">Checkout</NavLink>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </div>
  );
}
