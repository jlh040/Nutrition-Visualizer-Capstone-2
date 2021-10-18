import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import VirtualizedList from './VirtualizedList';

const RecipeList = ({ setSelectedRecipes, plan }) => {
  // holds the recipes that are currently selected
  const [checked, setChecked] = useState([]);

  // if a recipe is clicked on this will pass an object of information into checked;
  // also controls whether a checkmark appears
  const handleToggle = (obj) => () => {
    let isChecked = checked.some(d => d.title === obj.title);
    let newChecked = [...checked];

    if (!isChecked) {
      // if item is not checked, add it to newChecked
      newChecked.push(obj);
    } else {
      // otherwise, remove it from newChecked
      newChecked = newChecked.filter(d => d.title !== obj.title);
    }
    // update checked with the new list of checked recipes
    setChecked(newChecked);
  };

  // controls what each list item looks like in our virtualized list of recipes
  const renderRow = props => {
    const { index, style } = props;

    return (
      <ListItem
        key={index}
        style={style}
        disablePadding
      >
        <Tooltip title={props.data[index].summary} placement="right-start">
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
        </Tooltip>
      </ListItem>
    )
  }

  return (
    <>
      <VirtualizedList renderRow={renderRow} plan={plan} checked={checked} setChecked={setChecked} />
      {checked.length === 3 ? 
      <Button
        variant="contained" 
        sx={{mt: 3, width: "100%"}} 
        onClick={() => setSelectedRecipes(checked)}
        >
          Compare
      </Button> : 
      <Button
        variant="contained"
        sx={{mt: 3, width: "100%"}}
        disabled
      >
        Please select three recipes
      </Button>}
    </>
  )
};

export default RecipeList;