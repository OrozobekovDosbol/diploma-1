import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  let menuBtn = document.querySelectorAll(".NavItem a");
  let menu = document.querySelector(".Drawer");
  menuBtn.forEach((el) => {
    el.addEventListener("click", function () {
      menu.classList.remove("open");
    });
  });
  return (
    <nav className="Nav">
      <ul>
        <li className="NavItem">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/delivery">Delivery</NavLink>
        </li>
      </ul>
    </nav>
  );
}
