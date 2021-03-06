import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const H1 = styled.h1`
  font-family: 'adobe-caslon-pro', serif;
  font-weight: 400;
  font-style: italic;
  font-size: 4rem;
  line-height: 4.8rem;
  font-feature-settings: 'pnum' on, 'onum' on, 'cswh' off;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Caption = styled.p`
  font-size: 12px;
`;
