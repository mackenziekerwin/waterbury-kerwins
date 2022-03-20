import { Container, H1 } from './styled';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';
import imageIndex from '../../images';
import ReactCompareImage from 'react-compare-image';

const Step = ({ handleInView, heading, paragraphs, images }) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    handleInView(inView);
  }, [inView, handleInView]);

  return (
    <Container ref={ref}>
      {heading && <H1>{heading}</H1>}
      {images && (
        <ReactCompareImage
          leftImage={imageIndex[images[0].src]}
          rightImage={imageIndex[images[1].src]}
          hover
          sliderPositionPercentage={1}
          // sliderLineColor="#F9BF3B"
          sliderLineColor="black"
          // handle={<React.Fragment />}
        />
      )}
      {paragraphs && paragraphs.map((p) => <p key={p}>{p}</p>)}
    </Container>
  );
};

export default Step;
