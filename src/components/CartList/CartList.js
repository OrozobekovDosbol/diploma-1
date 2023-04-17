import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function CartList() {
  // полуычить список товаров и корзинку
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    setCart ({
      ...cart,
      [product.id]: qty,
    })
  }

  function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart); 
  }

  // получить только ИД товаров в корзинке
  const productIds = Object.keys(cart);

  // чтобы вывести пройтись по товарам
  const output = products
  // удалить все товары которые не в корзине
  .filter((product) => productIds.includes(product.id))
  // вывести товары и их количество   
  .map((product) => (
    <div className="CartItem" key={product.id}>
      <img src={product.picture} alt={product.name} />
      <Link to={"/product/" + product.slug}>{product.name}</Link>
      {cart[product.id]}
      <input type="number"
       value={cart[product.id]}
       min={1}
       onChange={(event) => onQuantityChange
       (product, +event.target.value)} />
      <span>{cart[product.id] * product.price} som</span>
      <button onClick={() => onItemRemove(product)}>Remove</button>
    </div>
  )) 
  return (
    <div className="CartList">{output}</div>
  )
}