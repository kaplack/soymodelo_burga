import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import { GlobalContext } from "../../context/CartContext";

function MyNavbar() {
  const { carrito, showCart } = useContext(GlobalContext);
  const { loggedIn } = useAuthStatus();

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
              {loggedIn ? (
                <li>
                  <NavLink to="/profile">Perfil</NavLink>
                </li>
              ) : (
                <li>
                  <NavLink to="/signin">Sign In</NavLink>
                </li>
              )}
              {showCart > 0 && (
                <>
                  <li>
                    <NavLink to="/checkout">Checkout</NavLink>
                  </li>

                  <li>
                    <CartWidget />
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
export default MyNavbar;
