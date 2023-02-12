import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:pkg180901@gmail.com">
        <Button>Contact: pkg180901@gmail.com</Button>
      </a>
      <a className="mailBtn" href="mailto:pkg180901@gmail.com">
        <Button>Contact: pkg180901@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;