import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { categoriesCollection, productsCollection } from './firebase';
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore/lite";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import About from "./pages/About";

export const AppContext = createContext({
  categories: [],
  products: [],
  // контекст для корзины
  cart: {}, //содержимое корзинки
  setCart: () => {}, // изменить содержимое корзинки
})

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

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
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart, setCart }}>
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<h1>Contacts</h1>} />
            <Route path="/delivery" element={<h1>Delivery</h1>} />
            <Route path="/categories/:slug" element={<Category />} />

            <Route path="/products/:slug" element={<Product /> } />

            <Route path="*" element={<NotFound />} />

          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;