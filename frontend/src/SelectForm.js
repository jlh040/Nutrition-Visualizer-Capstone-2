import React, { useState } from 'react';
import RadioButtonGroup from './RadioButtonGroup';

const SelectForm = ({ setDietarySelection }) => {
  // holds the dietary value that is currently selected
  const [value, setValue] = useState('fat');
  
  // makes the radio button group a controlled component
  const handleChange = e => {
    const { value } = e.target;
    setValue(() => {
      return value;
    })
    // the dietary value is now accessible in the top most component: App.js
    setDietarySelection(() => {
      return value;
    })
  };

  return <RadioButtonGroup handleChange={handleChange} value={value} />
};

export default SelectForm;

