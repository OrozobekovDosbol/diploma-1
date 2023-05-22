import Logo from "../Layout/Logo/Logo";
import Nav from "../Nav/Nav";
import "./Drawer.css";

function Drawer({ open, toggle }) {
  const drawerClassNames = `Drawer ${open ? "open" : ""}`;

  return (
    <div className={drawerClassNames}>
      <div onClick={toggle} className="backdrop"></div>
      <div className="content">
        <div className="Logo-Nav">
          <Logo />
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default Drawer;
