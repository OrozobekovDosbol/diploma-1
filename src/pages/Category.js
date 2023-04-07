import { useMatch } from "react-router";

export default function Category() {

  const params = useMatch("/categories/:slug");

  
  const categories = [
    { id: 0, name: "All", slug: ""},
    { id: 1, name: "In containers", slug: "in-containers"},
    { id: 2, name: "In cones", slug: "in-cones"},
    { id: 3, name: "Classic", slug: "classic"},
    { id: 4, name: "Fruity", slug: "fruity"}, 
  ];


  return (
    <div className="Category">
      <h1>Category</h1>
    </div>
  )
}