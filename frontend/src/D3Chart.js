import * as d3 from 'd3';
import getUrl from './config';

const MARGIN = {TOP: 10, BOTTOM: 75, LEFT: 40, RIGHT: 10};
const WIDTH = 586 - MARGIN.LEFT - MARGIN.RIGHT;
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


    d3.json(getUrl())
      .then(resp => {
        vis.data = resp.results.map(d => {
          return {
            title: d.title,
            fat: d.nutrition.nutrients[0].amount
          }
        })
        vis.update();
      })
      .catch(e => {
        console.log(e);
      });
    
    vis.xLabel = vis.g.append('text')
      .attr('x', WIDTH / 2)
      .attr('y', HEIGHT + 70)
      .attr('text-anchor', 'middle')
      .text('Recipe names')

  }

  update() {
    const vis = this;

    const x = d3.scaleBand()
      .domain(vis.data.map(d => d.title))
      .range([0, WIDTH])
      .paddingInner(0.4)
    
    const y = d3.scaleLinear()
      .domain([
        0,
        d3.max(vis.data, d => d.fat)
      ])
      .range([0, HEIGHT]);

    const rects = vis.g.selectAll('rect')
      .data(vis.data)
    
    rects.enter().append('rect')
      .attr('x', d => x(d.title))
      .attr('y', d => HEIGHT - y(d.fat))
      .attr('height', d => y(d.fat))
      .attr('width', x.bandwidth())
      .attr('fill', 'lime')

  }
}

export default D3Chart;