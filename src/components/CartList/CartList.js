import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./CartList.css";
import krestik from "../../assets/krestik.png";

export default function CartList() {
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty,
    });
  }

  function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  const productIds = Object.keys(cart);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="CartItem" key={product.id}>
        <div className="img-tovar">

        </div>
        <Link className="CartP" to={"/product/" + product.slug}>
          {product.name}
        </Link>
        <input
          type="number"
          value={cart[product.id]}
          min={1}
          onChange={(event) => onQuantityChange(product, +event.target.value)}
        />
        <span>{(cart[product.id] * product.price).toFixed(2)} som</span>
        <button onClick={() => onItemRemove(product)}>
          <img className="krestik_img" src={krestik} alt="krestik" />
        </button>
      </div>
    ));

  return <div className="CartList">{output}</div>;
}
