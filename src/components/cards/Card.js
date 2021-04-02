// Packages
import React, { useContext, useState, useRef } from 'react';
import ReactHtmlParser from 'react-html-parser';
import LazyLoad from 'react-lazyload';
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import './Card.css';

// context
import GenderContext from '../../context/GenderContext';

import Placeholder from '../module/Placeholder';


const Card = ({ bodyAreas, exercise }) => {

  // state
  const [activeState, setActiveState] = useState('');
  const [contentHeight, setContentHeight] = useState('');
  // reference
  const content = useRef(null);
  // context 
  const { gender } = useContext(GenderContext);


  const toggelCollapse = () => {
    setActiveState(activeState === '' ? 'active' : '');

    setContentHeight(
      activeState === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }


  return (
    <article className='card-container' >

      <div className='img-container'>
        <LazyLoad placeholder={<Placeholder height={'400px'}/>} offset={100} debounce={500}>
          <img
            alt='exercise'
            src={gender === 'male' ? exercise?.male.image : exercise?.female.image}
            className='exercise-img'
          />
        </LazyLoad>
      </div>

      <div className='infomation-container'>
        <p>{exercise?.bodyAreas}</p>

        <div className='titles'>
          <h2>{exercise?.name}</h2>
          <button
            className={`collapse ${activeState}`}
            onClick={toggelCollapse}
          >
            <FontAwesomeIcon
              icon={activeState === 'active' ? faChevronUp : faChevronDown}
            />
          </button>
        </div>

        <div
          ref={content}
          className='transcript'
          style={{ maxHeight: `${contentHeight}` }}
        >
          {ReactHtmlParser(exercise?.transcript)}
        </div>

      </div>
    </article>
  );
}

export default Card;