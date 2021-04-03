// packages
import React, { useContext } from 'react';

// styles
import './forms.css';

// context
import GenderContext from '../../context/GenderContext';


const MuscelGroups = ({ onSelectChange, selectValue, type }) => {

  const selectChange = (event) => {
    // console.log('value =', value);
    const value = event.target.value;
    onSelectChange(value);
  }

  // context
  const { gender } = useContext(GenderContext);

  return (
    <select name='bodyAreas' id='bodyAreas-filter' value={selectValue} onChange={selectChange} >
      <option className={`${gender}`} value='all' >All Muscle Groups</option>
      {
        (type.includes('Shoulders') || type.includes('Arms') || type.includes('Chest') || type.includes('All')) && (
          <option value='Triceps' >Triceps</option>
        )
      }
      {
        (type.includes('Arms') || type.includes('Back') || type.includes('All') ) && (
          <option value='Biceps' >Biceps</option>
        )
      }
      {
        (type.includes('Core') || type.includes('All')) && (
          <option value='Abs' >Abs</option>
        )
      }
      {
        (type.includes('Legs') || type.includes('Back') || type.includes('All')) && (<>
          <option value='Hamstrings' >Hamstrings</option>
          <option value='Quads' >Quads</option>
          
        </>)
      }
      {
        (type.includes('Legs') || type.includes('All')) && (<>
          <option value='Glutes' >Glutes</option>
          <option value='Calves' >Calves</option>
        </>)
      }
    </select>
  );
}

export default MuscelGroups;