import React, { useState, useEffect, useRef } from 'react';
import D3Chart from './D3Chart';

const ChartWrapper = ({ selectedRecipes }) => {
  const chartElement = useRef(null);

  useEffect(() => {
    new D3Chart(chartElement.current);
  }, [])
  console.log(selectedRecipes)
  return (
    <div ref={chartElement}></div>
  )
};

export default ChartWrapper;