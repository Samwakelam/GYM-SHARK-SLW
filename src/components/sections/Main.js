// Packages
import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

// Styles
import './sections.css';

// functions
import fetcher from '../../functions/fetcher';

// components
import Card from '../module/Card';


const Main = () => {

  const [exerciseData, setExerciseData] = useState([]);

  const fetchData = async () => {

    const fetchResponse = await fetcher();
    // console.log('fetchResponse =', fetchResponse);
    setExerciseData(fetchResponse);
  };


  useEffect(() => {
    fetchData();

    return () => {
      console.log('I did Unmount');
    }

  }, []);

  // console.log('exerciseData =', exerciseData);
  // console.log('exerciseData[0]?.transcript =', exerciseData[0]?.transcript, typeof exerciseData[0]?.transcript);

  return (
    <main>
      { exerciseData.map((exercise) => {
        return(
          <Card key={exercise?.id} bodyAreas={exercise?.bodyAreas}>
            <img
              alt='exercise'
              src={exercise?.male.image}
              className='exercise-img'
            />
            <div>
              <h2>{exercise?.name}</h2>
              <div className='transcript'>
                {ReactHtmlParser(exercise?.transcript)}
              </div>
            </div>
          </Card>
        );
      })}
    </main>
  )
}

export default Main;