// Packages
import React, { useContext } from 'react';

// Styles
import './sections.css';

// context
import GenderContext from '../../context/GenderContext';

// components
import Toggler from '../module/Toggler';


const Header = () => {

  const { genderMale, genderFemale } = useContext(GenderContext);

  const handleEnable = (bool) => {
    // console.log('bool =', bool);
    if(bool === 'on'){
      genderFemale();
    } else if(bool === 'off'){
      genderMale();
    }
  }

  return (
    <header>
      <Toggler onEnable={handleEnable} />
    </header>
  )
}

export default Header;