import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import Modal from "./Modal";
import { connect } from "react-redux";

function Products(props) {
  console.log('props', props.cards);
 
  // let navigate = useNavigate();
  // setTimeout(() => {
  //   navigate('/about');
  // }, 2000);
  // const params = useParams();
  // useEffect(() => {
  //   console.log("ID", params.id);
  //   return () => {};
  // }, [params.id]);


  const cards = props.cards;
  return (
    <div className="Products">
      {/* <Modal /> */}
      {cards.map((cards) => {
        return (
          <div
            className="ui rasied very padded text container segment"
            style={{ marginTop: "80px" }}
            key={cards.id}
          >
            <Link to={`/card/${cards.id}`} className="ui header" >
              {cards.title}
            </Link>
            <p>{ cards.description }</p>
          </div>
        );
      })};
    </div>
  );

}
const mapStateToProps = (state) => ({
  state: state,
  cards: state.rootReducer.cards,
  
});

export default connect(mapStateToProps)(Products);
