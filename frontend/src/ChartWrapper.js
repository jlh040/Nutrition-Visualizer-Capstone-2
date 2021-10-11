import React, { useState, useEffect, useRef } from 'react';
import D3Chart from './D3Chart';

const ChartWrapper = () => {
  const chartElement = useRef(null);

  useEffect(() => {
    new D3Chart(chartElement.current);
  }, [])

  return (
    <div ref={chartElement}></div>
  )
};

export default ChartWrapper;