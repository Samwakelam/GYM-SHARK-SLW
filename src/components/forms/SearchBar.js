// Packages
import React, { useState } from 'react';
//font awesome packages
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// styles 
import './forms.css'

const toTitleCase = (string) => {
  const array = string.toLowerCase().split(' ');

  let titleArray = [];
  for (let i = 0; i < array.length; i++){
    // console.log('array[i].length !== 0 =', array[i].length !== 0);
    if(array[i].length !== 0){
      let wordArray = array[i].split("");
      wordArray[0] = wordArray[0].toUpperCase();
      
      let wordString = wordArray.join("");
      titleArray.push(wordString);
    } else {
      titleArray.push(array[i]);
    }
  }
  // console.log('titleArray =', titleArray);
  const titleString = titleArray.join(' ');
  // console.log('titleString =', titleString);

  return titleString;
}


const SearchBar = ({onInputChange, inputValue}) => {

  const [ inputDisplay, setInputDisplay ] = useState('none');

  const handleDisplayTrue = () => {
    setInputDisplay('inline-block');
  }

  const handleDisplayFalse = () => {
    setInputDisplay('none');
  }

  const inputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const formatValue = toTitleCase(value);
    // console.log('formatValue =', formatValue);
    onInputChange(formatValue);
  }

  // console.log('inputValue =', inputValue);
  // console.log('inputValue !== =', inputValue !== '');
  // console.log('inputValue.length =', inputValue.length);

  return(
    <form id='search-bar' onMouseEnter={handleDisplayTrue} onMouseLeave={handleDisplayFalse} onTouchStart={handleDisplayTrue}>
      <input
        type='text'
        id='exercise-search'
        name='exercise-search'
        placeholder='Search'
        style={{ display:`${inputDisplay}` }}
        onChange={inputChange}
        value={inputValue}
      />
      <label htmlFor='exercise-search'>
        <FontAwesomeIcon icon={faSearch} />
      </label>
    </form>
  );
}

export default SearchBar; 