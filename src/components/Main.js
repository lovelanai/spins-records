import "./Main.css";
import "./Mobile.css";

import { Element } from "react-scroll";
export default function Main() {
  return (
    <Element name="top">
      <div className="main">
        <div className="main-content">
          <div className="main-text">
            <h2>NEW IN</h2>
            <h1>JIMI HENDRIX</h1>
            <h1>LP/VINYL</h1>
            <h2>MERCH</h2>
            <h2>FROM 29.99$</h2>
          </div>
        </div>
      </div>
    </Element>
  );
}
