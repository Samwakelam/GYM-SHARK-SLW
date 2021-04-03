// Packages
import React, { useEffect, useState, useContext } from 'react';
import { Route, useLocation } from 'react-router-dom';
// Styles
import './sections.css';
// context
import GenderContext from '../../context/GenderContext';
// functions
import fetcher from '../../functions/fetcher';
// components
import ExerciseNavbar from '../navigation/ExerciseNavbar';
// pages
import Exercise from '../../pages/Exercise';
import Home from '../../pages/Home';
import Help from '../../pages/Help';
import Favourites from '../../pages/Favourites';


const Main = () => {

  const location = useLocation();
  const pathname = location.pathname.split('/');
  // console.log('location =', location);
  // console.log('pathname', pathname);
  
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

      <section id='banner'>
        <img
          alt='gym shark branding'
          src={`${process.env.PUBLIC_URL}/assets/gs-logo-long.png`}
          className='logo-long'
        />
        <h1 className={`${gender}`}>Exercise Library</h1>
        { pathname[1] === 'exercise' && <h3><span className={`${gender}`}>{exerciseNumber}</span> Exercises Shown</h3> }
        
      </section>

      <div>
        { pathname[1] === 'exercise' && <ExerciseNavbar /> }
        <Route
          exact path='/exercise'
          render={(props) => <Exercise {...props} exerciseData={exerciseData} type={['All']} numberOfX={handleExerciseLength} />}
        />
        <Route
          exact path='/exercise/arms'
          render={(props) => <Exercise {...props} exerciseData={exerciseData} type={['Arms', 'Biceps']} numberOfX={handleExerciseLength} />}
        />
        <Route
          exact path='/exercise/shoulders'
          render={(props) => <Exercise {...props} exerciseData={exerciseData} type={['Shoulders']} numberOfX={handleExerciseLength} />}
        />
        <Route
          exact path='/exercise/back'
          render={(props) => <Exercise {...props} exerciseData={exerciseData} type={['Back']} numberOfX={handleExerciseLength} />}
        />
        <Route
          exact path='/exercise/chest'
          render={(props) => <Exercise {...props} exerciseData={exerciseData} type={['Chest']} numberOfX={handleExerciseLength} />}
        />
        <Route
          exact path='/exercise/core'
          render={(props) => <Exercise {...props} exerciseData={exerciseData} type={['Core']} numberOfX={handleExerciseLength} />}
        />
        <Route
          exact path='/exercise/legs'
          render={(props) => <Exercise {...props} exerciseData={exerciseData} type={['Legs', 'Calves', 'Glutes']} numberOfX={handleExerciseLength} />}
        />
        <Route
          exact path='/favourites'
          component={Favourites}
        />
        <Route
          exact path='/help'
          component={Help}
        />
        <Route
          exact path='/'
          component={Home}
        />
      </div>

    </main>
  );
}

export default Main;