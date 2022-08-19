import "./Contact.css";
import "./Mobile.css";
import Form from "react-bootstrap/Form";

import { Element } from "react-scroll";
export default function Store() {
  return (
    <Element name="contact">
      <div className="contact">
        <Form className="contact-form">
          <Form.Group>
            <p>Email address</p>
            <Form.Control placeholder="name@example.com" />
          </Form.Group>
          <Form.Group
            className="contact-input"
            controlId="exampleForm.ControlTextarea1"
          >
            <p>Ask us a question</p>
            <Form.Control
              placeholder="Ask a question here"
              as="textarea"
              rows={10}
            />
            <button className="button" variant="primary">
              Submit
            </button>
          </Form.Group>
          <h3>We normally awnser within 2 business days</h3>
        </Form>
      </div>
    </Element>
  );
}
