// packages
import React, { useEffect, useState } from 'react';

// styles
import './pages.css';

// components
import Card from '../components/cards/Card';
import PreviewCard from '../components/cards/PreviewCard';
import Loader from '../components/module/Loader';
import Modal from '../components/module/Modal';
import MuscelGroups from '../components/forms/MuscelGroups';


const TypeExercise = ({ exerciseData, type, numberOfX }) => {

  // state
  const [typeData, setTypeData] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [selectLocation, setSelectLocation] = useState('');
  const [ selectValue, setSelectValue ] = useState('all');

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

  const handleSelectChange = (value) => {
    // console.log('value =', value);
    setSelectValue(value);
  }

  useEffect(() => {
    let firstArray = [];
    let secondArray = [];
    exerciseData.forEach((exercise) => {
      // console.log('exercise includes Arms =', exercise.bodyAreas.includes('Arms'));
      // .some() will iterate over the first array and check the includes for each item in the second array
      if (exercise.bodyAreas.some(area => type.includes(area))) {
        firstArray.push(exercise);
      }
    });
    firstArray.forEach((exercise) => {
      // console.log('selectValue =', selectValue);
      if( selectValue !== 'all' && exercise.bodyAreas.includes(selectValue)){
        secondArray.push(exercise);
      } else if(selectValue === 'all'){
        secondArray = [...firstArray];
      }
    });
    setTypeData(secondArray);
    numberOfX(secondArray.length);
  }, [exerciseData, type, numberOfX, selectValue]);


  return (
    <section id='exercise-content'>
      <div>
        <MuscelGroups onSelectChange={handleSelectChange} selectValue={selectValue} type={type}/>
      </div>

      <div>
        {typeData.length === 0
          ? <Loader />
          : typeData.map((exercise) => {
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
        <Modal onClose={handleModalClose} openLocation={selectLocation}>
          <Card bodyAreas={selectedExercise?.bodyAreas} exercise={selectedExercise} />
        </Modal>}
    </section>
  );
}

export default TypeExercise;