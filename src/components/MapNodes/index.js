import { useEffect, useRef } from 'react';
import {
  select,
  forceSimulation,
  forceCollide,
  forceX,
  forceY,
  pointer,
} from 'd3';
import { projection } from '../../constants/constants.js';
import Tooltip from '../Tooltip/index.js';

const MapNodes = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    let node = select('g').selectAll('circle');

    const ticked = () => {
      node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
    };

    const simulation = forceSimulation()
      .alphaTarget(0)
      .force('collide', forceCollide(3.5))
      .force(
        'x',
        forceX().x((d) => projection([d.coordinates[1], d.coordinates[0]])[0])
      )
      .force(
        'y',
        forceY().y((d) => projection([d.coordinates[1], d.coordinates[0]])[1])
      )
      .on('tick', ticked);

    const old = {};
    node.data().forEach((d) => {
      old[d.name] = d;
    });
    const nodes = data.map((d) => Object.assign(old[d.name] || {}, d));

    simulation.nodes(nodes);
    simulation.alpha(1).restart();

    const tooltip = select('.tooltip-wrapper').select('table');

    const onMouseover = (_, d) =>
      tooltip
        .html(Tooltip(d))
        .style('left', `${d.x}px`)
        .style('top', `${d.y}px`)
        .style('opacity', 0)
        .transition()
        .duration(200)
        .style('opacity', 1);

    const onMousemove = (event) => {
      const [x, y] = pointer(event);
      tooltip.style('left', `${x}px`).style('top', `${y}px`);
    };

    const onMouseout = () =>
      tooltip.transition().duration(100).style('opacity', 0);

    node = node
      .data(nodes, (d) => d.name)
      .join(
        (enter) =>
          enter
            .append('circle')
            .attr('fill', '#F9BF3B')
            .attr('stroke', '#2f4f4f')
            .call((enter) => enter.transition().attr('r', 4))
            .on('mouseover', onMouseover)
            .on('mousemove', onMousemove)
            .on('mouseout', onMouseout),
        (update) => update,
        (exit) => exit.call((exit) => exit.transition().remove().attr('r', 0))
      );

    return () => {
      simulation.stop();
      onMouseout();
    };
  }, [data]);

  return <g ref={ref}></g>;
};

export default MapNodes;
