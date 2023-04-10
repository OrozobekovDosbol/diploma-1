import { getDocs } from "firebase/firestore/lite";
import { NavLink } from "react-router-dom";
import { categories } from "../../firebase";

export default function CategoryList() {
getDocs(categories).then(snapshot => {
  console.log(snapshot.docs)
})

  // const categories = [
  //   { id: 1, name: "hats", slug: "hats" },
  //   { id: 4, name: "tracksuits", slug: "tracksuits" },
  //   { id: 2, name: "sneakers", slug: "sneakers" },
  //   { id: 3, name: "bags", slug: "bags" },
  // ];

  const output = categories.map(category => (
    <li key={category.id}>
      <NavLink to={`/categories/${category.slug}`}>
        {category.name}
      </NavLink>
    </li>
  ));

  return (
    <div className="CategoryList">
      <h3>Categories</h3>
      <ul>{output}</ul>
    </div>
  );
}