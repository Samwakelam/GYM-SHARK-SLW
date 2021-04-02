// packages
import React from 'react';

// styles 
import './modules.css';

// components
import Loader from './Loader';


const Placeholder = ({ height, width }) => {

  return(
    <div className='img-placeholder' style={{ height: height, width: width }}>
      <Loader />
    </div>
  );
}

export default Placeholder;