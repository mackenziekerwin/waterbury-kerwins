import styled from 'styled-components';
import { min } from '../../constants/breakpoints';

export const StyledSVG = styled.svg`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: none;
  ${min.desktopSm} {
    display: block;
  }
`;
