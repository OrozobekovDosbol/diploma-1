import { useContext } from "react";
import { AppContext } from "../../App";
import "./OrderList.css";
import { NavLink } from "react-router-dom";

export default function OrderList() {
  const { orders, products } = useContext(AppContext);

  if (!orders.length || !products.length) {
    return "No orders found.";
  }

  const output = orders.map((order) => {
    if (!order.cart) return "Empty";
    const cartOutput = Object.keys(order.cart).map((productId) => {
      const product = products.find((product) => product.id === productId);

      if (!product) {
        return "Product not found";
      }

      return (
        <div className="Order-content" key={product.id}>
          <NavLink to={"/products/" + product.slug}>
          <div className="Main-Order">
            <div className="Order-picture">
              <img src={product.picture} alt={product.name} />
            </div>
            <div className="Order-box-1">
              <p>
                <strong>Name: </strong>
                {product.name}
              </p>
              <p>
                <strong>Amount: </strong>
                {order.cart[productId]}X
              </p>
              <p>
                <strong>The price of the product: </strong>${product.price}
              </p>
              <p>
                <strong>Total: </strong>${order.cart[productId] * product.price}
              </p>
            </div>
          </div>
          </NavLink>
        </div>
      );
    });

    return (
      <div key={order.id} className="Order">
        <div className="order-p">
          <strong>Name:</strong> {order.name}
        </div>
        <div className="order-p">
          <strong>Phone: </strong> {order.phone}
        </div>
        <div className="order-p">
          <strong>Address: </strong> {order.address}
        </div>
        <div className="order-Cart">
          <strong>Cart: </strong> {cartOutput}
        </div>
      </div>
    );
  });

  return <div className="OrderList order-p">{output}</div>;
}
