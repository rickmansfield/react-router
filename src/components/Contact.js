import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import Modal from "./Modal";
function Contact() {

  // let navigate = useNavigate();
  // setTimeout(() => {
  //   navigate('/about');
  // }, 2000);
  // const params = useParams();
  // useEffect(() => {
  //   console.log("ID", params.id);
  //   return () => {};
  // }, [params.id]);
  return (
    <div className="Contacts">
      <Modal />

      <div
        className="ui rasied very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to='/card/Rick' className="ui header">Rick</Link>
        <p>Some Text</p>
      </div>
      <div
        className="ui rasied very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to='/card/Sara' className="ui header">Sara</Link>
        <p>Some Text</p>
      </div>
    </div>
  );
}

export default Contact;
