import "./About.css";
import "./Mobile.css";

import logo from "../assets/logo.svg";
import { Element } from "react-scroll";
export default function Store() {
  return (
    <Element name="about">
      <div className="about">
        <div>
          <ul>
            <h1>About</h1>
            <p>
              Spins Records is a retail store for all music lovers out there. We
              sell everything from LP/vinyl, merch and collector items.
            </p>
          </ul>
          <img alt="logotype" src={logo}></img>
          <ul>
            <h1>Upcoming</h1>
            <p>
              Were currently developing a marketplace for all of our costumers
              to buy, sell and trade all kind of music/merch
            </p>
          </ul>
        </div>
      </div>
    </Element>
  );
}
