// packages
import React, { useState, useEffect, createContext } from 'react';
// functions
import getLocal from '../functions/getLocal';
import saveLocal from '../functions/saveLocal';
import removeLocal from '../functions/removeLocal';


// Create Context
const FavouritesContext = createContext();

const FavouritesContextProvider = ({ children }) => {

  const [localFavourites, setLocalFavourites] = useState(null);

  const updateFavourites = (favourited, exercise) => {
    // console.log('favourited =', favourited);
    if (favourited) {
      // console.log('remove from favourites');
      removeLocal('fave', exercise?.id);
      setLocalFavourites(getLocal('fave'));

    } else if (!favourited && !localFavourites) {
      // console.log('1');
      saveLocal('fave', [exercise?.id]);
      setLocalFavourites(getLocal('fave'));

    } else if (!favourited && localFavourites) {
      // console.log('2');
      const newFavourites = [...localFavourites];
      newFavourites.push(exercise?.id);
      saveLocal('fave', newFavourites);
      setLocalFavourites(newFavourites);
    }
  }

  useEffect(() => {
    setLocalFavourites(getLocal('fave'));
  }, []);

  // console.log('localFavourites', localFavourites);

  return (
    <FavouritesContext.Provider value={{ localFavourites, updateFavourites }} >
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
export { FavouritesContextProvider };