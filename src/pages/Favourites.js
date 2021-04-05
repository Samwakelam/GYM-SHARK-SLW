// packages
import React, { useEffect, useState, useContext } from 'react'; 
import { NavLink } from 'react-router-dom';
// styles
import './Favourites.css';
// context
import GenderContext from '../context/GenderContext'
// functions
import getLocal from '../functions/getLocal';
// components
import PreviewCard from '../components/cards/PreviewCard';
import Card from '../components/cards/Card';
import Modal from '../components/module/Modal';


const Favourites = ({exerciseData, numberOfX}) => {

  const { gender } = useContext(GenderContext);

  const favourites = getLocal('fave');
  // console.log('favourites =', favourites);
  // state
  const [ faveExercises, setFaveExercises ] = useState([]);
  // modal State
  const [selectedExercise, setSelectedExercise] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [selectLocation, setSelectLocation] = useState('');
  
  const handleSelect = (offsetTop, exercise) => {
    // console.log('offsetTop =', offsetTop);
    // console.log('exercise chosen is: ', exercise.name);
    setSelectedExercise(exercise);
    setSelectLocation(Math.floor(offsetTop));
    setOpenModal(true);
  }

  const handleModalClose = () => {
    setOpenModal(false);
  }

  useEffect(() => {
    let favourited= []
    if(favourites){
      exerciseData.forEach((exercise) => {
        if(favourites.includes(exercise?.id)){
          favourited.push(exercise);
        };
      });
      // console.log('favourited =', favourited);
      setFaveExercises(favourited);
      numberOfX(favourited.length);
    } else {
      numberOfX(0);
    }
  }, [numberOfX, exerciseData]);


  return(
    <section id='favourites-content' >
      <div style={ !favourites? {flexFlow: 'column'} : {flexFlow: 'row', flexWrap: 'wrap'}}>
      { !favourites && 
      <>
        <h2> Whoops! You have no Favourite Exercises</h2>
        <p>
          Go to the Exercises Page to choose form the Library of Exercises available. 
        </p>
        <p>
          From there open an exercise by clicking on the prieview card and ticking the heart icon.
        </p>
        <button className={`${gender}`}><NavLink to='/exercise' >Go To Exercises</NavLink></button>
        </>
      }
      { favourites &&
        faveExercises.map((exercise) => {
          return (
            <PreviewCard
                key={exercise?.id}
                bodyAreas={exercise?.bodyAreas}
                exercise={exercise}
                onSelect={(offsetTop) => handleSelect(offsetTop, exercise)}
              />
          )
        })
      }
      </div>
      {openModal &&
        <Modal onClose={handleModalClose} openLocation={selectLocation}>
          <Card bodyAreas={selectedExercise?.bodyAreas} exercise={selectedExercise} />
        </Modal>}
    </section>
  );
}

export default Favourites;