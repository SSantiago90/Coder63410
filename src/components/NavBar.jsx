import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <h2 className="navbar-brand">MiApp</h2>
      </div>
      <ul className="navbar-nav">
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>

        <li>
          <NavLink to="/item">Detalle</NavLink>
        </li>
        <li>
          <NavLink to="/category/textiles">Textiles</NavLink>
        </li>
        <li>
          <NavLink to="/category/regalos">Regalos</NavLink>
        </li>
        <li>
          <NavLink to="/category/decoracion">Decoración</NavLink>
        </li>
        <li>
          <a href="https://www.instagram.com/">Nuestras redes</a>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
}
