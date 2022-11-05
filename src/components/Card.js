import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

function Card() {
  const [user, setUser] = useState("");
  const params = useParams();

  useEffect(() => { 
    setUser(params.user);
  }, [ params.user ]);

  return (
    <div className='ui raised very padded text container segment'
    style={{marginTop: '80px'}}>
      <h3 className='ui header'>
      {user}
      </h3>
    </div>
  )
}
const mapStateToProps = (state) => ({
  state: state,
  user: state.user,
});


export default connect(mapStateToProps)(Card)