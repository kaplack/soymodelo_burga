import React from "react";
import CartWidget from "../CartWidget/CartWidget";

export default function Navbar() {
  return (
    <div className="nav row">
      <div className="logo">
        <h1 className="titulo">Soy Modelo</h1>
      </div>
      <div className="nav__menu">
        <nav className="nav__menu--main">
          <ul>
            <li>
              <a href="https://google.com">Inicio</a>
            </li>
            <li>
              <a href="https://google.com">Blog</a>
            </li>
            <li>
              <a href="https://google.com">Tienda</a>
            </li>
            <li>
              <a href="https://google.com">Mi cuenta</a>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </div>
  );
}
