import "./Store.css";
import records from "../assets/records.jpg";
import vinyl from "../assets/vinyl.png";
import cup from "../assets/cup.png";
import tshirt from "../assets/t-shirt.png";
import tshirt2 from "../assets/t-shirt-black.png";
import totebag from "../assets/totebag.png";
import { Element } from "react-scroll";
export default function Store() {
  return (
    <Element name="store">
      <div className="store">
        <div className="store-content">
          <ul>
            <h1>Store</h1>
            <p>
              Aside from our webshop we have a store located in the heart of
              Gothenburg.
            </p>
            <p>
              Aside from our products in the store, you can now print your own
              merch and create your own LP with your own mixtape
            </p>
            <br></br>
            <h2>Location</h2>
            <p>
              Kristinelundsgatan 14
              <br /> 411 36
              <br /> Göteborg
            </p>
            <br></br>
            <h2>Opening hours</h2>
            <p>Monday-Friday: 10am - 8pm</p>
            <p>Saturday: 12am - 6pm</p>
            <p>Sunday: Closed</p>
          </ul>
        </div>
      </div>
    </Element>
  );
}
