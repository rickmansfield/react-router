import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

export const Modal = (props) => {

  return ReactDOM.createPortal(
    <div className='ui dimmer show modal visible active'>
      <div className='ui raised very padded text container'>
      Modal
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)