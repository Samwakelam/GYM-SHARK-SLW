// Packages
import React, { useContext, useRef } from 'react';
import LazyLoad from 'react-lazyload';

// Styles
import './PreviewCard.css';

// context
import GenderContext from '../../../context/GenderContext';

import Placeholder from '../Placeholder';


const PreviewCard = ({ bodyAreas, exercise, onSelect }) => {

  const thisPreview = useRef(null);

  // context 
  const { gender } = useContext(GenderContext);

  const handelClick = () => {
    // console.log('thisPreview.current =',thisPreview.current.offsetTop); 
    const offsetTop = thisPreview.current.offsetTop;
    onSelect(offsetTop);
  }

  return (
    <article ref={thisPreview} className='preview-card-container' onClick={handelClick}>

      <div className='img-container'>
        <LazyLoad placeholder={<Placeholder height={'200px'} width={'200px'}/>} offset={100} debounce={500}>
          <img
            alt='exercise'
            src={gender === 'male' ? exercise?.male.image : exercise?.female.image}
            className='preview-exercise-img'
          />
        </LazyLoad>
      </div>

      <div className='information-container'>
        <h2>{exercise?.name}</h2>
      </div>

    </article>
  );
}

export default PreviewCard;