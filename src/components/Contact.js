import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  let navigate = useNavigate();
  setTimeout(() => {
    navigate('/about');
  }, 2000);
  return (
    <div
      className="ui rasied very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">Contact</h3>
      <p>Some Text</p>
    </div>
  );
}

export default Contact;
