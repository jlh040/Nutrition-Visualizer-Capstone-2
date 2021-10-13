import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getUrl from './config';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { FixedSizeList } from 'react-window';


const VirtualizedList = ({ renderRow }) => {
  const [recipes, setRecipes] = useState(null)
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(getUrl('three'));
      const recipes = resp.data.results.map(d => ({
        title: d.title,
        fat: d.nutrition.nutrients[0].amount
      }));
      setRecipes(recipes);
    }
    getData();
  }, []);

  return (
    (recipes ? <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={3}
        itemData={recipes}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box> : <CircularProgress color="inherit" />)
  );
};

export default VirtualizedList;