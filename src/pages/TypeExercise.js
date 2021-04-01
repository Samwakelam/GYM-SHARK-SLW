// packages
import React, { useContext, useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

// context
import GenderContext from '../context/GenderContext';

// components
import Card from '../components/module/Card';


const TypeExercise = ({exerciseData, type}) => {

  // state
  const [ typeData , setTypeData ] = useState([]);
  // context 
  const { gender } = useContext(GenderContext);

  useEffect(() => {
    let newArray = [];
    exerciseData.forEach((exercise) => {
      // console.log('exercise includes Arms =', exercise.bodyAreas.includes('Arms'));
      if(exercise.bodyAreas.some( item => type.includes(item))) {
        newArray.push(exercise);
      }
    });
    setTypeData(newArray);
  }, [exerciseData, type]);


  return (
    <section id='exercise-content'>
      {typeData.map((exercise) => {
        return (
          <Card key={exercise?.id} bodyAreas={exercise?.bodyAreas}>
            <img
              alt='exercise'
              src={gender === 'male' ? exercise?.male.image : exercise?.female.image}
              className='exercise-img'
            />
            <div>
              <p>{exercise?.bodyAreas}</p>
              <h2>{exercise?.name}</h2>
              <div className='transcript'>
                {ReactHtmlParser(exercise?.transcript)}
              </div>
            </div>
          </Card>
        );
      })}
    </section>
  );
}

export default TypeExercise;