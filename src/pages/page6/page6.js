import React, { useState } from "react";
import "./page6.scss";

import { page6_img } from "../../global/icons/media";
import { AiFillCheckCircle } from "react-icons/ai";
import { Button, Form } from "react-bootstrap";

function Page6() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    designation: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="page6_container">
      <div className="page6_left_container">
        <div className="page6_heading">
          Experience the World in 3D: Join the Immersive Technology Revolution
          Today!
        </div>
        <div className="page6_subtext">
          So what are you waiting for? Join the world of immersive technology
          and experience life in 3D with our innovative solutions. With our
          unique features, design-friendly, and compatibility with any
          content-making platform, it's the perfect choice for anyone who wants
          to enjoy a more immersive, engaging experience.
        </div>
        <div className="page6_img_container">
          <img src={page6_img} alt="" />
        </div>
      </div>
      <div className="page6_right_container">
        <div className="form_container">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Ex. John Doe" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email ID</Form.Label>
              <Form.Control type="email" placeholder="Ex. mail@website.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Ex. 9889888988" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Let us know, How we can help you ?*</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ex. Let's collaborate for mutual development."
              />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ width: "100%" }}>
              Join
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Page6;
