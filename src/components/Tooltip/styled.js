import styled from 'styled-components';

export const Table = styled.table`
  opacity: 0;
  position: absolute;
  left: 300px;
  top: 200px;
  font-size: 12px;
  border-collapse: collapse;
  background-color: rgba(47, 79, 79, 0.85);
  z-index: 2;
  th,
  td {
    padding: 4px 6px;
    border: 0.5px solid #ffffff;
  }
`;

export const Th = styled.th`
  text-align: left;
`;
