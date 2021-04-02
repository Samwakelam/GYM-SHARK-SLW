// Packages
import React, { useEffect, useState, useContext } from 'react';
import { Route } from 'react-router-dom';

// Styles
import './sections.css';

// context
import GenderContext from '../../context/GenderContext';

// functions
import fetcher from '../../functions/fetcher';

import ExerciseNavbar from '../navigation/ExerciseNavbar';

// pages
import AllExercise from '../../pages/AllExercise';
import TypeExercise from '../../pages/TypeExercise';
// components
import SearchBar from '../module/SearchBar';


const Main = () => {

  const { gender } = useContext(GenderContext);

  // state
  const [ exerciseData, setExerciseData ] = useState([]);
  const [ exerciseNumber, setExerciseNumber ] = useState('');

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

  const handleExerciseLength = (numberOfX) => {
    setExerciseNumber(numberOfX);
  }

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
        <h1 className={`${gender}`}>Exercise Library</h1>
        <h3><span className={`${gender}`}>{exerciseNumber}</span> Exercises Shown.</h3>
      </section>

      <div>
        <ExerciseNavbar />
        <Route
          exact path='/'
          render={(props) => <AllExercise {...props} exerciseData={exerciseData} />}
        />
        <Route
          exact path='/arms'
          render={(props) => <TypeExercise {...props} exerciseData={exerciseData} type={['Arms', 'Biceps']} numberOfX={handleExerciseLength} />}
        />
        <Route
          exact path='/shoulders'
          render={(props) => <TypeExercise {...props} exerciseData={exerciseData} type={['Shoulders']} numberOfX={handleExerciseLength} />}
        />
        <Route
          exact path='/back'
          render={(props) => <TypeExercise {...props} exerciseData={exerciseData} type={['Back']} numberOfX={handleExerciseLength} />}
        />
        <Route
          exact path='/chest'
          render={(props) => <TypeExercise {...props} exerciseData={exerciseData} type={['Chest']} numberOfX={handleExerciseLength} />}
        />
        <Route
          exact path='/core'
          render={(props) => <TypeExercise {...props} exerciseData={exerciseData} type={['Core']} numberOfX={handleExerciseLength} />}
        />
        <Route
          exact path='/legs'
          render={(props) => <TypeExercise {...props} exerciseData={exerciseData} type={['Legs', 'Calves', 'Glutes']} numberOfX={handleExerciseLength} />}
        />
      </div>

    </main>
  );
}

export default Main;