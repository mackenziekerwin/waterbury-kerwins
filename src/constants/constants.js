import { geoMercator, scaleOrdinal, schemeCategory10 } from 'd3';

const projectionWidth = 1280;
const projectionHeight = 721;

export const projection = geoMercator()
  .center([-73.03627092863897, 41.549684775292924])
  .scale(1100000)
  .translate([(projectionWidth * 2) / 3, projectionHeight / 2]);

export const color = scaleOrdinal(schemeCategory10);
