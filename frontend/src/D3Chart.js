import * as d3 from 'd3';

const MARGIN = {TOP: 10, BOTTOM: 10, LEFT: 10, RIGHT: 10};
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

class D3Chart {
  constructor(element) {
    const vis = this;
    const g = d3.select(element)
      .append('svg')
        .attr('width', WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
        .height('height', HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append('g')
        .attr('transform', `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);
  }

  update() {

  }
}

export default D3Chart;