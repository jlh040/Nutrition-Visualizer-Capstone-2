import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';

const App = () => {
  return (
    <div className="App">
        <Grid container justifyContent="center" spacing={9}>
          <Grid item xs={6} sx={{textAlign: 'center'}}>
            Hello there!
          </Grid>
          <Grid item xs={6}>
            Something is here!
          </Grid>
        </Grid>
    </div>
  );
}

export default App;
