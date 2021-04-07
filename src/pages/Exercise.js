// packages
import React, { useEffect, useState, useContext } from 'react';
// styles
import './Exercise.css';
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
import Pagination from '../components/navigation/Pagination';


const Exercise = ({ exerciseData, type, numberOfX }) => {

  const { isExtraSmall, isMobileDevice } = useContext(MediaContext);

  // data state
  const [typeData, setTypeData] = useState([]);
  const [currentExercises, setCurrentExercise] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit ] = useState(30);
  const [totalRecords, setTotalRecords] = useState(null);
  // modal State
  const [selectedExercise, setSelectedExercise] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [selectLocation, setSelectLocation] = useState('');
  // forms state
  const [selectValue, setSelectValue] = useState('all');
  const [inputValue, setInputValue] = useState('');

  // console.log('currentExercise =', currentExercises);

  const handleSelect = (offsetTop, exercise) => {
    // console.log('offsetTop =', offsetTop);
    // console.log('exercise chosen is: ', exercise.name);
    // console.log('document.body.offsetHeight =', document.body.scrollHeight);
    const callLocation = Math.floor(offsetTop);
    const bodyHeight = document.body.scrollHeight
    const cardLocation = Math.min(callLocation, (bodyHeight - 900));
    // console.log('cardLocation =', cardLocation);
    setSelectedExercise(exercise);
    setSelectLocation(cardLocation);
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

  const onPageChanged = (data) => {
    const { currentPage, pageLimit } = data;
    setCurrentPage(currentPage);
    setPageLimit(pageLimit);
    // starting index for fetching the records for the current page
    // (currentPage - 1) ensures offset is zero-based
    const offset = (currentPage - 1) * pageLimit;
    // extract the chunk of records from typeData with the offset  as the starting index
    const currentExercises = typeData.slice(offset, offset + pageLimit);
    setCurrentExercise(currentExercises);
  }


  useEffect(() => {
    // data handling - filter dependent on different filters that have been selected
    let firstArray = [];
    let secondArray = [];
    let thirdArray = [];

    if (type.includes('All')) {
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
    // console.log('thirdArray =', thirdArray);

    const newArray = [...thirdArray];
    setTypeData(newArray);
    numberOfX(newArray.length);
    setTotalRecords(newArray.length);
    onPageChanged({currentPage, pageLimit})

  }, [exerciseData, type, numberOfX, selectValue, inputValue]);

  // console.log('totalRecords =', totalRecords);

  return (
    <section id='exercise-content'>
      {isMobileDevice &&
        <ExerciseNavbar />
      }
      <div>
        <MuscelGroups onSelectChange={handleSelectChange} selectValue={selectValue} type={type} />
      </div>

      {typeData.length === 0
      ? null
      :  <Pagination totalRecords={totalRecords} pageLimit={20} pageNeighbours={ isExtraSmall ? 0 : 1} onPageChanged={onPageChanged} />
      }
      
      <div className='exercises'>
        {currentExercises === 0
          ? <Loader />
          : currentExercises.map((exercise) => {
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