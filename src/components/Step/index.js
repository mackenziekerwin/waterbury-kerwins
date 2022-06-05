import { Container, H1, Image, Caption } from './styled';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';
import { PrismicRichText } from '@prismicio/react';

const Step = ({ handleInView, heading, paragraphs, image, caption }) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    handleInView(inView);
  }, [inView, handleInView]);

  return (
    <Container ref={ref}>
      <PrismicRichText
        field={heading}
        components={{ heading1: ({ children }) => <H1>{children}</H1> }}
      />
      {image.url && (
        <>
          <Image src={image.url} alt={image.alt} />
          <PrismicRichText
            field={caption}
            components={{
              paragraph: ({ children }) => <Caption>{children}</Caption>,
            }}
          />
        </>
      )}
      <PrismicRichText field={paragraphs} />
    </Container>
  );
};

export default Step;
