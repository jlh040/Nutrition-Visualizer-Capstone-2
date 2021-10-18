import React, { useState, useEffect, useRef } from 'react';
import D3Chart from './D3Chart';

const ChartWrapper = ({ selectedRecipes, dietarySelection }) => {
  const chartElement = useRef(null); // holds the div element that contains the graph
  const [chart, setChart] = useState(null); // holds the D3Chart instance

  useEffect(() => {
    if (!chart) {
      // upon initial page render, make a new D3Chart instance and put it inside chart
      setChart(new D3Chart(chartElement.current));
    }
    else {
      // if the dietary selection, or selected recipes changes, we need to update our D3 chart
      chart.update(selectedRecipes, dietarySelection);
    }
  }, [selectedRecipes, chart, dietarySelection]);

  return (
    <div ref={chartElement}></div>
  )
};

export default ChartWrapper;