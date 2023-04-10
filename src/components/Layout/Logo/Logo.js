import "./Logo.css";
import logo from "../../../assets/logo.jpg";

export default function Logo() {
  return (
    <div className="Logo">
      <img src={logo} alt="logo" className="logo" />
    </div>
  )
}