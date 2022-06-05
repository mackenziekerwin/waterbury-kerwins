import { Container, Title, Body, Column } from './styled';
import { PrismicRichText } from '@prismicio/react';

const Cover = ({ title, introduction }) => (
  <Container>
    <Title>{title}</Title>
    <Body>
      <PrismicRichText
        field={introduction}
        components={{
          paragraph: ({ children }) => <Column>{children}</Column>,
        }}
      />
    </Body>
  </Container>
);

export default Cover;
