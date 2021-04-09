// packages
import React, { useEffect, useState, useContext, useRef } from 'react';
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
  const section = useRef(null);
  // data state
  const [typeData, setTypeData] = useState([]);
  const [currentExercises, setCurrentExercise] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit ] = useState(30);
  const [totalRecords, setTotalRecords] = useState(null);
  // modal State
  const [selectedExercise, setSelectedExercise] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [cardLocation, setCardLocation] = useState('');
  // forms state
  const [selectValue, setSelectValue] = useState('all');
  const [inputValue, setInputValue] = useState('');
  // style state
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
    if((sectionHeight - 584) < 0 ) {
      openLocation = 24;
    } else if((sectionHeight - 584) > 0 && (sectionHeight - callLocation) < 584){
      openLocation = sectionHeight - 24 - 584;
    } else {
      openLocation = callLocation;
    }

    if((sectionHeight + 24) < 584){
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
    if ((cardHeight > sectionHeight) && (sectionHeight - cardLocation) > cardHeight && cardHeight !== 560){
      // console.log('1');
      setSectionStyleHeight(`${(cardHeight + cardLocation + 48)}px`);
    } else if((cardHeight < sectionHeight) && (sectionHeight - cardLocation) < cardHeight && cardHeight !== 560){
      // console.log('2');
      openLocation = sectionHeight - 48 - cardHeight;
    } else if ((cardHeight < sectionHeight && (sectionHeight - cardLocation) > cardHeight && cardHeight !== 560)){
      // console.log('3');
      setSectionStyleHeight(`${(cardHeight + cardLocation + 48)}px`);
    } else if ((cardHeight > sectionHeight) && (sectionHeight - cardLocation) < cardHeight && cardHeight !== 560){
      setSectionStyleHeight(`${(cardHeight + cardLocation + 48)}px`);
    } else if (cardHeight < sectionHeight && cardHeight === 560){
      setSectionStyleHeight(`${cardHeight + 72}px`);
    }

    setCardLocation(openLocation);
  }

  const handleModalClose = () => {
    setOpenModal(false);
    setSectionStyleHeight('100%');
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
    <section ref={section} id='exercise-content' style={sectionStyle}>
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
        <Modal onClose={handleModalClose} openLocation={cardLocation}>
          <Card bodyAreas={selectedExercise?.bodyAreas} exercise={selectedExercise} cardHeight={handleCardHeightChange}/>
        </Modal>}

      <SearchBar onInputChange={handleInputChange} inputValue={inputValue} />
    </section>
  );
}

export default Exercise;