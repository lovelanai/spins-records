import "./Header.css";
import "./Mobile.css";

import { AiOutlineMenu } from "react-icons/ai";
import logo2 from "../assets/logo2.svg";
import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-scroll";

export default function Header() {
  const [navbar, setNavbar] = useState();

  const [display, setDisplay] = useState("header");

  const height = window.innerHeight - 100;

  const listenScrollEvent = () => {
    if (window.scrollY < height) {
      return setShowScroll(false) & setDisplay("header");
    } else if (window.scrollY > height) {
      return setShowScroll(true) & setDisplay("header none");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  });

  const [showScroll, setShowScroll] = useState();

  const showNav = () => {
    if (!navbar) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <div>
      <div className="navbar-scroll">
        <Link
          activeClass="current"
          to="about"
          spy={true}
          smooth={true}
          duration={300}
        >
          <p>About</p>
        </Link>

        <Link
          activeClass="current"
          to="store"
          spy={true}
          smooth={true}
          duration={300}
        >
          <p>Store</p>
        </Link>
        <Link
          activeClass="current"
          to="contact"
          spy={true}
          smooth={true}
          duration={300}
        >
          <p>Contact</p>
        </Link>
      </div>

      <div className={display}>
        <div className="logo-container">
          <div className="hamburger">
            <AiOutlineMenu onClick={showNav}>hej</AiOutlineMenu>
          </div>
          <img alt="logo" src={logo2}></img>
        </div>
        {navbar ? (
          <div className="navbar show">
            <Link
              activeClass="current"
              className="headerBtn"
              to="about"
              spy={true}
              smooth={true}
              duration={300}
              onClick={showNav}
            >
              <p>About</p>
            </Link>

            <Link
              activeClass="current"
              className="headerBtn"
              to="store"
              spy={true}
              smooth={true}
              duration={300}
              onClick={showNav}
            >
              <p>Store</p>
            </Link>
            <Link
              activeClass="current"
              className="headerBtn"
              to="contact"
              spy={true}
              smooth={true}
              duration={300}
              onClick={showNav}
            >
              <p>Contact</p>
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {!showScroll ? (
        <div></div>
      ) : (
        <div className="arrowUp">
          <Link
            activeClass="current"
            className="headerBtn"
            to="top"
            spy={true}
            smooth={true}
            duration={200}
          >
            <IoIosArrowUp className="arrow"></IoIosArrowUp>
          </Link>
        </div>
      )}
    </div>
  );
}
