import React, { useState } from 'react';
import RadioButtonGroup from './RadioButtonGroup';

const SelectForm = ({ setDietarySelection }) => {
  const [value, setValue] = useState('fat');

  const handleChange = e => {
    setValue(e.target.value)
    setDietarySelection(e.target.value)
  }
  return <RadioButtonGroup handleChange={handleChange} value={value} />
};

export default SelectForm;

