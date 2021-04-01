// Packages
import React from 'react';

// Styles
import './modules.css';

const Card = ({children, bodyAreas}) => {

  // console.log('bodyAreas =', bodyAreas);

  return(
    <article className='card-container'>
      {children}
    </article>
  )
}

export default Card;