import Nav from "../Nav/Nav";
import "./Layout.css";
import CategoryList from "../CategoryList/CategoryList";
import Logo from "./Logo/Logo";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Logo/>
        <Nav />
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}