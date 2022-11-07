import { combineReducers } from "redux";
import cards from "./cardReducer";

// import {useState} from 'react';
// const [card, setCard] = useState([]);
// setCard(
const initialState = {
  cards: [
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card",
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  console.log('action', action);
  return state;
};
export default combineReducers({
  rootReducer,
  cards,
});
