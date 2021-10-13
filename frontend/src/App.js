import React, { useState } from 'react';
import ChartWrapper from './ChartWrapper';
import SelectForm from './SelectForm';
import RecipeList from './RecipeList';
import './App.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const App = () => {
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [dietaryValues, setDietaryValues] = useState([])

  return (
    <div className="App">
      <Grid container justifyContent="center">
        <Grid item xs={4}>
          <RecipeList setSelectedRecipes={setSelectedRecipes} />
        </Grid>
        <Grid item xs={8}>
          <SelectForm />
          <ChartWrapper selectedRecipes={selectedRecipes} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
