import React from "react";

function Header() {
  return (
    <header className="navbar">
      <h1>Cats</h1>
      <ul className="menu">
        <li><a className="menu-link" href="/Inicio">Inicio</a></li>
        <li><a className="menu-link" href="/CreateArea">Mis curiosidades</a></li>
      </ul>
    </header>
  );
}

export default Header;
