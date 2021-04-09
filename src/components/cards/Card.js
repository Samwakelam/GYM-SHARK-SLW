// Packages
import React, { useContext, useState, useRef, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import LazyLoad from 'react-lazyload';
import { faChevronUp, faChevronDown, faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartLine } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Styles
import './Card.css';
// context
import GenderContext from '../../context/GenderContext';
import FavouritesContext from '../../context/FavouritesContext';
// components
import Placeholder from '../module/Placeholder';


const Card = ({ bodyAreas, exercise, cardHeight }) => {

  // state
  const [activeState, setActiveState] = useState('');
  const [contentHeight, setContentHeight] = useState('');
  const [favourited, setFavourited] = useState(false);
  // reference
  const content = useRef(null);
  // context 
  const { gender } = useContext(GenderContext);
  const { localFavourites, updateFavourites } = useContext(FavouritesContext);

  const toggelCollapse = () => {
    
    setActiveState(activeState === '' ? 'active' : '');
    setContentHeight(
      activeState === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    cardHeight(
      activeState === "active" ? 560 : (560 + content.current.scrollHeight)
    );
  }

  const makeFavourite = () => {
    // console.log('localFavourites =', localFavourites, typeof localFavourites);
    updateFavourites(favourited, exercise);
    setFavourited(favourited ? false : true);
  }

  useEffect(() => {
    let isFavourite;
    // console.log('localFavourites =', localFavourites);
    if (localFavourites) {
      isFavourite = localFavourites.includes(exercise?.id);
    }
    setFavourited(isFavourite);
    
  }, [exercise?.id, localFavourites]);


  return (
    <article className='card-container' >

      <div className='img-container'>
        <LazyLoad placeholder={<Placeholder height={'400px'} />} offset={100} debounce={500}>
          <img
            alt='exercise'
            src={gender === 'male' ? exercise?.male.image : exercise?.female.image}
            className='exercise-img'
          />
        </LazyLoad>
      </div>

      <div className={`favourite-select ${favourited} ${gender}`} onClick={makeFavourite}>
        <FontAwesomeIcon
          icon={favourited ? heartSolid : heartLine}
        />
      </div>

      <div className='infomation-container'>
        <ul>
          {bodyAreas.map((area) => {
            return (
              <li key={area}>{`${area}`}</li>
            );
          })}
        </ul>

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