// The navbar has a simple design and with the links on the left of the page and the links have a blinking typing thing when selected

import "../styles/navbar.scss";
import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Christoffer Kronblad</div>
      <a href="##" className="toggle-button" onClick={() => setActive(!active)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={active ? "active nav-links" : "nav-links"}>
        <ul>
          <li>
            <a href="#home" onClick={() => setActive(!active)}>
              Home
            </a>
          </li>
          <li>
            <a href="#welcome" onClick={() => setActive(!active)}>
              Welcome
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setActive(!active)}>
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
