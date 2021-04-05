// packages
import React, { useEffect, useState, useContext } from 'react';
// styles
import './pages.css';
// context
import MediaContext from '../context/MediaContext';
// components
import Card from '../components/cards/Card';
import PreviewCard from '../components/cards/PreviewCard';
import Loader from '../components/module/Loader';
import Modal from '../components/module/Modal';
import MuscelGroups from '../components/forms/MuscelGroups';
import SearchBar from '../components/forms/SearchBar';
import ExerciseNavbar from '../components/navigation/ExerciseNavbar';


const Exercise = ({ exerciseData, type, numberOfX }) => {

  const { isMobileDevice } = useContext(MediaContext);

  // data state
  const [typeData, setTypeData] = useState([]);
  // modal State
  const [selectedExercise, setSelectedExercise] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [selectLocation, setSelectLocation] = useState('');
  // forms state
  const [selectValue, setSelectValue] = useState('all');
  const [inputValue, setInputValue] = useState('');

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

  const handleInputChange = (value) => {
    setInputValue(value);
  }

  useEffect(() => {
    // data handling - filter dependent on different filters that have been selected
    let firstArray = [];
    let secondArray = [];
    let thirdArray = [];

    if(type.includes('All')) {
      firstArray = [...exerciseData];
    } else {
      exerciseData.forEach((exercise) => {
        // console.log('exercise includes Arms =', exercise.bodyAreas.includes('Arms'));
        // .some() will iterate over the first array and check the includes for each item in the second array
        if (exercise.bodyAreas.some(area => type.includes(area))) {
          firstArray.push(exercise);
        }
      });
    }

    firstArray.forEach((exercise) => {
      // console.log('selectValue =', selectValue);
      if (selectValue !== 'all' && exercise.bodyAreas.includes(selectValue)) {
        secondArray.push(exercise);
      } else if (selectValue === 'all') {
        secondArray = [...firstArray];
      }
    });

    thirdArray = secondArray.filter((exercise) => exercise.name.includes(inputValue));

    setTypeData(thirdArray);
    numberOfX(thirdArray.length);

  }, [exerciseData, type, numberOfX, selectValue, inputValue]);


  return (
    <section id='exercise-content'>
      {isMobileDevice &&
        <ExerciseNavbar />
      }
      <div>
        <MuscelGroups onSelectChange={handleSelectChange} selectValue={selectValue} type={type} />
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

      <SearchBar onInputChange={handleInputChange} inputValue={inputValue} />
    </section>
  );
}

export default Exercise;