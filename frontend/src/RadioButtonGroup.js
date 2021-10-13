import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioButtonGroup = () => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Dietary Values</FormLabel>
      <RadioGroup row aria-label="dietary values" name="row-radio-buttons-group">
        <FormControlLabel value="fat" control={<Radio />} label="Fat" />
        <FormControlLabel value="calories" control={<Radio />} label="Calories" />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonGroup;