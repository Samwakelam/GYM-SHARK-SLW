// packages
import React, { useEffect, useState } from 'react';

// components
import Card from '../components/module/cards/Card';
import PreviewCard from '../components/module/cards/PreviewCard';
import Loader from '../components/module/Loader';
import Modal from '../components/module/Modal';


const TypeExercise = ({ exerciseData, type, numberOfX }) => {

  // state
  const [typeData, setTypeData] = useState([]);
  const [ selectedExercise, setSelectedExercise ] = useState('');
  const [ openModal, setOpenModal ] = useState(false);
  const [ selectLocation, setSelectLocation ] = useState('');
  
  const handleSelect = ( offsetTop, exercise ) => {
    // console.log('offsetTop =', offsetTop);
    // console.log('exercise chosen is: ', exercise.name);
    setSelectedExercise(exercise);
    setSelectLocation(Math.floor(offsetTop));
    setOpenModal(true);
  }

  const handleClose = () => {
    setOpenModal(false);
  }

  useEffect(() => {
    let newArray = [];
    exerciseData.forEach((exercise) => {
      // console.log('exercise includes Arms =', exercise.bodyAreas.includes('Arms'));
      // .some() will iterate over the first array and check the includes for each item in the second array
      if (exercise.bodyAreas.some(item => type.includes(item))) {
        newArray.push(exercise);
      }
    });
    setTypeData(newArray);
    numberOfX(newArray.length);
  }, [exerciseData, type, numberOfX]);

  return (
    <section id='exercise-content'>
      { typeData.length === 0
        ? <Loader />
        : typeData.map((exercise) => {
          return (
            <PreviewCard 
              key={exercise?.id} 
              bodyAreas={exercise?.bodyAreas} 
              exercise={exercise}
              onSelect={(offsetTop) => handleSelect( offsetTop, exercise)}
            />
          );
        })
      }
      {openModal && 
        <Modal onClose={handleClose} eventLocation={selectLocation}>
          <Card bodyAreas={selectedExercise?.bodyAreas} exercise={selectedExercise} />
        </Modal>}
    </section>
  );
}

export default TypeExercise;