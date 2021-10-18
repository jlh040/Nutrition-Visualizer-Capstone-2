import React, { useState } from 'react';
import ChartWrapper from './ChartWrapper';
import SelectForm from './SelectForm';
import RecipeList from './RecipeList';
import PlanDropdown from './PlanDropdown';
import './App.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const App = () => {
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [dietarySelection, setDietarySelection] = useState('fat');
  const [plan, setPlan] = useState('slim down');

  return (
    <div className="App">
      <Grid container>
        <Grid item  xs={12} md={2}>
          <PlanDropdown plan={plan} setPlan={setPlan} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sx={{mt: 1}} xs={12}>
          <Typography variant="h3" component="div" gutterBottom>
            Craft your summer body!
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{my: 5, border: 1, borderRadius: 1}} justifyContent="center">
        <Grid item sx={{my: 'auto'}} xs={12} md={3}>
          <RecipeList setSelectedRecipes={setSelectedRecipes} plan={plan} />
        </Grid>
        <Grid item sx={{mt: 5}} xs={12} md={8}>
          <SelectForm setDietarySelection={setDietarySelection} />
          <ChartWrapper selectedRecipes={selectedRecipes} dietarySelection={dietarySelection} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
