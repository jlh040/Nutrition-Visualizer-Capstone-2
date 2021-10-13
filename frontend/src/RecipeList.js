import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import VirtualizedList from './VirtualizedList';

const RecipeList = () => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const renderRow = props => {
    const { index, style } = props;

    return (
      <ListItem
        key={index}
        style={style}
        disablePadding
      >
        <ListItemButton onClick={handleToggle(index)} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checked.indexOf(index) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': index }}
            />
          </ListItemIcon>
          <ListItemText id={index} primary={`Line item ${index + 1}`} />
        </ListItemButton>
      </ListItem>
    )
  }

  return (
    <VirtualizedList renderRow={renderRow} />
  )
};

export default RecipeList;