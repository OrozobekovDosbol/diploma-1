import { useContext, useState } from "react";
import "./AddCategory.css";
import { addDoc } from "firebase/firestore";
import { categoryCollection } from "../../firebase";
import { AppContext } from "../../App";

export default function AddCategory() {
  const {user} = useContext(AppContext);
  const [category, setCategory] = useState("");

  if (!user || !user.isAdmin) {
    return null;
  }

  function onChangeCategory(event) {
    setCategory(event.target.value);
  }

  function onAddCategory() {
    const name = category.trim();

    if (name.length < 5) {
      alert("Category name must be longer than 5 characters");
      return;
    }

    addDoc(categoryCollection, {
      name: name,
      slug: name.replaceAll(" ", "-").toLowerCase(),
    }).then(() => {
      setCategory("");
    });
  }

  return (
    <div className="AddCategoryJs">
      <input
        type="text"
        placeholder="Category name"
        onChange={onChangeCategory}
        value={category}
      />
      <button onClick={onAddCategory}>+</button>
    </div>
  );
}