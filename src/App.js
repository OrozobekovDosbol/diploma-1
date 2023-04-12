import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { categoriesCollection } from './firebase';
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore/lite";

export const AppContext = createContext({
  categories: [],
})

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getDocs(categoriesCollection)
      .then(({ docs }) => {
        setCategories(
          docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          }))
        )
      })
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/contacts" element={<h1>Contacts</h1>} />
            <Route path="/delivery" element={<h1>Delivery</h1>} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;