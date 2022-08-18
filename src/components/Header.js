import "./Header.css";
import { AiOutlineMenu } from "react-icons/ai";
import logo2 from "../assets/logo2.svg";
import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-scroll";
export default function Header() {
  const [navbar, setNavbar] = useState();

  const height = window.innerHeight - 280;

  const listenScrollEvent = () => {
    if (window.scrollY < height) {
      return setShowScroll(false);
    } else if (window.scrollY > height) {
      return setShowScroll(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  });

  const [showScroll, setShowScroll] = useState();

  const hideScrollArrow = () => {
    setShowScroll(false);
  };

  const showNav = () => {
    if (!navbar) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <div>
      <div className="header">
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
              duration={200}
            >
              <p>About</p>
            </Link>

            <Link
              activeClass="current"
              className="headerBtn"
              to="store"
              spy={true}
              smooth={true}
              duration={200}
            >
              <p>Store</p>
            </Link>
            <Link
              activeClass="current"
              className="headerBtn"
              to="contact"
              spy={true}
              smooth={true}
              duration={200}
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
