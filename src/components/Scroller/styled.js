import styled from 'styled-components';
import { min } from '../../constants/breakpoints';

export const ScrollContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  background: linear-gradient(
    0.25turn,
    rgba(47, 79, 79, 1),
    rgba(47, 79, 79, 0)
  );
  padding: 0px 24px;
  ${min.tablet} {
    width: 66%;
    padding: 0px 70px;
  }
  ${min.desktopSm} {
    width: 33%;
  }
`;
