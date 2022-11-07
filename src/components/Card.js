import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteCard } from "../actions/actionsIndex";
function Card(props) {
  console.log("props in Card", props);
  let urlid = useParams();
  console.log("id", urlid);
  const card = useSelector((state) => {
    return state.rootReducer.cards.find(
      (card) => card.id === parseInt(urlid.id)
    );
  });
  const { title, description } = card;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onButtonClick = () => {
    let id = card.id;
    dispatch({ type: "DELETE_CARD", id });
    navigate("/Products");
  };

  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">{title}</h3>
      <p>{description}</p>
      <button
        className="ui primary right floated button"
        onClick={onButtonClick}
      ></button>
    </div>
  );
}

export default Card;
