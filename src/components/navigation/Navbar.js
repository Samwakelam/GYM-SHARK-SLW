// packages
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { faDumbbell, faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartLine } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './Nav.css';
// context
import GenderContext from '../../context/GenderContext';


const Navbar = () => {

  const { gender } = useContext(GenderContext);

  return (
    <nav id='top-nav' >
      <ul>
        <li>
          <NavLink className={`${gender}`}
            to={{
              pathname: '/exercise',
              aboutProps: { page: 'exercise'},
            }}
          >
            <FontAwesomeIcon icon={faDumbbell} />
          </NavLink>
        </li>
        <li>
        <NavLink className={`${gender}`}
            to={{
              pathname: '/favourites',
              aboutProps: { page: 'favourites'},
            }}
          >
            <FontAwesomeIcon icon={heartLine} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;