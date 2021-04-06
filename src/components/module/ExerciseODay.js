// packages
import React, { useEffect, useState, useContext, useRef } from 'react';
import ReactHtmlParser from 'react-html-parser';
import LazyLoad from 'react-lazyload';
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// styles
import './ExerciseODay.css'
// context
import GenderContext from '../../context/GenderContext';
import MediaContext from '../../context/MediaContext';
// functions
import getLocal from '../../functions/getLocal';
import saveLocal from '../../functions/saveLocal';
// components
import Placeholder from './Placeholder';


const ExerciseODay = ({ exerciseData }) => {

  const [exercise, setExercise] = useState({});
  const [activeState, setActiveState] = useState('');
  const [contentHeight, setContentHeight] = useState('');

  const { gender } = useContext(GenderContext);
  const { isExtraSmall, isMobileDevice, isSmallScreen, isTabletDevice, isDesktopDevice, isLargeScreen } = useContext(MediaContext);
  const content = useRef(null);

  const bodyAreas = exercise?.bodyAreas;

  const storedDate = getLocal('date');
  const oldDate = new Date(storedDate);
  // console.log('oldDate =', oldDate, typeof oldDate);
  const existingExercise = getLocal('eod');
  // console.log('existingExercise =', existingExercise);
  const newDate = new Date();
  // console.log('newDate =', newDate, typeof newDate);
  // console.log('newDate === oldDate =', newDate.getDay() === oldDate.getDay() )

  const toggelCollapse = () => {
    setActiveState(activeState === '' ? 'active' : '');

    setContentHeight(
      activeState === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  useEffect(() => {

    if (!existingExercise && exerciseData.length > 0) {
      // console.log('nothing in storage');
      const index = Math.floor(Math.random() * 152);
      // console.log('index =', index);
      // console.log('exerciseData =', exerciseData);
      // console.log('exerciseData[index] =', exerciseData[index]);
      saveLocal('eod', exerciseData[index]);
    }

    if (newDate.getDay() === oldDate.getDay() && exerciseData.length > 0) {
      // console.log('the day is the same');
      setExercise(existingExercise);
    } else if (exerciseData.length) {
      // console.log('its a new day');
      saveLocal('date', newDate);

      const indexNew = Math.floor(Math.random() * 152);
      saveLocal('eod', exerciseData[indexNew]);
      setExercise(exerciseData[indexNew]);
    }

  }, [exerciseData]);

  // console.log('exercise =', exercise.id);


  return (
    <div id='exercise-o-day-content'>
      { (isMobileDevice) &&
          <h2>{exercise?.name}</h2>
        }
      <div className='img-container'>
        <LazyLoad placeholder={<Placeholder height={'400px'} />} offset={100} debounce={500}>
          <img
            alt='exercise'
            src={gender === 'male' ? exercise?.male?.image : exercise?.female?.image}
            className='exercise-img'
          />
        </LazyLoad>
      </div>

      <div className='information-container scroller'>
        { (isSmallScreen || isTabletDevice || isDesktopDevice || isLargeScreen) &&
          <h2>{exercise?.name}</h2>
        }
        <ul>
          {bodyAreas && bodyAreas.map((area) => {
            return (
              <li key={area}>{`${area}`}</li>
            );
          })}
        </ul>
        {(isTabletDevice || isDesktopDevice || isLargeScreen) &&
          ReactHtmlParser(exercise?.transcript)
        }
        {(isMobileDevice || isSmallScreen) &&
          <button
            className={`collapse ${activeState}`}
            onClick={toggelCollapse}
          >
            {isExtraSmall ? 'More Info': 'More Information'} <FontAwesomeIcon
              icon={activeState === 'active' ? faChevronUp : faChevronDown}
            />
          </button>
        }
      </div>

      { (isMobileDevice || isSmallScreen) &&
        <div
          ref={content}
          className='transcript'
          style={{ maxHeight: `${contentHeight}` }}>
          {ReactHtmlParser(exercise?.transcript)}
        </div>
      }

    </div>
  );
}

export default ExerciseODay;