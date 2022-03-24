import { Container, H1 } from './styled';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';
import imageIndex from '../../images';
import ReactCompareImage from 'react-compare-image';
import { ORANGE } from '../../constants/colors';
import Handle from '../../images/handle.svg';

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
          sliderLineColor={ORANGE}
          handle={<img src={Handle} alt="Slider handle" />}
        />
      )}
      {paragraphs && paragraphs.map((p) => <p key={p}>{p}</p>)}
    </Container>
  );
};

export default Step;
