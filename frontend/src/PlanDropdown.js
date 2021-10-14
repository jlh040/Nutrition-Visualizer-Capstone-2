import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const PlanDropdown = ({ plan, setPlan }) => {
  const handleChange = (event) => {
    setPlan(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Plan</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={plan}
          label="Plan"
          onChange={handleChange}
        >
          <MenuItem value={'slim down'}>Slim Down</MenuItem>
          <MenuItem value={'bulk up'}>Bulk Up</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default PlanDropdown;