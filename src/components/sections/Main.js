// Packages
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

// Styles
import './sections.css';

// functions
import fetcher from '../../functions/fetcher';

import ExerciseNavbar from '../navigation/ExerciseNavbar';

// pages
import AllExercise from '../../pages/AllExercise';
import TypeExercise from '../../pages/TypeExercise';


const Main = () => {

  // state
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

      <section id='filter'>
        <img
          alt='gym shark branding'
          src={`${process.env.PUBLIC_URL}/assets/gs-logo-long.png`}
          className='logo-long'
        />

        <select name='bodyAreas' id='bodyAreas-filter' >
          <option value='all' >All Areas</option>
          <option value='arms' >Arms</option>
        </select>
      </section>

      <div>
        <ExerciseNavbar />
        <Route
          exact path='/'
          render={(props) => <AllExercise {...props} exerciseData={exerciseData} />}
        />
        <Route
          exact path='/arms'
          render={(props) => <TypeExercise {...props} exerciseData={exerciseData} type={['Arms', 'Biceps']} />}
        />
        <Route
          exact path='/shoulders'
          render={(props) => <TypeExercise {...props} exerciseData={exerciseData} type={['Shoulders']} />}
        />
        <Route
          exact path='/back'
          render={(props) => <TypeExercise {...props} exerciseData={exerciseData} type={['Back']} />}
        />
        <Route
          exact path='/chest'
          render={(props) => <TypeExercise {...props} exerciseData={exerciseData} type={['Chest']} />}
        />
        <Route
          exact path='/core'
          render={(props) => <TypeExercise {...props} exerciseData={exerciseData} type={['Core']} />}
        />
        <Route
          exact path='/legs'
          render={(props) => <TypeExercise {...props} exerciseData={exerciseData} type={['Legs', 'Calves', 'Glutes']} />}
        />

      </div>

    </main>
  )
}

export default Main;