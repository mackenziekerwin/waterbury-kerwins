import styled from 'styled-components';
import { WHITE } from '../../constants/colors';

export const Table = styled.table`
  font-size: 12px;
  border-collapse: collapse;
  background-color: rgba(47, 79, 79, 0.85);

  td,
  th {
    padding: 4px 6px;
    border: 0.5px solid ${WHITE};
    text-align: left;
    vertical-align: top;
  }
`;
