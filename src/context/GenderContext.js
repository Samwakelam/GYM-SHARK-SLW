// packages
import React, { useState, createContext } from 'react';


// Create Context
const GenderContext = createContext();

const GenderContextProvider = ({children}) => {

  const [ gender, setGender ] = useState('male');

  const genderMale = () => {
    setGender('male');
  }

  const genderFemale = () => {
    setGender('female');
  }

  return (
    <GenderContext.Provider value={{ gender, genderMale, genderFemale }} >
      {children}
    </GenderContext.Provider>
  )
}

export default GenderContext;
export { GenderContextProvider };