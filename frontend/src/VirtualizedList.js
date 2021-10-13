import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getUrl from './config';
import Box from '@mui/material/Box';
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
      console.log(recipes);
    }
    getData();
  }, []);

  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
};

export default VirtualizedList;