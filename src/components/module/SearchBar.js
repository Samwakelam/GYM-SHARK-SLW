// Packages
import React, { useState } from 'react';
//font awesome packages
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// styles 
import './modules.css'


const SearchBar = () => {

  const [ inputDisplay, setInputDisplay ] = useState('none');
  const [ inputValue, setInputValue ] = useState('');

  const handleDisplayTrue = () => {
    setInputDisplay('inline-block');
  }

  const handleDisplayFalse = () => {
    setInputDisplay('none');
  }

  const handleInputChange = (event) => {
    event.preventDefault();
    
    const value = event.target.value;
    setInputValue(value);
  }

  console.log('inputValue =', inputValue);

  return(
    <form id='search-bar' onMouseEnter={handleDisplayTrue} onMouseLeave={handleDisplayFalse}>
      <input
        type='text'
        id='exercise-search'
        name='exercise-search'
        placeholder='Search'
        style={{ display:`${inputDisplay}` }}
        onChange={handleInputChange}
      />
      <label htmlFor='exercise-search'>
        <FontAwesomeIcon icon={faSearch} />
      </label>
    </form>
  );
}

export default SearchBar; 