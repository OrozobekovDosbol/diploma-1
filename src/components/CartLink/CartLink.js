import { useContext } from "react";
import "./CartLink.css"
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  // вычислить количество товаров
  const total = Object.values(cart).reduce(
    (acc, num) => acc + num, 0
  );

  return (
    <div  className="CartLink">
      <NavLink to="/cart">
        <div className="myCart">
          <img src="https://svgsilh.com/svg/306793.svg" alt="logo-cart" className="cartLogo"/> 
          <p>My cart</p>
        </div>
        <span>Number of goods: {total}</span>
      </NavLink>
    </div>
  )
}
