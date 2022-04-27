import styled from 'styled-components';
import { min } from '../../constants/breakpoints';
import { WHITE } from '../../constants/colors';
import { H1 } from '../Step/styled';

export const Container = styled.div`
  width: calc(100vw - 70px);
  height: 100vh;
  background: linear-gradient(
    rgba(47, 79, 79, 1),
    rgba(47, 79, 79, 0.875),
    rgba(47, 79, 79, 0.75),
    rgba(47, 79, 79, 0)
  );
  margin-left: -70px;
  padding-left: 70px;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${WHITE};
`;

export const Title = styled(H1)`
  font-size: 6rem;
  line-height: 7.2rem;
  margin: 0;
`;

export const Body = styled.div`
  ${min.tablet} {
    display: flex;
  }
`;

export const Column = styled.p`
  ${min.tablet} {
    &:not(:last-of-type) {
      margin-right: 2rem;
    }
    width: 25%;
  }
`;
