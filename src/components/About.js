import React from "react";
import classes from "../styling/modal.module.css";


function About() {
  
  return (
    <div>
      
        <div className={`${classes.modal}`}>
          <div className={`${classes.modalContent}`}>
            <h3>About Modal</h3>
          <p>
              This is a simple React app to manage contacts. It uses React
              Context API for state management.
            </p>
          </div>
        </div>
        <div className={`${classes.wrapper}`}>
      <div
        className="ui rasied very padded text container segment"
        style={{ marginTop: "80px" }}
        >
        <h3 className="ui header">About</h3>
        <p>Some Text</p>
      </div>
    </div>
        </div>
  );
}

export default About;
