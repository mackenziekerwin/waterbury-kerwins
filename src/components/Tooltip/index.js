import { select } from 'd3';
import { useEffect } from 'react';
import { Table } from './styled';

const Tooltip = ({ data, pos }) => {
  useEffect(() => {
    const tooltip = select('#tooltip');
    tooltip.attr('opacity', 0).transition().duration(200).attr('opacity', 1);
    return () => {
      tooltip.transition().duration(100).attr('opacity', 0);
    };
  }, [data]);

  useEffect(() => {
    const { x, y } = pos;
    select('#tooltip')
      .attr('x', `${x + 10}px`)
      .attr('y', `${y + 15}px`);
  }, [pos]);

  const { name, age, spouse, employer } = data;

  return (
    <foreignObject width="225px" height="110px" id="tooltip">
      <Table>
        <thead>
          <tr>
            <th colSpan="2">{name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Age</th>
            <td>{age}</td>
          </tr>
          {spouse && (
            <tr>
              <th>Spouse</th>
              <td>{spouse}</td>
            </tr>
          )}
          {employer && (
            <tr>
              <th>Employer</th>
              <td>{employer}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </foreignObject>
  );
};

export default Tooltip;
