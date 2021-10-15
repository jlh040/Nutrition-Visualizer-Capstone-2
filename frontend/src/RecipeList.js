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