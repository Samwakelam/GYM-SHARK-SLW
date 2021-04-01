// packages
import React, { useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';

// styles
import './pages.css';

// context
import GenderContext from '../context/GenderContext';

// components
import Card from '../components/module/Card';


const AllExercise = ({exerciseData}) => {

  const { gender } = useContext(GenderContext);

  return (
    <section id='exercise-content'>
      {exerciseData.map((exercise) => {
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
  )
}

export default AllExercise;