import { useEffect, useRef } from 'react';
import { select, geoPath } from 'd3';
import waterbury from '../../data/waterbury.json';
import { projection } from '../../constants/constants.js';
import { StyledSVG } from './styled';

const path = geoPath().projection(projection);

const BaseMap = ({ children }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = select('svg');

    svg
      .append('path')
      .lower()
      .attr('fill', 'none')
      .attr('d', path(waterbury))
      .attr('stroke', '#fff')
      .attr('stroke-width', 0.25);
  }, []);

  return <StyledSVG ref={svgRef}>{children}</StyledSVG>;
};

export default BaseMap;
