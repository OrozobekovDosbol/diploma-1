import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

export default function ProductList( {category} ) {
  const { products } = useContext(AppContext);

  const output = products.filter(product => product.category === category.id)
  .map(product => (
    <div key={product.id} className="Product">
      <a href={'/products/' + product.slug}>
      <img src={product.picture} alt={product.name} width="200px" />
      </a>
      <NavLink to={'/products/' + product.slug}>
        {product.name}
      </NavLink>
      <span><strong>Price:</strong>{product.price} som</span>
      <AddToCart product={product} />
      <DeleteProduct product={product} />
    </div>
  ))
  return (
    <div className="ProductList">
      {output}

      <AddProduct category={category} />
    </div>
  )
}