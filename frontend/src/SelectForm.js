import React, { useState } from 'react';
import RadioButtonGroup from './RadioButtonGroup';

const SelectForm = ({ setDietarySelection }) => {
  const [value, setValue] = useState('fat');
  
  const handleChange = e => {
    const { value } = e.target;
    setValue(() => {
      return value;
    })
    setDietarySelection(() => {
      return value;
    })
  };

  return <RadioButtonGroup handleChange={handleChange} value={value} />
};

export default SelectForm;

