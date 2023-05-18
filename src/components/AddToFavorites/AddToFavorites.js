import { useContext } from "react";
import { AppContext } from "../../App";
import "./AddToFavorites.css";

export default function AddToFavorites({ product }) {
  const { favorites, setFavorites } = useContext(AppContext);

  function onAddToFavoritesClick() {
    setFavorites([...favorites, product.id]);
  }

  return (
    <div className="AddToCart">
      <button onClick={onAddToFavoritesClick}>{favorites[product.id] ? favorites[product.id] : 0}Add to cart</button>
    </div>
  );
}
