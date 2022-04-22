import { useEffect, useRef, useState } from 'react';
import {
  select,
  forceSimulation,
  forceCollide,
  forceX,
  forceY,
  pointer,
} from 'd3';
import { projection } from '../../constants/constants.js';
import { GREEN, ORANGE } from '../../constants/colors.js';
import Tooltip from '../Tooltip';

const MapNodes = ({ data }) => {
  const ref = useRef();
  const [tooltipData, setTooltipData] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({});

  useEffect(() => {
    let node = select('g').selectAll('circle');

    const ticked = () => {
      node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
    };

    const simulation = forceSimulation()
      .alphaTarget(0)
      .force('collide', forceCollide(4.5))
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

    const onMouseover = (event, d) => {
      const { x, y } = d;
      select(event.currentTarget).classed('touched', true);
      setTooltipPos({ x, y });
      setTooltipData(d);
    };

    const onMousemove = (event) => {
      const [x, y] = pointer(event);
      setTooltipPos({ x, y });
    };

    const onMouseout = () => setTooltipData(null);

    node = node
      .data(nodes, (d) => d.name)
      .join(
        (enter) =>
          enter
            .append('circle')
            .attr('fill', ORANGE)
            .attr('stroke', GREEN)
            .classed(
              'pulse',
              (d) => d.name === 'Margaret Kerwin' || d.name === 'John Lawlor'
            )
            .call((enter) => enter.transition().attr('r', 7))
            .on('mouseover', onMouseover)
            .on('mousemove', onMousemove)
            .on('mouseout', onMouseout),
        (update) => update,
        (exit) => exit.call((exit) => exit.transition().remove().attr('r', 0))
      );

    return () => {
      simulation.stop();
      onMouseout();
      node.classed('pulse', false);
    };
  }, [data]);

  return (
    <>
      <g ref={ref}></g>
      {tooltipData && <Tooltip data={tooltipData} pos={tooltipPos} />}
    </>
  );
};

export default MapNodes;
