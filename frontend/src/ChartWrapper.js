import React, { useState, useEffect, useRef } from 'react';
import D3Chart from './D3Chart';

const ChartWrapper = ({ selectedRecipes }) => {
  const chartElement = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (!chart) {
      setChart(new D3Chart(chartElement.current));
    }
    else {
      chart.update(selectedRecipes);
    }
  }, [selectedRecipes, chart]);

  return (
    <div ref={chartElement}></div>
  )
};

export default ChartWrapper;