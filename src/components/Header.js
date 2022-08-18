import "./Header.css";
import { AiOutlineMenu } from "react-icons/ai";
import logo2 from "../assets/logo2.svg";
import { useState } from "react";
export default function Header() {
  const [navbar, setNavbar] = useState(undefined);

  const geet = () => {
    if (!navbar) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <div className="header">
      <div className="logo-container">
        <div className="hamburger">
          <AiOutlineMenu onClick={geet}>hej</AiOutlineMenu>
        </div>
        <img alt="logo" src={logo2}></img>
      </div>

      {navbar ? (
        <div className="navbar show">
          <p>Vinyl</p>
          <p>Butik</p>
          <p>Kontakt</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
