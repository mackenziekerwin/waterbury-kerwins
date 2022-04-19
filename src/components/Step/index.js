import { Container, H1, Image } from './styled';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';
import imageIndex from '../../images';

const Step = ({ handleInView, heading, paragraphs, images }) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    handleInView(inView);
  }, [inView, handleInView]);

  return (
    <Container ref={ref}>
      {heading && <H1>{heading}</H1>}
      {images &&
        images.map((image, i) => (
          <Image key={i} src={imageIndex[image.src]} alt={image.alt} />
        ))}
      {paragraphs && paragraphs.map((p) => <p key={p}>{p}</p>)}
    </Container>
  );
};

export default Step;
