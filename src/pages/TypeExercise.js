// packages
import React, { useContext, useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import LazyLoad from 'react-lazyload';

// context
import GenderContext from '../context/GenderContext';

// components
import Card from '../components/module/Card';
import Loader from '../components/module/Loader';
import Placeholder from '../components/module/Placeholder';


const TypeExercise = ({ exerciseData, type }) => {

  // state
  const [typeData, setTypeData] = useState([]);
  // context 
  const { gender } = useContext(GenderContext);

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
  }, [exerciseData, type]);


  return (
    <section id='exercise-content'>
      { exerciseData.length === 0
        ? <Loader />
        : typeData.map((exercise) => {
          return (
            <Card key={exercise?.id} bodyAreas={exercise?.bodyAreas}>
              <div className='img-container'>
                <LazyLoad placeholder={ <Placeholder /> } offset={100} debounce={500}>
                  <img
                    alt='exercise'
                    src={gender === 'male' ? exercise?.male.image : exercise?.female.image}
                    className='exercise-img'
                  />
                </LazyLoad>
              </div>
              <div className='infomation-container'>
                <p>{exercise?.bodyAreas}</p>
                <h2>{exercise?.name}</h2>
                <div className='transcript'>
                  {ReactHtmlParser(exercise?.transcript)}
                </div>
              </div>
            </Card>
          );
        })
      }
    </section>
  );
}

export default TypeExercise;