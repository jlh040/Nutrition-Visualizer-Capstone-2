import { select, axisLeft, scaleBand, scaleLinear, axisBottom, min, max} from 'd3';

// set the dimensions and margin for the SVG container
const MARGIN = {TOP: 10, BOTTOM: 75, LEFT: 50, RIGHT: 10};
const WIDTH = 900 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

class D3Chart {
  // holds all code that only needs to run once
  constructor(element) {
    // store the value of 'this' so we don't lose its context
    const vis = this;

    vis.g = select(element) // select the parent div from ChartWrapper.js
      .append('svg') // append an svg element to it
        .attr('preserveAspectRatio', 'xMinYMin meet') // make the svg element responsive
        .attr('viewBox',
        '0 0 ' + (WIDTH + MARGIN.LEFT + MARGIN.RIGHT) + ' ' + (HEIGHT + MARGIN.TOP + MARGIN.BOTTOM))
      .append('g') // append a group element to the svg
        .attr('transform', `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`); // shift the group element so the labels and axes show up
    
    // append the y label to the group alement
    vis.yLabel = vis.g.append('text')
      .attr('x', -(HEIGHT / 2))
      .attr('y', -34)
      .attr('text-anchor', 'middle')
      .text('Amount of fat (grams)')
      .attr('transform', 'rotate(-90)')
    
    // append the x axis container to the group element
    vis.xAxisGroup = vis.g.append('g')
      .attr('transform', `translate(0, ${HEIGHT})`);
    
    // append the y axis container to the group element
    vis.yAxisGroup = vis.g.append('g');
  }

  // holds all code that needs to be updated
  update(selectedRecipes, dietarySelection) {
    const vis = this;

    // store the selected recipes on the object
    vis.data = selectedRecipes;

    // change the y label according to which dietary value the user selected
    vis.yLabel.text(`${dietarySelection === 'fat' ? 'Amount of fat (grams)' : 'Number of calories (kcal)'}`);

    // create the scale for the x axis
    const x = scaleBand()
      .domain(vis.data.map(d => d.title))
      .range([0, WIDTH])
      .paddingInner(0.5)
      .paddingOuter(0.1);

    // the scale applies to the bottom of the graph
    const xAxisCall = axisBottom(x);

    // set the position of the x axis text
    vis.xAxisGroup
      .call(xAxisCall)
    .selectAll('text')
      .attr('text-anchor', 'end')
      .attr('dx', '-1em')
      .attr('dy', '-8em')
      .attr('font-size', '12px')
      .attr('transform', 'rotate(90)')
    
    // create the scale for the y axis
    const y = scaleLinear()
      .domain([
        min(vis.data, d => dietarySelection === 'fat' ? d.fat : d.calories) * 0.5,
        max(vis.data, d => dietarySelection === 'fat' ? d.fat : d.calories)
      ])
      .range([HEIGHT, 0]);
    
    // the y axis tick marks show up on the left of the y axis
    const yAxisCall = axisLeft(y);
    
    // make the y axis show up and implement a transition when it changes
    vis.yAxisGroup
      .transition(500)
      .call(yAxisCall);

    // join the data on the page with the new data via an object of arrays
    const rects = vis.g.selectAll('rect')
      .data(vis.data);
    
    // take the data on the page that is not in our new data array and remove it
    rects.exit()
      .transition(500)
      .attr('height', 0)
      .attr('y', HEIGHT)
        .remove();

    // update the data that still exists on the page
    rects
      .transition(500)
        .attr('x', d => x(d.title))
        .attr('y', d => y(dietarySelection === 'fat' ? d.fat : d.calories))
        .attr('height', d => HEIGHT - y(dietarySelection === 'fat' ? d.fat : d.calories))
        .attr('width', x.bandwidth())
        .attr('fill', '#05386B');

    // add in the new data
    rects.enter().append('rect')
      .attr('x', d => x(d.title))
      .attr('width', x.bandwidth())
      .attr('fill', '#05386B')
      .attr('y', HEIGHT)
      .transition(500)
        .attr('y', d => y(dietarySelection === 'fat' ? d.fat : d.calories))
        .attr('height', d =>  HEIGHT - y(dietarySelection === 'fat' ? d.fat : d.calories));
  }
}

export default D3Chart;