// Packages
import React, { useContext, useState, useRef, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartLine } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Styles
import './PreviewCard.css';
// context
import GenderContext from '../../context/GenderContext';
import MediaContext from '../../context/MediaContext';
import FavouritesContext from '../../context/FavouritesContext';
// components
import Placeholder from '../module/Placeholder';


const PreviewCard = ({ bodyAreas, exercise, onSelect }) => {

  // state
  const [favourited, setFavourited] = useState(false);
  // reference
  const thisPreview = useRef(null);
  // context 
  const { gender } = useContext(GenderContext);
  const { isMobileDevice, isTabletDevice, isSmallScreen, isDesktopDevice, isLargeScreen } = useContext(MediaContext);
  const { localFavourites } = useContext(FavouritesContext);
  // console.log('localFavourites=', localFavourites);

  const handelCardSelect = () => {
    // console.log('thisPreview.current =',thisPreview.current.offsetTop); 
    // this function uses reference hook to get the top edge location of the chosen preview card 
    // and sends it to the modal to position the large card on screen where 
    // the user is viewing currently.
    const offsetTop = thisPreview.current.offsetTop;
    onSelect(offsetTop);
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
    <article ref={thisPreview} className='preview-card-container' onClick={handelCardSelect}>

      <div className='img-container'>
        <LazyLoad placeholder={<Placeholder height={'200px'} width={'200px'} />} offset={100} debounce={500}>
          <img
            alt='exercise'
            src={gender === 'male' ? exercise?.male.image : exercise?.female.image}
            className='preview-exercise-img'
          />
        </LazyLoad>
      </div>

      {(isTabletDevice || isMobileDevice || isSmallScreen) &&
      <div className='exercise-title'>
        <h2>{exercise?.name}</h2>
      </div>
      }

      {(isDesktopDevice || isLargeScreen) &&
        <div className='information-container'>
          <h2>{exercise?.name}</h2>
          <ul>
            {bodyAreas.map((area) => {
              return (
                <li key={area}>{`${area}`}</li>
              );
            })}
          </ul>
        </div>
      }

      {(isTabletDevice || isMobileDevice || isSmallScreen) &&
        <div className='information-container'>
          <ul>
            {bodyAreas.map((area) => {
              return (
                <li key={area}>{`${area}`}</li>
              );
            })}
          </ul>
        </div>
      }

      <div className={`favourite-select ${favourited} ${gender}`} >
        <FontAwesomeIcon
          icon={favourited ? heartSolid : heartLine}
        />
      </div>

    </article>
  );
}

export default PreviewCard;