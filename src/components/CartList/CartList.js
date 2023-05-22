import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import "./CartList.css";

export default function CartList() {
  const { products, cart, setCart } = useContext(AppContext);

  function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  const ProductCounter = ({ product }) => {
    const [count, setCount] = useState(cart[product.id]);

    const handleIncrement = () => {
      setCount(count + 1);
      setCart({
        ...cart,
        [product.id]: count + 1,
      });
    };

    const handleDecrement = () => {
      if (count > 1) {
        setCount(count - 1);
        setCart({
          ...cart,
          [product.id]: count - 1,
        });
      }
    };

    return (
      <div className="Product-counter">
        <button onClick={handleDecrement}>-</button>
        <input type="text" value={count} readOnly/>
        <button onClick={handleIncrement}>+</button>
      </div>
    );
  };

  const productIds = Object.keys(cart);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="CartItem" key={product.id}>
        <div className="img-tovar">
          <img className="Cart_img" src={product.picture} alt="product" />
        </div>
        <div className="tovar-box">
          <NavLink className="CartP" to={"/products/" + product.slug}>
            {product.name}
          </NavLink>
          <div className="tovar-block-1">
            <ProductCounter product={product} />
            <span>${(cart[product.id] * product.price).toFixed(2)}</span>
            <button onClick={() => onItemRemove(product)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    ));

  return <div className="CartList">{output}</div>;
}