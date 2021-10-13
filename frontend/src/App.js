import React from 'react';
import ChartWrapper from './ChartWrapper';
import RecipeList from './RecipeList';
import useGetRecipes from './hooks/useGetRecipes';
import './App.css';
import Grid from '@mui/material/Grid';

const App = () => {
  console.log(useGetRecipes());
  return (
    <div className="App">
        <Grid container justifyContent="center">
          <Grid item xs={4}>
            <RecipeList />
          </Grid>
          <Grid item xs={8}>
            <ChartWrapper />
          </Grid>
        </Grid>
    </div>
  );
}

export default App;
