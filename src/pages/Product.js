import { useContext } from "react";
import { useMatch } from "react-router";
import { AppContext } from "../App";
import NotFound from "./NotFound";
import AddToCart from "../components/AddToCart/AddToCart";

export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);

  const product = products.find((product) => product.slug === params.slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="Product">
      <img className="product_img" src={product.picture} alt={product.name} />
      <h1>{product.name}</h1>
      <span>
        <strong>Price:</strong> ${product.price}
      </span>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <div className="AddToCart-product">
        <AddToCart product={product} />
      </div>
    </div>
  );
}
