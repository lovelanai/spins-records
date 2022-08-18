import "./Header.css";

import logo2 from "../assets/logo2.svg";
import { useState } from "react";
export default function Header() {
  const [navbar, setNavbar] = useState();

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
        <button onClick={geet}>hej</button>
        <img alt="logo" src={logo2}></img>
      </div>
      {navbar ? (
        <div className="navbar">
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
