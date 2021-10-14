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
  const [plan, setPlan] = useState('slim down');

  return (
    <div className="App">
      <Grid container>
        <Grid item xs={2}>
          <PlanDropdown plan={plan} setPlan={setPlan} />
        </Grid>
      </Grid>
      <Grid container sx={{my: 5, border: 1, borderColor: 'primary.success', borderRadius: 1}} justifyContent="center">
        <Grid item sx={{my: 'auto'}} xs={3}>
          <RecipeList setSelectedRecipes={setSelectedRecipes} plan={plan} />
        </Grid>
        <Grid item sx={{mt: 5}} xs={8}>
          <SelectForm setDietarySelection={setDietarySelection} />
          <ChartWrapper selectedRecipes={selectedRecipes} dietarySelection={dietarySelection} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
