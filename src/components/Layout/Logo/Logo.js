import "./Logo.css";
import logo from "../../../assets/logo.png";
import Home from "../../../pages/Home";

export default function Logo() {
  return (
    <div className="Logo">
      <a href={<Home/>}>
        <img src={logo} alt="logo" className="logo" />
      </a>
    </div>
  );
}
