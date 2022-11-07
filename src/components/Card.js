import React from "react";
import { useParams } from "react-router-dom";
import { connect} from 'react-redux';


function Card(props) {
  console.log('props in Card', props);
  let id = useParams();
  console.log('id', id);
  

  const card = props.cards.find((card) => card.id === parseInt(id.id));
  
  return (
    <div className='ui raised very padded text container segment'
    style={{marginTop: '80px'}}>
      <h3 className='ui header'>
        {card.title}
      </h3>
      <p>
        {card.description}
      </p>
    </div>
  )
};

const mapStateToProps = (state) => ({
  state: state,
  cards: state.rootReducer.cards,
});

export default connect(mapStateToProps)(Card)