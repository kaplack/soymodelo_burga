import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { useAuthStatus } from "../../hooks/useAuthStatus";

export default function Navbar() {
  const { loggedIn } = useAuthStatus();

  //console.log(user.currentUser);
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
                  <NavLink to="/profile">Mi cuenta</NavLink>
                  {/* <NavLink to="/publicar">Publicar</NavLink> */}
                </li>
              ) : (
                <li>
                  <NavLink to="/signin">Sign In</NavLink>
                </li>
              )}

              <li>
                <NavLink to="/checkout">Checkout</NavLink>
              </li>
              {/* {loggedIn && (
                <li>
                  <FaUserAlt />
                </li>
              )} */}
              <li>
                <CartWidget />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
