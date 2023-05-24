import { addDoc } from "firebase/firestore";
import "./OrderForm.css";
import { ordersCollection } from "../../firebase";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function OrderForm() {
  const { cart, setCart, user } = useContext(AppContext);
  const navigate = useNavigate();

  if (Object.keys(cart).length === 0) {
    return "Your card is empty"
  }

  if (!user) {
    return "Please login to create an order."
  }

  function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    addDoc(ordersCollection, {
      name: formData.get('name'),
      phone: formData.get('phone'),
      user: user.uid,
      address: formData.get('address'),
      cart: cart,
    })
    .then(doc => {
      setCart({});
      navigate('/thank-you');
    })
  }

  return (
    <form className="OrderForm" onSubmit={onFormSubmit}>
      <h2>Create an order</h2>
      <label>
       <p>Name:</p> <input type="text" name="name" placeholder="Dosbol" required />
      </label>
      <label>
        <p>Phone:</p> <input type="tel" name="phone" placeholder="+996500923737"  required />
      </label>
      <label>
        <p>Address:</p> <input type="text" name="address" placeholder="Ica Kuchukova #25" required />
      </label>
      <button>Submit</button>
    </form>
  );
}