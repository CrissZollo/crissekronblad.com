// The navbar has a simple design and with the links on the left of the page and the links have a blinking typing thing when selected

import "../styles/navbar.scss";

export default function navbar() {
  return (
    <nav className="navbar">
      <ul className="navItems">
        <div className="links">
          <li className="navItem">
            <p>Home</p>
          </li>
          <li className="navItem">
            <p>Portfolio</p>
          </li>
          <li className="navItem">
            <p>About Me</p>
          </li>
        </div>
      </ul>
    </nav>
  );
}
