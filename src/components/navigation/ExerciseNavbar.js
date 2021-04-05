// packages
import React, { useContext, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

// styles
import './Nav.css';

// context
import GenderContext from '../../context/GenderContext';
import MediaContext from '../../context/MediaContext';


const ExerciseNavbar = () => {

  const [contentWidth, setContentWidth] = useState('0px');
  const [activeState, setActiveState] = useState('');
  const [activeStyle, setActiveStyle] = useState('');

  const { gender } = useContext(GenderContext);
  const { isMobileDevice } = useContext(MediaContext);

  const content = useRef(null);

  let navAttr;
  if (isMobileDevice) {
    navAttr = {
      ref: content,
      style: {
        width: contentWidth,
      },
      className: "collapse-dash-content",
    }
  } else {
    navAttr = {
      ref: null,
      style: null,
      className: "",
    }
  }

  const toggelCollapse = () => {

    setActiveState(activeState === '' ? 'active' : '');
    setActiveStyle(activeStyle === '' ? 'active-style' : '');
    // console.log('content.current.scrollWidth =', content.current.scrollWidth);
    setContentWidth(
      activeState === "active" ? "0px" : '115px'
    );

  }

  return (<>
    {
      (isMobileDevice) && (
        <button
          id='collapsed-dash-menu'
          className={`${activeState}`}
          onClick={toggelCollapse}
        >
          <div id="bar1" className={`${activeStyle}`}></div>
          <div id="bar2" className={`${activeStyle}`}></div>
          <div id="bar3" className={`${activeStyle}`}></div>
        </button>
      )
    }
    <nav
      id='exercise-navigation'
      ref={navAttr.ref}
      style={navAttr.style}
      className={navAttr.className}
    >
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
  </>);
}

export default ExerciseNavbar;