import { geoMercator, scaleOrdinal, schemeCategory10 } from 'd3';

const projectionWidth = 1280;
const projectionHeight = 721;

export const projection = geoMercator()
  .center([-73.03292303164338, 41.55011127583599])
  .scale(800000)
  .translate([(projectionWidth * 2) / 3, projectionHeight / 2]);

export const color = scaleOrdinal(schemeCategory10);
