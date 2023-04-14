import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";

export default function ProductList() {
  const { products } = useContext(AppContext);
  const output = products.map(product => (
    <div key={product.id} className="Product">
      <img src={product.picture} alt={product.name} width="200px" />
      <NavLink to={'/products/' + product.slug}>
        {product.name}
      </NavLink>
      <span>{product.price} som</span>
    </div>
  ))
  return (
    <div className="ProductList">
      {output}
    </div>
  )
}