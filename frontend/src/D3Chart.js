import * as d3 from 'd3';
import getUrl from './config';

const MARGIN = {TOP: 10, BOTTOM: 75, LEFT: 50, RIGHT: 10};
const WIDTH = 900 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

class D3Chart {
  constructor(element) {
    const vis = this;
    vis.g = d3.select(element)
      .append('svg')
        .attr('width', WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
        .attr('height', HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append('g')
        .attr('transform', `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

    d3.json(getUrl('three'))
      .then(resp => {
        vis.data = resp.results.map(d => {
          return {
            title: d.title,
            fat: d.nutrition.nutrients[1].amount,
            calories: d.nutrition.nutrients[0].amount
          }
        })
        vis.update();
      })
      .catch(e => {
        console.log(e);
      });
    
    vis.yLabel = vis.g.append('text')
      .attr('x', -(HEIGHT / 2))
      .attr('y', -34)
      .attr('text-anchor', 'middle')
      .text('Amount of fat (grams)')
      .attr('transform', 'rotate(-90)')
    
    vis.xAxisGroup = vis.g.append('g')
      .attr('transform', `translate(0, ${HEIGHT})`);
    
    vis.yAxisGroup = vis.g.append('g');
  }

  update(selectedRecipes, dietarySelection) {
    const vis = this;

    vis.data = selectedRecipes ? selectedRecipes : vis.data;

    const x = d3.scaleBand()
      .domain(vis.data.map(d => d.title))
      .range([0, WIDTH])
      .paddingInner(0.5)
      .paddingOuter(0.1);

    const xAxisCall = d3.axisBottom(x);

    vis.xAxisGroup
      .call(xAxisCall)
    .selectAll('text')
      .attr('text-anchor', 'end')
      .attr('dx', '-1em')
      .attr('dy', '-8em')
      .attr('font-size', '12px')
      .attr('transform', 'rotate(90)')
    
    const y = d3.scaleLinear()
      .domain([
        d3.min(vis.data, d => dietarySelection === 'fat' ? d.fat : d.calories) * 0.5,
        d3.max(vis.data, d => dietarySelection === 'fat' ? d.fat : d.calories)
      ])
      .range([HEIGHT, 0]);
    
    const yAxisCall = d3.axisLeft(y);
    
    vis.yAxisGroup
      .call(yAxisCall);

    // JOIN
    const rects = vis.g.selectAll('rect')
      .data(vis.data);
    
    // EXIT
    rects.exit()
      .remove();

    // UPDATE
    rects
      .attr('x', d => x(d.title))
      .attr('y', d => y(dietarySelection === 'fat' ? d.fat : d.calories))
      .attr('height', d => HEIGHT - y(dietarySelection === 'fat' ? d.fat : d.calories))
      .attr('width', x.bandwidth())
      .attr('fill', '#05386B');

    // ENTER
    rects.enter().append('rect')
      .attr('x', d => x(d.title))
      .attr('width', x.bandwidth())
      .attr('fill', '#05386B')
      .attr('y', HEIGHT)
      .transition(1000)
        .attr('y', d => y(dietarySelection === 'fat' ? d.fat : d.calories))
        .attr('height', d =>  HEIGHT - y(dietarySelection === 'fat' ? d.fat : d.calories));


  }
}

export default D3Chart;