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
          <li>
            <NavLink to='/arms'>
              <img
                alt='arms'
                src={`${process.env.PUBLIC_URL}/assets/strength.png`}
                className={`body-area ${gender}`}
              />
            </NavLink>
          </li>
          <li>
            <NavLink to='/shoulders' >
              <img
                alt='shoulders'
                src={`${process.env.PUBLIC_URL}/assets/shoulder.png`}
                className={`body-area ${gender}`}
              />
            </NavLink>
          </li>
          <li>
            <NavLink to='/back' >
              <img
                alt='back'
                src={`${process.env.PUBLIC_URL}/assets/back.png`}
                className={`body-area ${gender}`}
              />
            </NavLink>
          </li>
          <li>
            <NavLink to='/chest'>
              <img
                alt='chest'
                src={`${process.env.PUBLIC_URL}/assets/chest.png`}
                className={`body-area ${gender}`}
              />
            </NavLink>
          </li>
          <li>
            <NavLink to='/core'>
              <img
                alt='core'
                src={`${process.env.PUBLIC_URL}/assets/torso.png`}
                className={`body-area ${gender}`}
              />
            </NavLink>
          </li>
          <li>
            <NavLink to='/legs'>
              <img
                alt='legs'
                src={`${process.env.PUBLIC_URL}/assets/legs.png`}
                className={`body-area ${gender}`}
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default ExerciseNavbar;