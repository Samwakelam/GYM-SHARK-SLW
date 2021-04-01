// Packages
import React, { useEffect, useState } from 'react';

// syles
import './modules.css';


const Toggler = ({onEnable}) => {

  const [ isEnabled, setIsEnabled ] = useState('off');

  const onToggle = (event) => {
    event.preventDefault();
    setIsEnabled(isEnabled === 'on' ? 'off' : 'on');
  }

  useEffect(() => {
    onEnable(isEnabled);
  }, [isEnabled, onEnable]);

  return (
    <label className="switch" onClick={ onToggle }>
      <span className={`slider ${isEnabled}`} ></span>
    </label>
  );
}

export default Toggler;
