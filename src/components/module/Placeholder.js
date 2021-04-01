// packages
import React from 'react';

// styles 
import './modules.css';

// components
import Loader from './Loader';


const Placeholder = () => {

  return(
    <div className='img-placeholder'>
      <Loader />
    </div>
  );
}

export default Placeholder;