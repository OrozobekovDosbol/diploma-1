import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { categoriesCollection, onAuthChange, ordersCollection, productsCollection } from './firebase';
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore/lite";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import About from "./pages/About";
import ThankYou from "./pages/ThankYou";
import Orders from "./pages/Orders";

export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [],
  // контекст для корзины
  cart: {}, //содержимое корзинки
  setCart: () => {}, // изменить содержимое корзинки

  user: null,
})

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const[orders, setOrders] = useState([]);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || {};
  });

  const [user, setUser] = useState(null);

  useEffect (() => {
    localStorage.setItem("cart", JSON.stringify('cart'));
  }, [cart]);

  useEffect(() => {
    getDocs(categoriesCollection)
      .then(({ docs }) => {
        setCategories(
          docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          }))
        )
      });

      getDocs(productsCollection)
      .then(({ docs }) => {
        setProducts(
          docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          }))
        )
      })
      getDocs(ordersCollection)
      .then(({ docs }) => {
        setOrders(
          docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          }))
        )
      })

      onAuthChange(user => {
        setUser(user);
      })
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart, setCart, user, orders }}>
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<h1>Contacts</h1>} />
            <Route path="/delivery" element={<h1>Delivery</h1>} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="/products/:slug" element={<Product /> } />
            <Route path="thank-you" element={<ThankYou />} />
            <Route path="orders" element={<Orders />} />

            <Route path="*" element={<NotFound />} />

          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;