import React from "react";

export default function Navbar() {
  return (
    <div className="nav row">
      <div className="logo">
        <h1 className="titulo">Soy Modelo</h1>
      </div>
      <nav className="nav__main">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Tienda</a>
          </li>
          <li>
            <a href="#">Mi cuenta</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
