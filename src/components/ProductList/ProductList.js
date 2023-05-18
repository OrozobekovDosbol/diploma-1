import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .filter((product) => product.category === category.id)
    .map((product) => (
      <div key={product.id} className="Product">
        <div className="product-picture">
          <NavLink to={"/products/" + product.slug}>
            <img src={product.picture}  alt={product.name} />
            < hr />
            <p>{product.name}</p>
          </NavLink>
        </div>
        <div className="product-price">
          <span>
            <strong>Price:</strong> ${product.price}
          </span>
          <AddToCart product={product} />
          <DeleteProduct product={product} />
        </div>
      </div>
    ));
  return (
    <div className="ProductList">
      {output}

      <AddProduct category={category} />
    </div>
  );
}
