import React, { useState } from 'react';
import ChartWrapper from './ChartWrapper';
import SelectForm from './SelectForm';
import RecipeList from './RecipeList';
import PlanDropdown from './PlanDropdown';
import './App.css';
import Grid from '@mui/material/Grid';

const App = () => {
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [dietarySelection, setDietarySelection] = useState('fat');
  const [plan, setPlan] = useState('');

  return (
    <div className="App">
      <Grid container>
        <Grid item xs={2}>
          <PlanDropdown plan={plan} setPlan={setPlan} />
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={4}>
          <RecipeList setSelectedRecipes={setSelectedRecipes} />
        </Grid>
        <Grid item xs={8}>
          <SelectForm setDietarySelection={setDietarySelection} />
          <ChartWrapper selectedRecipes={selectedRecipes} dietarySelection={dietarySelection} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
