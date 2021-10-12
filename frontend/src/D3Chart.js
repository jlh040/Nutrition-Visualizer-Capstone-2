import * as d3 from 'd3';
import getUrl from './config';

const MARGIN = {TOP: 10, BOTTOM: 10, LEFT: 10, RIGHT: 10};
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
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
      })
      .catch(e => {
        console.log(e);
      });

    const x = d3.scaleBand()
      .domain(vis.data.map(d => d.title))
      .range([0, WIDTH]);
    
    const y = d3.scaleLinear()
      .domain([
        d3.min(vis.data, d => d.fat),
        d3.max(vis.data, d => d.fat)
      ])

    
  }

  update() {
    const vis = this;


  }
}

export default D3Chart;