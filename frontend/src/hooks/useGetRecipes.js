import React from 'react';
import axios from 'axios';
import getUrl from '../config';

const useGetRecipes = async () => {
  try {
    const resp = await axios.get(getUrl());
    const recipes = resp.data.results.map(d => {
      return {
        title: d.title,
        fat: d.nutrition.nutrients[0].amount
      }
    })
    console.log(recipes);
  }
  catch(e) {
    console.log(e);
  }
}

export default useGetRecipes;