// packages
import { createContext } from 'react';
import { useMediaQuery } from 'react-responsive';


// create context 
const MediaContext = createContext();


const MediaContextProvider = ({children}) => {

  const isMobileDevice = useMediaQuery({ query: '(max-width: 576px)' });
  const isSmallScreen = useMediaQuery({ query: '(min-width: 576.1px) and (max-width: 760px)' });
  const isTabletDevice = useMediaQuery({ query: '(min-width: 760.1px) and (max-width: 992px)' });
  const isDesktopDevice = useMediaQuery({ query: '(min-width: 992.1px) and (max-width: 1200px)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1200.1px) ' });

  return (
    <MediaContext.Provider value={{ isMobileDevice, isSmallScreen, isTabletDevice, isDesktopDevice, isLargeScreen }}>
      {children}
    </MediaContext.Provider>
  )
}

export default MediaContext;
export { MediaContextProvider };

  