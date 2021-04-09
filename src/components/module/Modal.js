// packages
import React from 'react';

// styles
import './modules.css';


const Modal = ({ children, onClose, openLocation }) => {

  // console.log('openLocation =', openLocation);

  const handelClick = (event) => {
    event.stopPropagation();
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div id='overlay' onClick={handelClick}>
      <div id='location-container' style={{top: `${openLocation}px`, transition: '0.2s ease-out'}}>
        {children}
      </div>
    </div>
  );
}

export default Modal;