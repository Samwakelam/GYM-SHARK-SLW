// packages
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { faDumbbell, faHome } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartLine, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
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
            exact to={{
              pathname: '/',
              aboutProps: { page: 'home' },
            }}
          >
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
        </li>

        <li>
          <NavLink className={`${gender}`}
            to={{
              pathname: '/exercise',
              aboutProps: { page: 'exercise' },
            }}
          >
            <FontAwesomeIcon icon={faDumbbell} />
          </NavLink>
        </li>

        <li>
          <NavLink className={`${gender}`}
            to={{
              pathname: '/favourites',
              aboutProps: { page: 'favourites' },
            }}
          >
            <FontAwesomeIcon icon={heartLine} />
          </NavLink>
        </li>

        <li>
          <NavLink className={`${gender}`}
            to={{
              pathname: '/help',
              aboutProps: { page: 'help' },
            }}
          >
            <FontAwesomeIcon icon={faQuestionCircle} />
          </NavLink>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;