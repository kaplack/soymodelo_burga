import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

export default function Navbar() {
  return (
    <section className="nav-section">
      <div className="nav row">
        <div className="nav__logo">
          <Link to="/">
            <img src="/img/SM_logo.png" alt="Logo SoyModelo" />
          </Link>
        </div>
        <div className="nav__menu">
          <nav className="nav__menu--main">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {/* <li>
                <NavLink to="/cart">Cart</NavLink>
              </li> */}
              <li>
                <NavLink to="/checkout">Checkout</NavLink>
              </li>
            </ul>
          </nav>
          <CartWidget />
        </div>
      </div>
    </section>
  );
}
