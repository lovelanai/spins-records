import "./Header.css";
import logo from "../assets/logo.svg";
export default function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo}></img>
      </div>
      <h1>Vinyl</h1>
      <h1>Butik</h1>
      <h1>Kontakt</h1>
    </div>
  );
}
