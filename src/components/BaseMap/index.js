import { useEffect, useRef } from 'react';
import { select, geoPath } from 'd3';
import waterbury from '../../data/waterbury.json';
import labels from '../../data/labels.json';
import { projection } from '../../constants/constants.js';
import { StyledSVG } from './styled';

const path = geoPath().projection(projection);

const BaseMap = ({ children }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = select('svg');

    svg
      .selectAll('text')
      .data(labels)
      .join('text')
      .lower()
      .attr('font-family', 'franklin-gothic-urw')
      .style('font-size', '14px')
      .style('font-style', 'italic')
      .style('max-width', '50')
      .attr('fill', '#FFFFFF')
      .attr('opacity', '0.5')
      .attr('x', (d) => projection([d.coordinates[1], d.coordinates[0]])[0])
      .attr('y', (d) => projection([d.coordinates[1], d.coordinates[0]])[1])
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .text((d) => d.label);

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
