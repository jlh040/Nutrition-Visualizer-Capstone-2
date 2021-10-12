import * as d3 from 'd3';
import { apiKey, getUrl } from './config';

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



    const rects = vis.g.selectAll('rect')
      .data(data);
    
    rects.enter()

    
  }

  update() {
    const vis = this;


  }
}

export default D3Chart;