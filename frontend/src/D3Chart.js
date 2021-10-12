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
      .then(data => {
        const recipeInfo = data.results.map(d => {
          return {
            title: d.title,
            fat: d.nutrition.nutrients[0].amount
          }
        })
        console.log(recipeInfo);
        vis.data = data;
      })
    const rects = vis.g.selectAll('rect')
      .data(vis);
    
    rects.enter()

    
  }

  update() {
    const vis = this;


  }
}

export default D3Chart;