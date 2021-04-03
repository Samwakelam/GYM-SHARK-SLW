// packages
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// styles
import './Nav.css';

// context
import GenderContext from '../../context/GenderContext';


const ExerciseNavbar = () => {

  const { gender } = useContext(GenderContext);

  return (
    <nav id='exercise-navigation'>
      <div>
        <ul>

          <li className='nav-item'>
            <NavLink
              to={{
                pathname: '/exercise/arms',
                aboutProps: { page: 'exercise' },
              }}
            >
              <img
                alt='arms'
                src={`${process.env.PUBLIC_URL}/assets/strength.png`}
                className={`body-area ${gender}`}
              />
              <h3 className='nav-item'>Arms</h3>
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              to={{
                pathname: '/exercise/shoulders',
                aboutProps: { page: 'exercise' },
              }}
            >
              <img
                alt='shoulders'
                src={`${process.env.PUBLIC_URL}/assets/shoulder.png`}
                className={`body-area ${gender}`}
              />
              <h3 className='nav-item'>Shoulders</h3>
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              to={{
                pathname: '/exercise/back',
                aboutProps: { page: 'exercise' },
              }}
            >
              <img
                alt='back'
                src={`${process.env.PUBLIC_URL}/assets/back.png`}
                className={`body-area ${gender}`}
              />
              <h3 className='nav-item'>Back</h3>
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              to={{
                pathname: '/exercise/chest',
                aboutProps: { page: 'exercise' },
              }}
            >
              <img
                alt='chest'
                src={`${process.env.PUBLIC_URL}/assets/chest.png`}
                className={`body-area ${gender}`}
              />
              <h3 className='nav-item'>Chest</h3>
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              to={{
                pathname: '/exercise/core',
                aboutProps: { page: 'exercise' },
              }}
            >
              <img
                alt='core'
                src={`${process.env.PUBLIC_URL}/assets/torso.png`}
                className={`body-area ${gender}`}
              />
              <h3 className='nav-item'>Core</h3>
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              to={{
                pathname: '/exercise/legs',
                aboutProps: { page: 'exercise' },
              }}
            >
              <img
                alt='legs'
                src={`${process.env.PUBLIC_URL}/assets/legs.png`}
                className={`body-area ${gender}`}
              />
              <h3 className='nav-item'>Legs</h3>
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default ExerciseNavbar;