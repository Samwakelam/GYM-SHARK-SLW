// packages
import React, { useEffect, useState, useContext, useRef } from 'react';
import { NavLink } from 'react-router-dom';
// styles
import './Favourites.css';
// context
import GenderContext from '../context/GenderContext'
import FavouritesContext from '../context/FavouritesContext';
// components
import PreviewCard from '../components/cards/PreviewCard';
import Card from '../components/cards/Card';
import Modal from '../components/module/Modal';


const Favourites = ({ exerciseData, numberOfX }) => {

  const section = useRef(null);

  const { gender } = useContext(GenderContext);
  const { localFavourites } = useContext(FavouritesContext);
  // console.log('localFavourites =', localFavourites);
  // state
  const [faveExercises, setFaveExercises] = useState([]);
  // modal State
  const [selectedExercise, setSelectedExercise] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [cardLocation, setCardLocation] = useState('');
  const [sectionStyleHeight, setSectionStyleHeight] = useState('100%');

  const sectionStyle = {
    minHeight: sectionStyleHeight,
  }

  const handleSelect = (offsetTop, exercise) => {
    // console.log('exercise chosen is: ', exercise.name);
    const callLocation = Math.floor(offsetTop);
    // console.log('offsetTop =', offsetTop);
    const sectionHeight = section.current.offsetHeight;
    // console.log('sectionHeight =', sectionHeight);

    let openLocation;
    if ((sectionHeight - 584) < 0) {
      openLocation = 24;
    } else if ((sectionHeight - 584) > 0 && (sectionHeight - callLocation) < 584) {
      openLocation = sectionHeight - 24 - 584;
    } else {
      openLocation = callLocation;
    }

    if ((sectionHeight + 24) < 584) {
      setSectionStyleHeight(`${584 + 48}px`);
      // console.log('sectionStyle.minHeight =', sectionStyle.minHeight);
    }
    // console.log('openLocation =', openLocation);
    setSelectedExercise(exercise);
    setCardLocation(openLocation);
    setOpenModal(true);
  }

  const handleCardHeightChange = (cardHeight) => {
    // console.log('cardHeight =', cardHeight);
    // console.log('cardLocation =', cardLocation);
    const sectionHeight = section.current.offsetHeight;
    // console.log('sectionHeight =', sectionHeight);

    let openLocation;
    if ((cardHeight > sectionHeight) && (sectionHeight - cardLocation) > cardHeight && cardHeight !== 560) {
      // console.log('1');
      setSectionStyleHeight(`${(cardHeight + cardLocation + 48)}px`);
    } else if ((cardHeight < sectionHeight) && (sectionHeight - cardLocation) < cardHeight && cardHeight !== 560) {
      // console.log('2');
      openLocation = sectionHeight - 48 - cardHeight;
    } else if ((cardHeight < sectionHeight && (sectionHeight - cardLocation) > cardHeight && cardHeight !== 560)) {
      // console.log('3');
      setSectionStyleHeight(`${(cardHeight + cardLocation + 48)}px`);
    } else if ((cardHeight > sectionHeight) && (sectionHeight - cardLocation) < cardHeight && cardHeight !== 560) {
      setSectionStyleHeight(`${(cardHeight + cardLocation + 48)}px`);
    } else if (cardHeight < sectionHeight && cardHeight === 560) {
      setSectionStyleHeight(`${cardHeight + 72}px`);
    }

    setCardLocation(openLocation);
  }

  const handleModalClose = () => {
    setOpenModal(false);
    setSectionStyleHeight('100%');
  }

  useEffect(() => {
    let favourited = []
    if (localFavourites) {
      exerciseData.forEach((exercise) => {
        if (localFavourites.includes(exercise?.id)) {
          favourited.push(exercise);
        };
      });
      // console.log('favourited =', favourited);
      setFaveExercises(favourited);
      numberOfX(favourited.length);
    } else {
      numberOfX(0);
    }
  }, [numberOfX, exerciseData, localFavourites]);


  return (
    <section ref={section} id='localFavourites-content' style={sectionStyle} >
      <div style={!localFavourites ? { flexFlow: 'column' } : { flexFlow: 'row', flexWrap: 'wrap' }}>
        {!localFavourites &&
          <>
            <h2> Whoops! You have no Favourite Exercises</h2>
            <p>
              Go to the Exercises Page to choose from the Library of Exercises available.
            </p>
            <p>
              From there open an exercise by clicking on the preview card and ticking the heart icon.
            </p>
            <button className={`${gender}`}><NavLink to='/exercise' >Go To Exercises</NavLink></button>
          </>
        }
        {localFavourites &&
          faveExercises.map((exercise) => {
            return (
              <PreviewCard
                key={exercise?.id}
                bodyAreas={exercise?.bodyAreas}
                exercise={exercise}
                onSelect={(offsetTop) => handleSelect(offsetTop, exercise)}
              />
            );
          })
        }
      </div>
      {openModal &&
        <Modal onClose={handleModalClose} openLocation={cardLocation}>
          <Card bodyAreas={selectedExercise?.bodyAreas} exercise={selectedExercise} cardHeight={handleCardHeightChange} />
        </Modal>}
    </section>
  );
}

export default Favourites;