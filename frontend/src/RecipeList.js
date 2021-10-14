import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import VirtualizedList from './VirtualizedList';

const RecipeList = ({ setSelectedRecipes, plan }) => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (obj) => () => {
    let isChecked = checked.some(d => d.title === obj.title);
    let newChecked = [...checked];

    if (!isChecked) {
      newChecked.push(obj);
    } else {
      newChecked = newChecked.filter(d => d.title !== obj.title);
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
        <ListItemButton 
          onClick={handleToggle({
              title: props.data[index].title, 
              fat: props.data[index].fat,
              calories: props.data[index].calories
          })} 
          dense
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checked.some(d => d.title === props.data[index].title)}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': index }}
            />
          </ListItemIcon>
          <ListItemText id={index} primary={`${props.data[index].title}`} />
        </ListItemButton>
      </ListItem>
    )
  }

  return (
    <>
      <VirtualizedList renderRow={renderRow} plan={plan} checked={checked} setChecked={setChecked} />
      <Button variant="contained" onClick={() => setSelectedRecipes(checked)}>Compare</Button>
    </>
  )
};

export default RecipeList;