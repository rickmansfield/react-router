//This component was part of a course from Udemy. The course is called Redux with React JS: Learn Redux with Modern React JS" by Stephen Grider. The course is available at https://www.udemy.com/course/react-redux/learn/lecture/12531418#overview it is currently outdated and should not be used by beginners. Rather a seasoned user of React might consider this for migrating legacy code to more contemporary versions.

// this portal example is obsolete. There is no reason to create a portal for a component that is easily reused in any parent. 
import React from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import classes from "../styling/modal.module.css";

export const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className={`${classes.modal}`}>
      <div className={`${classes.modalContent}`}>
        <h1>Modal TITLE</h1>
      </div>
    </div>, document.querySelector("#modal")
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
